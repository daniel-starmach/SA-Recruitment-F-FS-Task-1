import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Step1 from "../components/Step1";
import { AppState } from "../store";
import { nextStep } from "../store/data/actions";
import { DataState } from "../store/data/types";
import { setMood } from "../store/selected/actions";
import { Mood, SelectedState } from "../store/selected/types";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    nextStep: () => dispatch(nextStep()),
    setMood: (mood: Mood) => dispatch(setMood(mood))
  };
};

const mapStateToProps = (state: AppState) => ({
  data: state.data,
  selected: state.selected
});

interface Step1ContainerProps {
  data: DataState;
  selected: SelectedState;

  nextStep: typeof nextStep;
  setMood: typeof setMood;
}

const Step1Container: React.FC<Step1ContainerProps> = props => {
  return (
    <Step1
      mood={props.selected.mood}
      userName={props.data.userName}
      nextStep={props.nextStep}
      setMood={props.setMood}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1Container);
