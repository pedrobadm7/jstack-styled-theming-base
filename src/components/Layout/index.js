import React from "react";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header  selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
      <PostsList />
      <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
    </>
  );
}
