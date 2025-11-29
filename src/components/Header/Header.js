// src/components/Header/Header.js
import React from "react";
import { HeaderContainer, Logo, Nav, NavLinks, NavLinkItem, ToggleBtn } from "./HeaderStyles";
import { FiSun, FiMoon, FiGithub } from "react-icons/fi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Header = ({ toggleTheme, themeName }) => {
  return (
    <HeaderContainer>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Logo href="/">Kalyana Rao</Logo>

        {/* Navigation */}
        <Nav>
          <NavLinks>
            <NavLinkItem href="#projects">Projects</NavLinkItem>
            <NavLinkItem href="#tech">Technologies</NavLinkItem>
            <NavLinkItem href="#about">About</NavLinkItem>
            <NavLinkItem href="#timeline">Timeline</NavLinkItem>
          </NavLinks>

          {/* Right Icons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kalyana-tirupathi-rao"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCgXTWisHjK7FJa7xb71oN6A"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>

            {/* Theme Toggle */}
            <ToggleBtn onClick={toggleTheme} aria-label="toggle theme">
              {themeName === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </ToggleBtn>

            {/* GitHub */}
            <a
              href="https://github.com/kalyana-tirupathi-rao"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
