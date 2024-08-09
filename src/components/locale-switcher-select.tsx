"use client";

// Hooks
import { usePathname, useRouter } from "@/navigation";
import { useTransition } from "react";

// Components
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";

// Icons
import { Languages } from "lucide-react";

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
        <Languages size={16} />
        <p className="sr-only">{label}</p>
        {defaultValue.toUpperCase()}
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
}
