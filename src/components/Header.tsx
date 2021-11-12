//libraries
import * as React from "react";
import styled from "styled-components";
//types
//components
import { Button } from "./Button";

interface Props {
  template: boolean;
  setTemplate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>署名ジェネレータ</HeaderTitle>
      {props.template ? (
        <Button onClick={() => props.setTemplate(false)}>署名を入力する</Button>
      ) : (
        <Button onClick={() => props.setTemplate(true)}>
          テンプレートを選ぶ
        </Button>
      )}
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
