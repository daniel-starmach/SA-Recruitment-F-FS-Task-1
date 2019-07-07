import styled from "styled-components";
import { Mood } from "./store/selected/types";

export const Error = styled.div`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
  margin: 5px 0;
  padding: 5px 2px;
  text-align: center;
`;

export const GoBackButton = styled.button`
  background-color: #fff;
  border: 1px solid transparent;
  color: #212529;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 5px;

  &:hover {
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
`;

export const Heading = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  text-align: center;

  svg {
    width: 28px;
  }
`;

export const Step2Icon = styled.span<{ type: Mood }>`
  ${props =>
    props.type === Mood.Awesome &&
    `
    color: #66da72;
  `}
  
  ${props =>
    props.type === Mood.NotWell &&
    `
    color: #66b5da;
  `}
  
  ${props =>
    props.type === Mood.OK &&
    `
    color: #c5c5c5;
  `}
`;

export const SubmitButton = styled.button`
  background-color: #343a40;
  border-color: #343a40;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
  text-transform: uppercase;
  width: 100%;
`;
