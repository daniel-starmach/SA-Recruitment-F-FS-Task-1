import { Mood } from "../selected/types";
import {
  DataActionTypes,
  REASONS_FETCH,
  REASONS_FETCH_SUCCESS,
  STEP_NEXT,
  STEP_PREV,
  USER_FETCH
} from "./types";

export function clearReasons(): DataActionTypes {
  return {
    payload: {
      reasons: []
    },
    type: REASONS_FETCH_SUCCESS
  };
}

export function fetchReasons(mood: Mood): DataActionTypes {
  return {
    payload: {
      mood
    },
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
