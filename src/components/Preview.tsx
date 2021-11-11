import * as React from "react";
import styled from "styled-components";

interface PreviewType {
  name: string;
  nameEn: string;
  company: string;
  department: string;
  mailAdress: string;
  phoneNumber: string;
}

export const Preview: React.FC<PreviewType> = (props) => {
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
  padding: 20px;
`;
