"use client";

// Next
import { useRouter } from "next/navigation";

// Components
import { Button } from "@/components/ui/button";

// Icons
import { ArrowLeft } from "lucide-react";

interface GoBackProps {
  title: string;
}

export function BackButton({ title }: GoBackProps) {
  const router = useRouter();
  return (
    <Button
      variant={"backButton"}
      className="items-center flex gap-2 relative group hover:backdrop-brightness-150"
      onClick={() => router.back()}
    >
      <ArrowLeft
        className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:-translate-x-1"
        size=".85rem"
      />
      <p>{title}</p>
    </Button>
  );
}
