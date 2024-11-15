"use client";

// Hooks
import { useFormStatus } from "react-dom";

// Components
import { Button } from "../ui/button";

interface SubmitButtonProps {
  children: React.ReactNode;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} className="my-2">
      {pending ? "Submitting" : children}
    </Button>
  );
}
