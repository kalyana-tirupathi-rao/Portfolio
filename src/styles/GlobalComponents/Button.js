import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.accent};
  color: white;
  padding: 0.9rem 1.7rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.4rem;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export default Button;
