import styled from "styled-components";

export const SectionDivider = styled.hr`
  height: 3px;
  width: 64px;
  background: ${({ theme }) => theme.accent};
  border: none;
  border-radius: 3px;
  margin: 2.5rem 0;
`;
