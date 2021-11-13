import * as React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

export const Button: React.FC<Props> = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border: 2px solid #272f59;
  font-weight: 700;
  background-color: #272f59;
  color: #f2e85e;
  transition: all 0.25s ease-out;
  @media screen and (max-width: 1024px) {
    padding: 8px;
  }

  &:hover {
    background-color: #f2e85e;
    color: #272f59;
  }
`;
