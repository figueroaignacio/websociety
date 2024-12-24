"use server";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { z } from "zod";
import { signIn } from "./auth";
import pool from "./db";
import { loginSchema, registerSchema } from "./schemas";

export async function loginAction(values: z.infer<typeof loginSchema>) {
  try {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      return { error: "Invalid credentials" };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Invalid credentials" };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function registerAction(values: z.infer<typeof registerSchema>) {
  try {
    const { data, success } = registerSchema.safeParse(values);
    if (!success) {
      return { error: "Invalid data" };
    }

    // Check if user exists
    const userResult = await pool.query(
      "SELECT id FROM users WHERE email = $1 LIMIT 1",
      [data.email]
    );

    if (userResult.rows.length > 0) {
      return { error: "User already exists" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Insert new user
    const newUserResult = await pool.query(
      `INSERT INTO users (email, password, role, name) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id, email, role, name`,
      [data.email, hashedPassword, "user", data.name]
    );

    // Auto login after successful registration
    const loginResult = await signIn("credentials", {
      email: data.email,
      password: values.password, // Use the non-hashed password for login
      redirect: false,
    });

    if (loginResult?.error) {
      return {
        error: "Registration successful but could not log in automatically",
      };
    }

    return {
      success: true,
      user: newUserResult.rows[0],
    };
  } catch (error) {
    console.error(error);
    return { error: "Internal server error" };
  }
}
