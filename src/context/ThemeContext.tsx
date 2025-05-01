
import React, { createContext, useContext, useEffect } from "react";

type Theme = "light";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: Theme;
}

const initialState: ThemeContextType = {
  theme: "light",
};

const ThemeContext = createContext<ThemeContextType>(initialState);

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const theme: Theme = "light";

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous class
    root.classList.remove("dark");
    
    // Add light theme
    root.classList.add("light");
    
    // Add transition on body
    const body = window.document.body;
    body.style.transition = "background-color 0.3s ease, color 0.3s ease";
  }, []);

  const value = {
    theme,
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
};
