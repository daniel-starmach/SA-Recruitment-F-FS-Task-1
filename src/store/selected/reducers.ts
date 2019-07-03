import {
  CUSTOM_REASON_SET,
  Mood,
  MOOD_SET,
  REASONS_ADD,
  REASONS_REMOVE,
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
    case REASONS_ADD:
      if (state.selectedReasons.includes(action.payload.reason)) {
        return state;
      }

      return {
        ...state,
        selectedReasons: [...state.selectedReasons, action.payload.reason]
      };
    case REASONS_REMOVE:
      if (!state.selectedReasons.includes(action.payload.reason)) {
        return state;
      }

      return {
        ...state,
        selectedReasons: state.selectedReasons.filter(
          reason => reason !== action.payload.reason
        )
      };
    default:
      return state;
  }
}
