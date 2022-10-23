// import {ThemeContext, ThemeNames} from "./theme";
import React, { createContext, useState } from "react";
import { base, themes } from "../styles/theme";

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

// TODO change location to model folder
export type ThemeNames = "light" | "dark";
// TODO change location to model folder
export type ThemeContextValue = {
  theme?: ThemeNames;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
});

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const [theme, setTheme] = useState<ThemeNames>("dark");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleTheme = () => {
    setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
  };

  const colorMode = theme === "light" ? themes.light : themes.dark;
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: () => {
          setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
        },
      }}
    >
      <div className={`${base.class} ${colorMode} _container`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
