"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/config/i18n/routing";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  const router = useRouter();

  async function signout() {
    await signOut();
    router.push("/auth/login");
  }

  return <Button onClick={signout}>Sign Out</Button>;
}
