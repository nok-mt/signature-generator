import * as React from "react";
import styled from "styled-components";

export const TemplateItem = (props) => {
  return (
    <>
      <TemplateItemWrapper onClick={() => props.setLineTemp(props.line)}>
        <p>{props.line}</p>
        <p>{props.name}</p>
        <p>{props.line}</p>
      </TemplateItemWrapper>
    </>
  );
};
export default TemplateItem;

const TemplateItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 600px;
  padding: 16px;
  border-radius: 4px;
  font-size: 12px;
  background-color: #ffffff;
  transition: all 0.25s ease-out;

  &:hover {
    background-color: #272f59;
    p {
      color: #f2e85e;
    }
  }
`;
