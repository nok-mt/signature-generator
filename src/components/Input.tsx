//libraries
import * as React from "react";
import styled from "styled-components";
//types
import { InputType } from "../types/InputType";
//components
import { InputItem } from "./InputItem";

export const Input: React.FC<InputType> = (props) => {
  return (
    <>
      <InputWrapper>
        <InputInner>
          <InputNotion>
            ※入力した内容が外部に送信されることはありません
          </InputNotion>
          <InputItem
            type={"text"}
            label={"名前"}
            placeholder={"山田 太郎"}
            name={props.name}
            setState={props.setName}
          />
          <InputItem
            type={"text"}
            label={"名前（ローマ字）"}
            placeholder={"Taro Yamada"}
            name={props.nameEn}
            setState={props.setNameEn}
          />
          <InputItem
            type={"text"}
            label={"会社名"}
            placeholder={"株式会社 富士山"}
            name={props.company}
            setState={props.setCompany}
          />
          <InputItem
            type={"textarea"}
            label={"部署名"}
            placeholder={"営業部 1課"}
            name={props.department}
            setState={props.setDepartment}
          />
          <InputItem
            type={"text"}
            label={"メールアドレス"}
            placeholder={"yamada@example.co.jp"}
            name={props.mailAdress}
            setState={props.setMailAdress}
          />
          <InputItem
            type={"text"}
            label={"電話番号"}
            placeholder={"03-1234-5678"}
            name={props.phoneNumber}
            setState={props.setPhoneNumber}
          />
        </InputInner>
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  padding: 60px;
  background-color: #dddddd;
`;

const InputInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 40px;
  width: 100%;
`;

const InputNotion = styled.p`
  font-size: 12px;
`;
