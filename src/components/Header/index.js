import React, { Component, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Container } from "./styles";

// export default class Header extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {({ theme, handleToggleTheme }) => {
//           <Container>
//             <h1>JStack's Blog</h1>
//             <button type="button" onClick={handleToggleTheme}>
//               {theme === "dark" ? "🌞" : "🌚"}
//             </button>
//           </Container>;
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

export default function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={handleToggleTheme}>
        {theme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}
