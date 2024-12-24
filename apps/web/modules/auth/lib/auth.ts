// db
import PostgresAdapter from "@auth/pg-adapter";
import { Pool as NeonPool } from "@neondatabase/serverless";

// Utils
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Schema
import { loginSchema } from "./schemas";

const pool = new NeonPool({
  connectionString: process.env.DATABASE_URL,
}) as unknown as import("pg").Pool;

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(pool),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { success, data } = loginSchema.safeParse(credentials);
          if (!success) {
            return null;
          }

          const { email, password } = data;

          const userResult = await pool.query(
            `SELECT id, email, password, name FROM "users" WHERE email = $1`,
            [email]
          );

          const user = userResult.rows[0];
          if (!user) {
            return null;
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
});
