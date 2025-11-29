// src/styles/globals.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *::before, *::after { box-sizing: inherit; }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.25s ease, color 0.25s ease;
  }

  a { color: inherit; text-decoration: none; }

  h1,h2,h3,h4 { margin: 0; }

  /* small helpers */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
`;

export default GlobalStyle;