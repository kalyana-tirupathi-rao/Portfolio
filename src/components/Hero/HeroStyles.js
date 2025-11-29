import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem 1.5rem;
    max-width: 650px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 1rem;
    max-width: 100%;
    margin: 0 auto;
  }
`;
