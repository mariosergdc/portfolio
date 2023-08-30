import React, { createContext, useState } from "react";
import { Theme } from "../types";

const initialTheme: Theme = "dark";

const ThemeContext = createContext(initialTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const handleTheme = (str: Theme) => {
    setTheme(str);
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
