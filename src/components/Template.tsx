import * as React from "react";
import styled from "styled-components";
//types
import { TemplateType } from "../types/TemplateType";
//components
import { TemplateItem } from "./index";

export const Template: React.FC<TemplateType> = (props) => {
  return (
    <TemplateInner>
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
        line={"○●---------------------------------------------------------●○"}
        name={"綱引き"}
      />
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={"◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇"}
        name={"ひし餅"}
      />
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>★☆★"}
        name={"星に願いを"}
      />
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={"＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊"}
        name={"秘密の花園"}
      />
      <TemplateItem
        setLineTemp={props.setLineTemp}
        line={"｡.｡･.｡ﾟ+｡｡.｡･.｡ﾟ+｡｡.｡･.｡ﾟ+｡｡.｡･.｡ﾟ+｡｡.｡･.｡ﾟ+｡｡.｡･.｡*ﾟ"}
        name={"トキメキ"}
      />
    </TemplateInner>
  );
};
export default Template;

const TemplateInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 600px;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    padding: 40px 20px;
  }
`;
