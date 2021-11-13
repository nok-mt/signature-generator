import * as React from "react";
import styled from "styled-components";
//types
import { TemplateType } from "../types/TemplateType";
//components
import { TemplateItem } from "./index";

export const Template: React.FC<TemplateType> = (props) => {
  return (
    <TemplateWrapper>
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={"─────────────────────────"}
        name={"シンプルイズベスト"}
      />
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"}
        name={"万里の長城"}
      />
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={"〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜"}
        name={"南国の風"}
      />
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={"───────−- -  -　　　　　　-  - -−───────"}
        name={"侘び寂び"}
      />
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={"○●-----------------------------------------------------------●○"}
        name={"糸電話"}
      />
    </TemplateWrapper>
  );
};
export default Template;

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 50vw;
  padding: 60px;
  background-color: #dddddd;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    padding: 40px 20px;
  }
`;
