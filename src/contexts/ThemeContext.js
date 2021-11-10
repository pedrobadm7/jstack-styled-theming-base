import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({});

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let theme = "dark";
    try {
      theme = JSON.parse(localStorage.getItem("theme"));
    } catch (error) {
      console.log(error);
    }

    this.state = {
      theme
    };
  }

  handleToggleTheme = () => {
    this.setState(
      prevState => ({
        theme: prevState.theme === "dark" ? "light" : "dark"
      }),
      () => {
        localStorage.setItem("theme", JSON.stringify(this.state.theme));
      }
    );
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("dark");

//   function handleToggleTheme() {
//     if (theme === "light") {
//       localStorage.setItem("theme", "dark");
//       setTheme("dark");
//     } else {
//       localStorage.setItem("theme", "light");
//       setTheme("light");
//     }
//   }

//   useEffect(() => {
//     const localTheme = localStorage.getItem("theme");

//     if (localTheme) {
//       setTheme(localTheme);
//     } else {
//       setTheme((prevState) => prevState);
//     }
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
