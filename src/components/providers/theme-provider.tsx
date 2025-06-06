
"use client";

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

// Helper function to get cookie on the client side
const getCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : undefined;
};

// Helper function to set cookie on the client side
const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof document === 'undefined') return;
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export function ThemeProvider({
  children,
  initialTheme, // This will be passed from RootLayout based on server-side cookie
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      // During SSR, use the theme passed from RootLayout
      return initialTheme || 'light';
    }
    // On client-side mount, prioritize cookie, then system preference, then default
    const cookieTheme = getCookie("theme") as Theme | undefined;
    if (cookieTheme) return cookieTheme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    // Apply the theme to the <html> element when the theme changes or on initial load
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    setCookie("theme", newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  // On initial client load, if initialTheme (from server cookie) differs from client detection,
  // update cookie and state to ensure consistency.
   useEffect(() => {
    const serverCookieTheme = initialTheme;
    const clientDetectedInitialTheme = getCookie("theme") as Theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    if (serverCookieTheme && serverCookieTheme !== clientDetectedInitialTheme) {
        // This case is less likely if RootLayout correctly sets initialTheme based on cookie
        // But good for robustness
        setThemeState(serverCookieTheme);
    } else if (!getCookie("theme")) {
      // If no cookie exists yet, set one based on initial detection (system pref or default)
      setTheme(theme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTheme]);


  const value = { theme, setTheme, toggleTheme };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
