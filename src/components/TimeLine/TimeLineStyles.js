// src/components/TimeLine/TimeLineStyles.js
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.8rem;
  padding: 1rem 0;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const CarouselItem = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 1.5rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
  transition: 0.25s ease-in-out;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.28);
  }
`;

export const CarouselItemTitle = styled.h3`
  color: ${({ theme }) => theme.accent};
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const CarouselItemText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.05rem;
  line-height: 1.6;
  opacity: 0.9;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;
