import * as React from "react";
import styled from "styled-components";

const { useState } = React;

export const Input = (props) => {
  return (
    <>
      <InputWrapper>
        <div>
          <InputLabel htmlFor="name">名前</InputLabel>
          <InputField
            type="text"
            name="name"
            placeholder="山田 太郎"
            onChange={(event) => props.setName(event.target.value)}
            value={props.name}
          />
        </div>
        <div>
          <InputLabel htmlFor="nameEn">名前（ローマ字）</InputLabel>
          <InputField
            type="text"
            name="nameEn"
            placeholder="Taro Yamada"
            onChange={(event) => props.setNameEn(event.target.value)}
            value={props.nameEn}
          />
        </div>
        <div>
          <InputLabel htmlFor="company">会社名</InputLabel>
          <InputField
            type="text"
            name="company"
            placeholder="株式会社 富士山"
            onChange={(event) => props.setCompany(event.target.value)}
            value={props.company}
          />
        </div>
        <div>
          <InputLabel htmlFor="department">部署名</InputLabel>
          <InputField
            type="text"
            name="department"
            placeholder="営業部 1課"
            onChange={(event) => props.setDepartment(event.target.value)}
            value={props.department}
          />
        </div>
        <div>
          <InputLabel htmlFor="mailAdress">メールアドレス</InputLabel>
          <InputField
            type="text"
            name="mailAdress"
            placeholder="yamada@example.co.jp"
            onChange={(event) => props.setMailAdress(event.target.value)}
            value={props.mailAdress}
          />
        </div>
        <div>
          <InputLabel htmlFor="phoneNumber">電話番号</InputLabel>
          <InputField
            type="text"
            name="phoneNumber"
            placeholder="03-1234-5678"
            onChange={(event) => props.setPhoneNumber(event.target.value)}
            value={props.phoneNumber}
          />
        </div>
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 40px;
  width: 50vw;
  padding: 20px;
  background-color: #e5e5e5;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 120px;
`;

const InputField = styled.input`
  &::placeholder {
    color: #d5d5d5;
  }
`;
