//libraries
import * as React from "react";
import styled from "styled-components";

export const Main = (props) => {
  return (
    <MainWrapper>
      <MainInner>{props.children}</MainInner>
    </MainWrapper>
  );
};
export default Main;

const MainWrapper = styled.main`
  position: sticky;
  position: -webkit-sticky;
  overflow-y: scroll;
  height: calc(100vh - 60px);
`;

const MainInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
