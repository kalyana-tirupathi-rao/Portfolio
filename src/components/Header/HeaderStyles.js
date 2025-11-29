// src/components/Header/HeaderStyles.js
import styled from "styled-components";

/* ===========================================
   HEADER CONTAINER
=========================================== */
export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.body};
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
`;

/* ===========================================
   NAVIGATION WRAPPER
=========================================== */
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ===========================================
   LOGO
=========================================== */
export const Logo = styled.a`
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

/* ===========================================
   DESKTOP NAV LINKS
=========================================== */
export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const NavLinkItem = styled.a`
  color: ${({ theme }) => theme.muted};
  font-weight: 500;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  transition: 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
    background: rgba(255,255,255,0.06);
  }
`;

/* ===========================================
   THEME TOGGLE BUTTON
=========================================== */
export const ToggleBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.muted}33;
  color: ${({ theme }) => theme.text};
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.muted}22;
    transform: scale(1.05);
  }
`;

/* ===========================================
   MOBILE MENU BUTTON
=========================================== */
export const MobileMenuButton = styled.button`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline-flex;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

/* ===========================================
   MOBILE DROPDOWN MENU
=========================================== */
export const MobileMenu = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: ${({ theme }) => theme.card};
    margin-top: 1rem;
    padding: 1.2rem;
    border-radius: 10px;
    box-shadow: 0 4px 18px rgba(0,0,0,0.15);
    animation: slideDown 0.25s ease forwards;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    a {
      padding: 0.6rem;
      border-radius: 6px;
      color: ${({ theme }) => theme.text};
      font-size: 1.1rem;
      transition: 0.2s ease;

      &:hover {
        background: rgba(255,255,255,0.05);
      }
    }
  }
`;
