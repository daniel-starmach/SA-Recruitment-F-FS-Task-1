import {
  CUSTOM_REASON_SET,
  Mood,
  MOOD_SET,
  REASONS_SET,
  SELECTED_SEND_ERROR,
  SelectedActionTypes,
  SelectedState
} from "./types";

const initialState: SelectedState = {
  customReason: "",
  mood: Mood.NotSelected,
  selectedReasons: []
};

export function selectedReducer(
  state = initialState,
  action: SelectedActionTypes
): SelectedState {
  switch (action.type) {
    case CUSTOM_REASON_SET:
      return {
        ...state,
        customReason: action.payload.reason
      };
    case MOOD_SET:
      return {
        ...state,
        mood: action.payload.mood
      };
    case REASONS_SET:
      return {
        ...state,
        selectedReasons: [...action.payload.reasons]
      };
    case SELECTED_SEND_ERROR:
      // tslint:disable-next-line:no-console
      console.error("error", action.payload.message); // error handling
      return state;
    default:
      return state;
  }
}
