import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container } from "./LayoutStyles";

const Layout = ({ children, toggleTheme, themeName }) => {
  return (
    <Container>
      <Header toggleTheme={toggleTheme} themeName={themeName} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
