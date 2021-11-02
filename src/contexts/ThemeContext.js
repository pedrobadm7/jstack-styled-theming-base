import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  // useEffect(() => {
  //   const localTheme = localStorage.getItem("theme");
  //   if (localTheme) {
  //     setTheme(localTheme);
  //   } else {
  //     setTheme("dark");
  //   }
  // }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme((prevState) => prevState);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
