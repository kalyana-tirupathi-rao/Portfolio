// src/components/Footer/FooterStyles.js
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2.5rem 0;
  margin-top: 3rem;
  background: ${({ theme }) => theme.body};
  border-top: 1px solid rgba(255,255,255,0.04);
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.muted};
  font-size: 1rem;
`;

export const FooterEmail = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;
