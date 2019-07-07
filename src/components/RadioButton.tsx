import React from "react";
import { RadioButtonOwnProps } from "../forms";

const RadioButton: React.FC<RadioButtonOwnProps> = ({
  icon,
  value,
  field,
  form
}) => {
  return (
    <label>
      <div>{icon}</div>
      <input
        type="radio"
        {...field}
        checked={form.values[field.name] === value}
        value={value}
      />
    </label>
  );
};

export default RadioButton;
