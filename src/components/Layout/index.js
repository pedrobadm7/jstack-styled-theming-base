import React from "react";
import { useTheme } from 'styled-components'

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

export default function Layout({ onToggleTheme, selectedTheme }) {

  const theme = useTheme();
  return (
    <>
      <Header selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
      <PostsList />
      <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />

      <div
        style={{
          marginTop: 24,
          backgroundColor: theme.footerBackgroundColor,
          padding: 24
        }}
      >
        Oi, tudo bem com você?
      </div>
    </>
  );
}
