import React from "react";
import { CheckboxButtonOwnProps } from "../forms";

const CheckboxButton: React.FC<CheckboxButtonOwnProps> = ({
  label,
  value,
  field,
  form
}) => (
  <label>
    <div>{label}</div>
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
  </label>
);

export default CheckboxButton;
