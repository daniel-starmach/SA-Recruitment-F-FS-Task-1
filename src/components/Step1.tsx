import React from "react";
import styled from "styled-components";

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

const ButtonContainer = styled.div`
  margin: 0 -10px;
  text-align: center;
`;

const Error = styled.div`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
  margin: 5px 0;
  padding: 2px;
  text-align: center;
`;

const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 250px;
`;

const SubmitButton = styled.button`
  background-color: #343a40;
  border-color: #343a40;
  color: #fff;
  margin-top: 10px;
  padding: 10px;
  text-transform: uppercase;
  width: 100%;
`;

const Step1: React.FC<Step1Props> = props => {
  const initialValues: Step1FormValues = {
    mood: props.mood
  };

  const formRender = ({ isSubmitting }: FormParams) => (
    <Form>
      <ErrorMessage name="mood" render={message => <Error>{message}</Error>} />

      <ButtonContainer>
        <Field
          name="mood"
          render={(innerProps: RadioButtonOwnProps) => (
            <RadioButton
              {...innerProps}
              icon={<MoodAwesomeIcon />}
              id="mood-awesome"
              type="awesome"
              value={Mood.Awesome}
            />
          )}
        />

        <Field
          name="mood"
          render={(innerProps: RadioButtonOwnProps) => (
            <RadioButton
              {...innerProps}
              icon={<MoodOkIcon />}
              id="mood-ok"
              type="ok"
              value={Mood.OK}
            />
          )}
        />

        <Field
          name="mood"
          render={(innerProps: RadioButtonOwnProps) => (
            <RadioButton
              {...innerProps}
              icon={<MoodNotWellIcon />}
              id="mood-not-well"
              type="notWell"
              value={Mood.NotWell}
            />
          )}
        />
      </ButtonContainer>

      <SubmitButton type="submit" disabled={isSubmitting}>
        Select
      </SubmitButton>
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
      <h2>How are you feeling today, {props.userName}?</h2>

      <FormContainer>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={onFormSubmit}
          render={formRender}
        />
      </FormContainer>
    </div>
  );
};

export default Step1;
