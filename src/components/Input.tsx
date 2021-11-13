//libraries
import * as React from "react";
import styled from "styled-components";
//types
import { InputType } from "../types/InputType";
//components
import { InputItem } from "./index";

export const Input: React.FC<InputType> = (props) => {
  return (
    <>
      <InputInner>
        <InputNotion>
          ※入力した内容が外部に送信されることはありません
        </InputNotion>
        <InputItem
          type={"input"}
          label={"名前"}
          placeholder={"山田 太郎"}
          name={props.name}
          setState={props.setName}
        />
        <InputItem
          type={"input"}
          label={"名前（ローマ字）"}
          placeholder={"Taro Yamada"}
          name={props.nameEn}
          setState={props.setNameEn}
        />
        <InputItem
          type={"input"}
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
          type={"textarea"}
          label={"住所"}
          placeholder={"〒123-4567 東京都 〇〇区 1-2-3 〇〇ビル ○F"}
          name={props.address}
          setState={props.setAddress}
        />
        <InputItem
          type={"input"}
          label={"メールアドレス"}
          placeholder={"yamada@example.co.jp"}
          name={props.mailAddress}
          setState={props.setMailAddress}
        />
        <InputItem
          type={"input"}
          label={"電話番号"}
          placeholder={"03-1234-5678"}
          name={props.phoneNumber}
          setState={props.setPhoneNumber}
        />
        <InputItem
          type={"input"}
          label={"URL"}
          placeholder={"https://www.example.co.jp"}
          name={props.url}
          setState={props.setUrl}
        />
      </InputInner>
    </>
  );
};
export default Input;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  width: 50vw;
  padding: 60px;
  background-color: #dddddd;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    padding: 40px 20px;
  }
`;

const InputInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 40px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    gap: 20px;
  }
`;

const InputNotion = styled.p`
  font-size: 12px;
`;
