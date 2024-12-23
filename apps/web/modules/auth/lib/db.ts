import { Pool } from "@neondatabase/serverless";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
}) as unknown as import("pg").Pool;

export default pool;
