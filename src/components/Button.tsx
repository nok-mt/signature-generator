import * as React from "react";
import styled from "styled-components";

export const Button: React.FC = (props) => {
  return <button>{props.children}</button>;
};
