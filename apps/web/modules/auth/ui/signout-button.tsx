"use client";

import { useTransition } from "react";

// Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Utils
import { signOut } from "next-auth/react";

export function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = async () => {
    startTransition(async () => {
      await signOut({
        redirect: true,
        callbackUrl: "/auth/login",
      });
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn">Cerrar sesión</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>¿Estás seguro?</DialogTitle>
        <DialogDescription>
          ¿Estás seguro de que deseas cerrar sesión? Esta acción te
          desconectará.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            onClick={handleSignOut}
            disabled={isPending}
            variant="destructive"
          >
            {isPending ? "Cerrando sesion..." : "Confirmar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
