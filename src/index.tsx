//libraries
import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
//components
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Preview } from "./components/Preview";
import { Input } from "./components/Input";

const { useState } = React;

const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
    html,body,h1,h2,h3,h4,p,ul,li {
      margin: 0;
      padding: 0;
      color: #272f59;
    }
    `;

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [nameEn, setNameEn] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [mailAdress, setMailAdress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Preview
          name={name}
          nameEn={nameEn}
          company={company}
          department={department}
          mailAdress={mailAdress}
          phoneNumber={phoneNumber}
        />
        <Input
          name={name}
          nameEn={nameEn}
          company={company}
          department={department}
          mailAdress={mailAdress}
          phoneNumber={phoneNumber}
          setName={setName}
          setNameEn={setNameEn}
          setCompany={setCompany}
          setDepartment={setDepartment}
          setMailAdress={setMailAdress}
          setPhoneNumber={setPhoneNumber}
        />
      </Main>
    </>
  );
};

render(<App />, document.getElementById("app"));
