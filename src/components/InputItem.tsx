//libraries
import * as React from "react";
import styled from "styled-components";
//types
import { InputItemType } from "../types/InputItemType";

export const InputItem: React.FC<InputItemType> = (props) => {
  return (
    <InputItemWrapper>
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      {props.type === "input" && (
        <InputField
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          onChange={(event) => props.setState(event.target.value)}
          value={props.name}
        />
      )}
      {props.type === "textarea" && (
        <InputTaxtarea
          name={props.name}
          placeholder={props.placeholder}
          onChange={(event) => props.setState(event.target.value)}
          value={props.name}
        />
      )}
    </InputItemWrapper>
  );
};

export default InputItem;

const InputItemWrapper = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  background-color: #272f59;
  color: #f2e85e;
  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: start;
  }
`;

const InputField = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: none;
  &::placeholder {
    color: #d5d5d5;
  }
`;

const InputTaxtarea = styled.textarea`
  flex: 1;
  padding: 8px 12px;
  border: none;
  &::placeholder {
    color: #d5d5d5;
  }
`;
