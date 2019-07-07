import React from "react";
import styled from "styled-components";
import { RadioButtonOwnProps } from "../forms";

const Label = styled.label<{ type: string }>`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  height: 70px;
  justify-content: center;
  margin: 0 10px;
  width: 70px;
  
  ${props =>
    props.type === "awesome" &&
    `
    background-color: #66da72;
        
    &:hover {
      background-color: #5EC666;
    }
  `}
  
  ${props =>
    props.type === "notWell" &&
    `
    background-color: #66b5da;
        
    &:hover {
      background-color: #64A3C6;
    }
  `}
  
  ${props =>
    props.type === "ok" &&
    `
    background-color: #c5c5c5;
        
    &:hover {
      background-color: #B1B1B1;
    }
  `}
  
  svg {
    display: block;
    width: 40px;
  }
`;

const Button = styled.div`
  display: inline-block;
  position: relative;

  input {
    left: -9999px; // offscreen
    position: absolute;

    &:checked + ${Label} {
      border: 3px solid #000;
    }

    &:focus + ${Label} {
      outline: 3px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

const RadioButton: React.FC<RadioButtonOwnProps> = ({
  icon,
  id,
  type,
  value,
  field,
  form
}) => (
  <Button>
    <input
      type="radio"
      {...field}
      checked={form.values[field.name] === value}
      id={id}
      value={value}
    />

    <Label htmlFor={id} type={type}>
      {icon}
    </Label>
  </Button>
);

export default RadioButton;
