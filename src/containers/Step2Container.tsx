import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Step2 from "../components/Step2";
import { AppState } from "../store";
import { DataState } from "../store/data/types";
import { SelectedState } from "../store/selected/types";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

const mapStateToProps = (state: AppState) => ({
  data: state.data,
  selected: state.selected
});

interface Step2ContainerProps {
  data: DataState;
  selected: SelectedState;
}

const Step1Container: React.FC<Step2ContainerProps> = props => {
  return <Step2 test={1} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1Container);
