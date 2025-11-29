import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: ${({ main }) => (main ? "3rem" : "2rem")};
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;

  span {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: ${({ main }) => (main ? "2.3rem" : "1.6rem")};
  }
`;
