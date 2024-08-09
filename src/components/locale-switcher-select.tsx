"use client";

// Hooks
import { useTransition } from "react";

// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

// Config
import { setUserLocale } from "@/services/locale";
import { Locale } from "../config";

// Utils
import clsx from "clsx";

// Icons
import { LanguagesIcon } from "lucide-react";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export function LocaleSwitcherSelect({ defaultValue, items, label }: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger
        aria-label={label}
        className={clsx(
          "rounded-sm p-2 transition-colors hover:bg-slate-200",
          isPending && "pointer-events-none opacity-60"
        )}
      >
        <LanguagesIcon className="text-muted-foreground" size={16} />
        <span className="text-xs text-muted-foreground">{label}</span>
      </SelectTrigger>
      <SelectContent align="end" position="popper">
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            <span>{item.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
