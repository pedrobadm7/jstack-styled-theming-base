import React, { useState, useMemo, useEffect, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //      theme: 'dark'
  //    };
  //   this.handleToggleTheme = this.handleToggleTheme.bind(this);
  // }
  state = { changed: false };

  componentDidMount() {
    console.log("componentDidMount executed");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", {
      currentState: this.state,
      prevProps,
      prevState,
    });
  }

  componentDidCatch(error, info) {
    console.log("error: ", error);
    console.log("info: ", info);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", {
      currentState: this.state,
      nextProps,
      nextState,
    });

    return true;
  }

  render() {
    console.log("rendered");
    return (
      <>
        <button onClick={() => this.setState({ changed: !this.state.changed })}>
          Change state
        </button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }
}

// const App = () => {
//   const { theme } = useContext(ThemeContext);

//   const currentTheme = useMemo(() => {
//     //themes[theme] = themes['dark'] = themes.theme = themes.dark
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   return (
//     <StyledThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout />
//     </StyledThemeProvider>
//   );
// };

export default App;
