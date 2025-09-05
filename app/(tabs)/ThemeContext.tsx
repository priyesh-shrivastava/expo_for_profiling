// ThemeContext.tsx
import React, { createContext, ReactNode, useContext, useState } from "react";

type ThemeType = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: {
    background: string;
    card: string;
    text: string;
    subText: string;
    border: string;
    accent: string;
  };
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleTheme: () => {},
  colors: {
    background: "#0f172a", // default dark
    card: "#1e293b",
    text: "#fff",
    subText: "#9ca3af",
    border: "#1e40af",
    accent: "#2563eb",
  },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Define theme palettes
  const darkColors = {
    background: "#0f172a", // deep black/blue
    card: "#1e293b", // dark navy
    text: "#f9fafb",
    subText: "#9ca3af",
    border: "#1e40af",
    accent: "#2563eb",
  };

  const lightColors = {
    background: "#f8fafc", // off-white
    card: "#e0f2fe", // sky blue tint
    text: "#0f172a", // dark text
    subText: "#334155", // grey-blue
    border: "#38bdf8", // sky blue border
    accent: "#0ea5e9", // sky blue button
  };

  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
