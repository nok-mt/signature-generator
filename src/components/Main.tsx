//libraries
import * as React from "react";
import styled from "styled-components";

export const Main = (props) => {
  return <MainWrapper>{props.children}</MainWrapper>;
};
export default Main;

const MainWrapper = styled.main`
  display: flex;
  min-height: calc(100vh - 60px);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
