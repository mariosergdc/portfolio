import React, { createContext, useState } from "react";
import { Theme } from "../types";

type ThemeContextType = {
  theme: Theme;
  handleTheme: (str: Theme) => void;
};

const initialTheme: ThemeContextType = {
  theme: "dark",
  handleTheme: () => {},
};

const ThemeContext = createContext(initialTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme.theme);

  const handleTheme = (str: Theme) => {
    setTheme(str);
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
