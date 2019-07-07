import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikActions,
  FormikErrors
} from "formik";
import React from "react";
import { CheckboxButtonOwnProps, FormParams, Step2FormValues } from "../forms";
import { ReactComponent as MoodAwesomeIcon } from "../icons/mood-awesome.svg";
import { ReactComponent as MoodNotWellIcon } from "../icons/mood-not-well.svg";
import { ReactComponent as MoodOkIcon } from "../icons/mood-ok.svg";
import { DataActionTypes } from "../store/data/types";
import { Mood, SelectedActionTypes } from "../store/selected/types";
import CheckboxButton from "./CheckboxButton";

interface Step2Props {
  customReason: string;
  mood: Mood;
  reasons: string[];
  selectedReasons: number[];

  prevStep: () => DataActionTypes;
  sendSelected: (
    customReason: string,
    mood: Mood,
    selectedReasons: number[]
  ) => SelectedActionTypes;
  setCustomReason: (reason: string) => SelectedActionTypes;
  setReasons: (reasons: number[]) => SelectedActionTypes;
}

const Step2: React.FC<Step2Props> = props => {
  const initialValues: Step2FormValues = {
    customReason: props.customReason,
    mood: props.mood,
    selectedReasons: props.selectedReasons
  };

  let mood = null;

  switch (props.mood) {
    case Mood.NotWell:
      mood = <MoodNotWellIcon />;
      break;
    case Mood.OK:
      mood = <MoodOkIcon />;
      break;
    case Mood.Awesome:
      mood = <MoodAwesomeIcon />;
      break;
  }

  const formRender = ({ isSubmitting }: FormParams) => (
    <Form>
      <div>
        Select one of:
        {props.reasons.map((reason, key) => (
          <Field
            key={key}
            name="selectedReasons"
            render={(innerProps: CheckboxButtonOwnProps) => (
              <CheckboxButton {...innerProps} label={reason} value={key} />
            )}
          />
        ))}
      </div>

      <div>
        Or type your own:
        <Field name="customReason" />
      </div>

      <ErrorMessage name="customReason" component="div" />

      <button type="submit" disabled={isSubmitting}>
        Select
      </button>
    </Form>
  );

  const onFormSubmit = (
    values: Step2FormValues,
    actions: FormikActions<Step2FormValues>
  ) => {
    props.setCustomReason(values.customReason);
    props.setReasons(values.selectedReasons);
    props.sendSelected(values.customReason, props.mood, values.selectedReasons);
    actions.setSubmitting(false);
  };

  const validateForm = (values: Step2FormValues) => {
    const errors: FormikErrors<Step2FormValues> = {};

    if (values.customReason === "" && values.selectedReasons.length === 0) {
      errors.customReason = "Select one of defined reasons or write your own";
    }

    return errors;
  };

  return (
    <div className="step">
      <h1>Why are you {mood}?</h1>

      <button onClick={props.prevStep}>go back</button>

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={onFormSubmit}
        render={formRender}
      />
    </div>
  );
};

export default Step2;
