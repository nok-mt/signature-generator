//libraries
import * as React from "react";
import styled from "styled-components";
//components
import { Button } from "./Button";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>署名ジェネレータ</HeaderTitle>
      <Button>テンプレートを選ぶ</Button>
    </HeaderWrapper>
  );
};

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
`;
