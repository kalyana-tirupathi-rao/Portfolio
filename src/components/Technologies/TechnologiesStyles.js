// src/components/Technologies/TechnologiesStyles.js
import styled from "styled-components";

export const List = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
  width: 100%;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ListItem = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h4`
  color: ${({ theme }) => theme.accent};
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
`;

export const ListParagraph = styled.p`
  color: ${({ theme }) => theme.muted};
  font-size: 1.1rem;
  line-height: 1.6;
`;
