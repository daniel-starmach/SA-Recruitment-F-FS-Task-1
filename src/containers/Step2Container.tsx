import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Step2 from "../components/Step2";
import { AppState } from "../store";
import { fetchReasons, prevStep } from "../store/data/actions";
import { DataState } from "../store/data/types";
import { send, setCustomReason, setReasons } from "../store/selected/actions";
import { Mood, SelectedState } from "../store/selected/types";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchReasonsAction: (mood: Mood) => dispatch(fetchReasons(mood)),
    prevStep: () => dispatch(prevStep()),
    sendSelected: (
      customReason: string,
      mood: Mood,
      selectedReasons: number[]
    ) => dispatch(send(customReason, mood, selectedReasons)),
    setCustomReason: (reason: string) => dispatch(setCustomReason(reason)),
    setReasons: (reasons: number[]) => dispatch(setReasons(reasons))
  };
};

const mapStateToProps = (state: AppState) => ({
  data: state.data,
  selected: state.selected
});

interface Step2ContainerProps {
  data: DataState;
  selected: SelectedState;

  fetchReasonsAction: typeof fetchReasons;
  prevStep: typeof prevStep;
  sendSelected: typeof send;
  setCustomReason: typeof setCustomReason;
  setReasons: typeof setReasons;
}

const Step1Container: React.FC<Step2ContainerProps> = props => {
  const { fetchReasonsAction } = props;

  useEffect(() => {
    fetchReasonsAction(props.selected.mood);
  }, [fetchReasonsAction]);

  return (
    <Step2
      reasons={props.data.reasons}
      {...props.selected}
      prevStep={props.prevStep}
      sendSelected={props.sendSelected}
      setCustomReason={props.setCustomReason}
      setReasons={props.setReasons}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1Container);
