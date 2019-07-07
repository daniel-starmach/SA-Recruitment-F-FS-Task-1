import { FieldProps } from "formik";
import { ReactElement } from "react";
import { Mood } from "./store/selected/types";

export interface FormParams {
  isSubmitting: boolean;
}

export interface CheckboxButtonProps {
  label: string;
  value: number;
}

export interface RadioButtonProps {
  icon: ReactElement;
  id: string;
  type: string;
  value: Mood;
}

export interface Step1FormValues {
  [mood: string]: Mood;
}

export interface Step2FormValues {
  customReason: string;
  mood: Mood;
  selectedReasons: number[];
}

export type CheckboxButtonOwnProps = FieldProps<Step2FormValues> &
  CheckboxButtonProps;

export type RadioButtonOwnProps = FieldProps<Step1FormValues> &
  RadioButtonProps;
