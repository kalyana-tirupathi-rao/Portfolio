// src/pages/_app.js
import React, { useState, useMemo } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyle from "../styles/globals";
import "../styles/globals.css";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  // default theme = dark
  const [themeName, setThemeName] = useState("dark");

  const theme = useMemo(
    () => ({
      ...(themeName === "dark" ? darkTheme : lightTheme),
      toggleTheme: () =>
        setThemeName((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [themeName]
  );

  return (
    <>
      <Head>
        <title>Kalyana Tirupathi Rao | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Kalyana Tirupathi Rao - Data Engineer & ML Enthusiast" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout toggleTheme={theme.toggleTheme} themeName={themeName}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;