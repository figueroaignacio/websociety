"use client";

// Hooks
import { useLocale } from "next-intl";

// Hooks
import { signOut } from "next-auth/react";

// Components
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const currentLang = useLocale();

  async function handleLogout() {
    await signOut();
  }

  return (
    <Button variant="default" onClick={handleLogout}>
      Log out
    </Button>
  );
}
