"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
      className="bg-red-500 border-2 border-green-500 hover:bg-red-600 p-2" // TEMPORARY DEBUG STYLES, added p-2
    >
      TEST BTN {/* ADDED VISIBLE TEXT */}
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-white" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-white" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
}
