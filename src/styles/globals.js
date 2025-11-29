import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --accent: ${({ theme }) => theme.accent};
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease, color 0.3s ease;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  * {
    transition: background 0.3s ease, color 0.3s ease;
    box-sizing: border-box;
  }

  .BgAnimation__svg {
    opacity: 0.18;
    mix-blend-mode: multiply;
    pointer-events: none;
  }
`;

export default GlobalStyle;
