import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikActions,
  FormikErrors
} from "formik";
import React from "react";
import styled from "styled-components";
import { CheckboxButtonOwnProps, FormParams, Step2FormValues } from "../forms";
import { ReactComponent as MoodAwesomeIcon } from "../icons/mood-awesome.svg";
import { ReactComponent as MoodNotWellIcon } from "../icons/mood-not-well.svg";
import { ReactComponent as MoodOkIcon } from "../icons/mood-ok.svg";
import { DataActionTypes } from "../store/data/types";
import { Mood, SelectedActionTypes } from "../store/selected/types";
import {
  Error,
  GoBackButton,
  Heading,
  Step2Icon,
  SubmitButton
} from "../StylesComponents";
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

const TextInput = styled.input`
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 30px;
  margin-top: 5px;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

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
      <Section>
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
      </Section>

      <Section>
        Or type your own:
        <Field
          name="customReason"
          render={({ field }: FieldProps<Step2FormValues>) => (
            <TextInput {...field} />
          )}
        />
      </Section>

      <ErrorMessage
        name="customReason"
        render={message => <Error>{message}</Error>}
      />

      <SubmitButton type="submit" disabled={isSubmitting}>
        Select
      </SubmitButton>
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
      errors.customReason = "Select one of defined or write your own reason";
    }

    return errors;
  };

  return (
    <div className="step">
      <Heading>
        Why are you <Step2Icon type={props.mood}>{mood}</Step2Icon>?
      </Heading>

      <GoBackButton onClick={props.prevStep}>&laquo; go back</GoBackButton>

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
