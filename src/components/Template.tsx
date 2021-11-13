import * as React from "react";
import styled from "styled-components";
//types
import { TemplateType } from "../types/TemplateType";

export const Template: React.FC<TemplateType> = (props) => {
  return (
    <TemplateWrapper>
      <div onClick={() => props.setLineTemp("──────────────────────────")}>
        シンプルイズベスト
      </div>
      <div
        onClick={() =>
          props.setLineTemp(
            "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
          )
        }
      >
        万里の長城
      </div>
      <div
        onClick={() =>
          props.setLineTemp("〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜")
        }
      >
        南国の風
      </div>
      <div
        onClick={() =>
          props.setLineTemp("───────−- -  -　　　　　　-  - -−───────")
        }
      >
        侘び寂び
      </div>
    </TemplateWrapper>
  );
};
export default Template;

const TemplateWrapper = styled.div`
  width: 50vw;
  height: 100%auto;
  padding: 60px;
  background-color: #dddddd;
`;
