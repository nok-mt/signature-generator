//libraries
import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
//components
import { Header, Main, Preview, Input, Template } from "./components/index";

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

const RightWrapper = styled.div`
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

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [nameEn, setNameEn] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mailAddress, setMailAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const [lineTemp, setLineTemp] = useState<string>(
    "──────────────────────────"
  );

  const [template, setTemplate] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle />
      <Header template={template} setTemplate={setTemplate} />
      <Main>
        <Preview
          lineTemp={lineTemp}
          name={name}
          nameEn={nameEn}
          company={company}
          department={department}
          address={address}
          mailAddress={mailAddress}
          phoneNumber={phoneNumber}
          url={url}
        />
        <RightWrapper>
          {template ? (
            <Template lineTemp={lineTemp} setLineTemp={setLineTemp} />
          ) : (
            <Input
              name={name}
              nameEn={nameEn}
              company={company}
              department={department}
              address={address}
              mailAddress={mailAddress}
              phoneNumber={phoneNumber}
              url={url}
              setName={setName}
              setNameEn={setNameEn}
              setCompany={setCompany}
              setDepartment={setDepartment}
              setAddress={setAddress}
              setMailAddress={setMailAddress}
              setPhoneNumber={setPhoneNumber}
              setUrl={setUrl}
            />
          )}
        </RightWrapper>
      </Main>
    </>
  );
};

render(<App />, document.getElementById("app"));
