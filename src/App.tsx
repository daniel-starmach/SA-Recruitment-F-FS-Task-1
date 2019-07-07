import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Step3 from "./components/Step3";
import Step1Container from "./containers/Step1Container";
import Step2Container from "./containers/Step2Container";
import { AppState } from "./store";
import { fetchUser } from "./store/data/actions";
import { DataState, Steps } from "./store/data/types";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchUserAction: () => dispatch(fetchUser())
  };
};

const mapStateToProps = (state: AppState) => ({
  data: state.data
});

interface AppProps {
  data: DataState;
  fetchUserAction: typeof fetchUser;
}

const App: React.FC<AppProps> = props => {
  const { fetchUserAction } = props;

  useEffect(() => {
    fetchUserAction();
  }, [fetchUserAction]);

  let step = <div />;

  if (props.data.isInitial) {
    return step;
  }

  switch (props.data.currentStep) {
    case Steps.Step1:
      step = <Step1Container />;
      break;
    case Steps.Step2:
      step = <Step2Container />;
      break;
    case Steps.Step3:
      step = <Step3 />;
      break;
  }

  return step;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
