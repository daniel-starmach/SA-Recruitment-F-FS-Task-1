import React from "react";

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikActions,
  FormikErrors
} from "formik";
import { FormParams, RadioButtonOwnProps, Step1FormValues } from "../forms";
import { ReactComponent as MoodAwesomeIcon } from "../icons/mood-awesome.svg";
import { ReactComponent as MoodNotWellIcon } from "../icons/mood-not-well.svg";
import { ReactComponent as MoodOkIcon } from "../icons/mood-ok.svg";
import { DataActionTypes } from "../store/data/types";
import { Mood, SelectedActionTypes } from "../store/selected/types";
import RadioButton from "./RadioButton";

interface Step1Props {
  mood: Mood;
  userName: string;

  nextStep: () => DataActionTypes;
  setMood: (mood: Mood) => SelectedActionTypes;
}

const Step1: React.FC<Step1Props> = props => {
  const initialValues: Step1FormValues = {
    mood: props.mood
  };

  const formRender = ({ isSubmitting }: FormParams) => (
    <Form>
      <Field
        name="mood"
        render={(innerProps: RadioButtonOwnProps) => (
          <RadioButton
            {...innerProps}
            icon={<MoodAwesomeIcon />}
            value={Mood.Awesome}
          />
        )}
      />

      <Field
        name="mood"
        render={(innerProps: RadioButtonOwnProps) => (
          <RadioButton {...innerProps} icon={<MoodOkIcon />} value={Mood.OK} />
        )}
      />

      <Field
        name="mood"
        render={(innerProps: RadioButtonOwnProps) => (
          <RadioButton
            {...innerProps}
            icon={<MoodNotWellIcon />}
            value={Mood.NotWell}
          />
        )}
      />

      <ErrorMessage name="mood" component="div" />

      <button type="submit" disabled={isSubmitting}>
        Select
      </button>
    </Form>
  );

  const onFormSubmit = (
    values: Step1FormValues,
    actions: FormikActions<Step1FormValues>
  ) => {
    props.setMood(values.mood);
    props.nextStep();
    actions.setSubmitting(false);
  };

  const validateForm = (values: Step1FormValues) => {
    const errors: FormikErrors<Step1FormValues> = {};

    if (values.mood === Mood.NotSelected) {
      errors.mood = `Please, tell us what's your mood, ${props.userName}`;
    }

    return errors;
  };

  return (
    <div className="step">
      <h1>How are you feeling today, {props.userName}?</h1>
      <div>
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={onFormSubmit}
          render={formRender}
        />
      </div>
    </div>
  );
};

export default Step1;
