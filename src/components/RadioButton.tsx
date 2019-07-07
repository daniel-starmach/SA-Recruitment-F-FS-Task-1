import React from "react";
import { RadioButtonOwnProps } from "../forms";

const RadioButton: React.FC<RadioButtonOwnProps> = ({
  icon,
  value,
  field,
  form
}) => (
  <label>
    <div>{icon}</div>
    <input type="radio" {...field} value={value} />
  </label>
);

export default RadioButton;
