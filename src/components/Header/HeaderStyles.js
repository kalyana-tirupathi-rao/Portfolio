import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.2rem 0;
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${({ theme }) => theme.nav};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.08);
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.3px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.4rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkItem = styled.a`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const ToggleBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.muted};
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  transition: 0.2s;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.accent};
  }
`;
