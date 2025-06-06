
"use client";

import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline" // Use outline to give it some default visible styling
      size="sm" // Make it a bit smaller, standard size
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
      style={{
        border: '2px solid red', // Highly visible border
        padding: '8px',
        margin: '0 4px' // Add some margin to separate from other elements
      }}
    >
      {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
}
