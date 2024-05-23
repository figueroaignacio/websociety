"use client";

// Next
import { useRouter } from "next/navigation";

// Icons
import { ArrowLeft } from "lucide-react";

interface GoBackProps {
  title: string;
}

export function BackButton({ title }: GoBackProps) {
  const router = useRouter();
  return (
    <button
      className="items-center flex gap-2 relative group text-primary underline-offset-4 hover:underline"
      onClick={() => router.back()}
    >
      <ArrowLeft
        className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:-translate-x-1"
        size=".85rem"
      />
      <p>{title}</p>
    </button>
  );
}
