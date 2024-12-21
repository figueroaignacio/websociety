import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";
import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  }) as unknown as import("pg").Pool;
  return {
    adapter: PostgresAdapter(pool),
    providers: [],
  };
});
