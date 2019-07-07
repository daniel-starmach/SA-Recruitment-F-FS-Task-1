import {
  DataActionTypes,
  INITIAL_TOGGLE,
  LOADER_TOGGLE,
  REASONS_FETCH,
  STEP_NEXT,
  STEP_PREV,
  USER_FETCH
} from "./types";

export function fetchReasons(): DataActionTypes {
  return {
    type: REASONS_FETCH
  };
}

export function fetchUser(): DataActionTypes {
  return {
    type: USER_FETCH
  };
}

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

export function toggleInitial(): DataActionTypes {
  return {
    type: INITIAL_TOGGLE
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
