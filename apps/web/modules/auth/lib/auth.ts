// import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  }) as unknown as import("pg").Pool;
  return {
    // adapter: PostgresAdapter(pool),
    session: { strategy: "jwt" },
    providers: [
      Credentials({
        authorize: async (credentials) => {
          console.log({ credentials });
          if (credentials.email !== "ignaciofigueroadev@gmail.com") {
            throw new Error("Invalid credential");
          }

          return {
            id: "1",
            name: "Ignacio Figueroa",
            email: "ignaciofigueroadev@gmail.com",
          };
        },
      }),
    ],
  };
});
