// src/components/Acomplishments/AcomplishmentsStyles.js
import styled from "styled-components";

export const Boxes = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Box = styled.div`
  flex: 1;
  min-width: 240px;
  background: ${({ theme }) => theme.card};
  padding: 1.8rem 1.4rem;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  transition: 0.25s ease-in-out;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
  }
`;

export const BoxNum = styled.h3`
  color: ${({ theme }) => theme.accent};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

export const BoxText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.05rem;
  opacity: 0.85;
  line-height: 1.4;
`;
