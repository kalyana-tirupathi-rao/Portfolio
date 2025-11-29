import styled from "styled-components";

export const SectionText = styled.p`
  max-width: 680px;
  color: ${({ theme }) => theme.muted};
  font-size: 1.1rem;
  line-height: 1.7;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
