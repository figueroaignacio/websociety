"use client";

// Hooks
import { usePathname, useRouter } from "@/navigation";
import { useTransition } from "react";

// Components
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";

// Icons

type Props = {
  children: React.ReactNode;
  defaultValue: Locale;
  label: string;
};

type Locale = "en" | "es";

export function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(value: Locale) {
    startTransition(() => {
      router.replace({ pathname }, { locale: value });
    });
  }

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger>
        <p className="sr-only">{label}</p>
        <div className="text-center w-full">{defaultValue.toUpperCase()}</div>
      </SelectTrigger>
      <SelectContent className="text-end">{children}</SelectContent>
    </Select>
  );
}
