import React, { useState, useMemo, useEffect, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //      theme: 'dark'
//   //    };
//   //   this.handleToggleTheme = this.handleToggleTheme.bind(this);
//   // }

//   render() {
//     return (
//       <ThemeProvider>
//         <ThemeContext.Consumer>
//           {({ theme }) => (
//             <StyledThemeProvider theme={themes[theme] || themes.dark}>
//               <GlobalStyle />
//               <Layout />
//             </StyledThemeProvider>
//           )}
//         </ThemeContext.Consumer>
//       </ThemeProvider>
//     );
//   }
// }

const App = () => {
  const { theme } = useContext(ThemeContext);

  // const [theme, setTheme] = useState("dark");

  const currentTheme = useMemo(() => {
    //themes[theme] = themes['dark'] = themes.theme = themes.dark
    return themes[theme] || themes.dark;
  }, [theme]);

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </StyledThemeProvider>
  );
};

export default App;
