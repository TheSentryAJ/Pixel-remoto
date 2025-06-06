
"use client";

import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  if (typeof theme === 'undefined') {
    // Theme might not be available on initial server render pass for this component
    // or if context is not properly set up. Return null or a placeholder.
    // This helps prevent errors if theme is temporarily undefined.
    return (
      <Button
        variant="outline"
        size="icon"
        disabled
        className="border-muted-foreground" // Style for disabled state
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Cargando tema...</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
      className="border-2 border-border hover:border-primary focus:border-primary transition-colors" // Visible border
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
}
