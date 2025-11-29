import styled from "styled-components";

export const Section = styled.section`
  display: ${({ grid }) => (grid ? "grid" : "flex")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  padding: ${({ nopadding }) => (nopadding ? "0" : "4rem 2rem")};
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1.2rem;
  }
`;
