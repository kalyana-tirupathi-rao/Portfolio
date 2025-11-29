import styled from "styled-components";

export const BgWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  width: 50%;
  height: 100%;
  z-index: -1;
  opacity: 0.25;

  @media (max-width: 768px) {
    display: none;
  }
`;
