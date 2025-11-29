import React from "react";
import { HeaderContainer, Nav, Logo, NavLinks, NavLinkItem, ToggleBtn, IconLink } from "./HeaderStyles";
import { FiSun, FiMoon, FiGithub } from "react-icons/fi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Header = ({ toggleTheme, themeName }) => {
  return (
    <HeaderContainer>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Logo href="/">My Portfolio</Logo>

        <Nav>
          <NavLinks>
            <NavLinkItem href="#projects">Projects</NavLinkItem>
            <NavLinkItem href="#tech">Technologies</NavLinkItem>
            <NavLinkItem href="#about">About</NavLinkItem>
            <NavLinkItem href="#timeline">Timeline</NavLinkItem>
          </NavLinks>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <IconLink href="https://www.linkedin.com/in/kalyana-tirupathi-rao/" target="_blank">
              <FaLinkedin size={20} />
            </IconLink>

            <IconLink href="https://www.youtube.com/channel/UCgXTWisHjK7FJa7xb71oN6A" target="_blank">
              <FaYoutube size={22} />
            </IconLink>

            <ToggleBtn onClick={toggleTheme}>
              {themeName === "dark" ? <FiSun /> : <FiMoon />}
            </ToggleBtn>

            <IconLink href="https://github.com/kalyana-tirupathi-rao" target="_blank">
              <FiGithub size={20} />
            </IconLink>
          </div>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
