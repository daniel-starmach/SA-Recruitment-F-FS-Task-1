import { FieldProps } from "formik";
import { ReactElement } from "react";
import { Mood } from "./store/selected/types";

export interface RadioButtonProps {
  icon: ReactElement;
  value: Mood;
}

export type RadioButtonOwnProps = FieldProps<Step1FormValues> &
  RadioButtonProps;

export interface Step1FormValues {
  mood: Mood;
}
