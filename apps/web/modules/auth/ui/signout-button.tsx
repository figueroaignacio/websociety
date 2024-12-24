"use client";

// Utils
import { signOut } from "next-auth/react";

export function SignOutButton() {
  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/auth/login",
    });
  };

  return (
    <button onClick={handleSignOut} className="btn">
      Cerrar sesión
    </button>
  );
}
