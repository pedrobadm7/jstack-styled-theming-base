import React, { useEffect } from "react";

import { useTheme } from "styled-components";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

// export default class Layout extends React.Component {
//   componentDidMount() {
//     document.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     console.log("Componente vai desmontar");
//     document.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     console.log("scrolled...");
//   };

//   render() {
//     return (
//       <>
//         <Header />
//         <PostsList />
//         <Footer />
//       </>
//     );
//   }
// }

export default function Layout() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <PostsList />
      <Footer />

      <div
        style={{
          marginTop: 24,
          backgroundColor: theme.footerBackgroundColor,
          padding: 24,
        }}
      >
        Oi, tudo bem com você?
      </div>
    </>
  );
}
