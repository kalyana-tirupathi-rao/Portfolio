// src/pages/_app.js
import React, { useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyle from "../styles/globals";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  const [themeName, setThemeName] = useState("dark");
  const theme = useMemo(
    () => (themeName === "dark" ? darkTheme : lightTheme),
    [themeName]
  );

  const toggleTheme = () =>
    setThemeName((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <GlobalStyle />
      <Layout toggleTheme={toggleTheme} themeName={themeName}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
