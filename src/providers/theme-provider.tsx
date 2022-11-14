// import {ThemeContext, ThemeNames} from "./theme";
import React, { createContext, useEffect, useState } from "react";
import { base, themes } from "../styles/theme";

type ColorMode = "dark" | "light";
export const themeKey = "vanilla-theme-pref";

interface ColorModeContextValues {
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
}

export const ColorModeContext = createContext<ColorModeContextValues>({
  colorMode: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode | null>("dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    if (colorMode) {
      document.documentElement.classList.add(colorMode);
    }
  }, []);

  const setter = (c: ColorMode) => {
    setColorMode(c);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(c);
  };

  const theme = colorMode === "light" ? themes.light : themes.dark;
  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode: setter,
      }}
    >
      <div className={`${base.class} ${theme} _container`}>{children}</div>
    </ColorModeContext.Provider>
  );
}

export default ThemeProvider;
