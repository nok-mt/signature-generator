import * as React from "react";
import styled from "styled-components";

export const RightSection = (props) => {
  return <RightWrapper>{props.children}</RightWrapper>;
};

export default RightSection;

const RightWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  min-height: calc(100vh - 60px);
  padding: 60px;
  background-color: #dddddd;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    padding: 40px 20px;
  }
`;
