//libraries
import * as React from "react";
import styled from "styled-components";
//types
import { InputType } from "../types/InputType";

export const Preview: React.FC<InputType> = (props) => {
  console.log(props);

  return (
    <>
      <PreviewWrapper>
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
      </PreviewWrapper>
    </>
  );
};

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: calc(100vh - 60px);
  padding: 60px;
`;

const PreviewItem = styled.p`
  white-space: pre-wrap;
`;
