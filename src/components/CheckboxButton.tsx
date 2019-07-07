import React from "react";
import styled from "styled-components";
import { CheckboxButtonOwnProps } from "../forms";

const Label = styled.label`
  background-color: #ddd;
  cursor: pointer;
  display: block;
  margin: 5px 0;
  padding: 10px 60px 10px 10px;
  position: relative;

  &:hover {
    background-color: #ccc;
  }

  input {
    position: absolute;
    right: 22px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CheckboxButton: React.FC<CheckboxButtonOwnProps> = ({
  label,
  value,
  field,
  form
}) => (
  <Label>
    {label}

    <input
      checked={field.value.includes(value)}
      type="checkbox"
      {...field}
      onChange={() => {
        if (field.value.includes(value)) {
          const nextValue = field.value.filter(
            (item: number) => item !== value
          );
          form.setFieldValue(field.name, nextValue);
        } else {
          const nextValue = field.value.concat(value);
          form.setFieldValue(field.name, nextValue);
        }
      }}
    />
  </Label>
);

export default CheckboxButton;
