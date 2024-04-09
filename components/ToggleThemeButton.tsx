"use client";

// Icons
import { Laptop2, Moon, Sun } from "lucide-react";

// Utils
import { useTheme } from "next-themes";

// Components
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ToggleThemeButton() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1 ">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex justify-between"
        >
          <Sun />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex justify-between"
        >
          <Moon />
          Dark
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex justify-between"
        >
          <Laptop2 />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
