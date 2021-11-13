//libraries
import * as React from "react";
import styled from "styled-components";
//types
//components
import { Button } from "./index";

interface Props {
  template: boolean;
  setTemplate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = (props) => {
  const toggle = (): void => {
    props.setTemplate((prevState) => !prevState);
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>署名ジェネレータ</HeaderTitle>
      <Button onClick={toggle}>
        {props.template ? "署名を入力する" : "テンプレートを選ぶ"}
      </Button>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #f2e85e;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;
