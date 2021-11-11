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
        <div>
          <p>----------------------------------------</p>
          <p>{props.name}</p>
          <p>{props.nameEn}</p>
          <p>{props.company}</p>
          <p>{props.department}</p>
          <p>{props.mailAdress}</p>
          <p>{props.phoneNumber}</p>
          <p>----------------------------------------</p>
        </div>
      </PreviewWrapper>
    </>
  );
};

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  padding: 60px;
`;
