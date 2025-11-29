// src/components/Header/Header.js
import React, { useState } from "react";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLinkItem,
  ToggleBtn,
  MobileMenuButton,
  MobileMenu,
} from "./HeaderStyles";
import { FiSun, FiMoon, FiGithub, FiMenu, FiX } from "react-icons/fi";

const Header = ({ toggleTheme, themeName }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav className="container">
        {/* Logo */}
        <Logo href="/">Kalyana Rao</Logo>

        {/* Desktop Links */}
        <NavLinks>
          <NavLinkItem href="#projects">Projects</NavLinkItem>
          <NavLinkItem href="#tech">Technologies</NavLinkItem>
          <NavLinkItem href="#about">About</NavLinkItem>
          <NavLinkItem href="#timeline">Timeline</NavLinkItem>
        </NavLinks>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme Toggle */}
          <ToggleBtn onClick={toggleTheme} aria-label="toggle theme">
            {themeName === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </ToggleBtn>

          {/* GitHub */}
          <a
            href="https://github.com/kalyana-tirupathi-rao"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          >
            <FiGithub size={20} />
          </a>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </MobileMenuButton>
        </div>
      </Nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <MobileMenu>
          <NavLinkItem href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLinkItem>
          <NavLinkItem href="#tech" onClick={() => setMenuOpen(false)}>
            Technologies
          </NavLinkItem>
          <NavLinkItem href="#about" onClick={() => setMenuOpen(false)}>
            About
          </NavLinkItem>
          <NavLinkItem href="#timeline" onClick={() => setMenuOpen(false)}>
            Timeline
          </NavLinkItem>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
