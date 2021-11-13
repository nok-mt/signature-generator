//libraries
import * as React from "react";
import styled from "styled-components";
//types
import { InputType } from "../types/InputType";

export const Preview: React.FC<InputType> = (props) => {
  console.log(props);

  return (
    <PreviewWrapper>
      <div>
        <PreviewItem>{props.lineTemp}</PreviewItem>
        <PreviewItem>{props.name}</PreviewItem>
        <PreviewItem>{props.nameEn}</PreviewItem>
        <PreviewItem>{props.company}</PreviewItem>
        <PreviewItem>{props.department}</PreviewItem>
        <PreviewItem>{props.address}</PreviewItem>
        <PreviewItem>{props.mailAddress}</PreviewItem>
        <PreviewItem>{props.phoneNumber}</PreviewItem>
        <PreviewItem>{props.url}</PreviewItem>
        <PreviewItem>{props.lineTemp}</PreviewItem>
      </div>
    </PreviewWrapper>
  );
};
export default Preview;

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  position: --webkit-sticky;
  top: 0;
  z-index: 5;
  width: 50vw;
  height: calc(100vh - 60px);
  padding: 60px;
  background-color: #ffffff;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: auto;
    padding: 60px 20px;
    font-size: 12px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

const PreviewItem = styled.p`
  white-space: pre-wrap;
`;
