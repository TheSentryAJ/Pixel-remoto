// This file is no longer used as dark mode functionality has been removed.
// You can safely delete this file from your project if you wish.
// Keeping it empty to avoid build errors if it's mistakenly imported elsewhere,
// though the primary fix is removing its usage from the RootLayout.
import type { ReactNode } from 'react';

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // ThemeProvider functionality removed
  return <>{children}</>;
}

export const useTheme = () => {
  // This hook should ideally not be called if ThemeProvider is removed.
  // Returning a default to prevent errors if it's somehow still accessed.
  return {
    theme: "light" as Theme,
    setTheme: (_theme: Theme) => {},
    toggleTheme: () => {},
  };
};
