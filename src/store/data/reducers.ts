import {
  DataActionTypes,
  DataState,
  FETCH_ERROR,
  INITIAL_TOGGLE,
  REASONS_FETCH_SUCCESS,
  STEP_MAX,
  STEP_MIN,
  STEP_NEXT,
  STEP_PREV,
  USER_FETCH_SUCCESS
} from "./types";

const initialState: DataState = {
  currentStep: 1,
  isInitial: true,
  reasons: [],
  userName: "N/A"
};

export function dataReducer(
  state = initialState,
  action: DataActionTypes
): DataState {
  switch (action.type) {
    case FETCH_ERROR:
      // tslint:disable-next-line:no-console
      console.error("error", action.payload.message); // error handling
      return state;
    case INITIAL_TOGGLE:
      return {
        ...state,
        isInitial: false
      };
    case REASONS_FETCH_SUCCESS:
      return {
        ...state,
        reasons: action.payload.reasons
      };
    case STEP_NEXT:
      if (state.currentStep === STEP_MAX) {
        return state;
      }

      return {
        ...state,
        currentStep: state.currentStep + 1
      };
    case STEP_PREV:
      if (state.currentStep === STEP_MIN) {
        return state;
      }

      return {
        ...state,
        currentStep: state.currentStep - 1
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        userName: action.payload.userName
      };
    default:
      return state;
  }
}
