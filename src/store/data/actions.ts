import { DataActionTypes, LOADER_TOGGLE, STEP_NEXT, STEP_PREV } from "./types";

export function nextStep(): DataActionTypes {
  return {
    type: STEP_NEXT
  };
}

export function prevStep(): DataActionTypes {
  return {
    type: STEP_PREV
  };
}

export function toggleLoader(state: boolean): DataActionTypes {
  return {
    payload: {
      state
    },
    type: LOADER_TOGGLE
  };
}
