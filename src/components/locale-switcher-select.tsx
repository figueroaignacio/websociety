"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Locale } from "@/config";
import { setUserLocale } from "@/services/locale";
import { useTransition } from "react";

import clsx from "clsx";
import { LanguagesIcon } from "lucide-react";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
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
        <LanguagesIcon />
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
