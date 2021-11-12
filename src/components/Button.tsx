import * as React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

export const Button: React.FC<Props> = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  font-weight: 700;
  background-color: #272f59;
  color: #f2e85e;
`;
