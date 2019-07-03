import {
  CUSTOM_REASON_SET,
  Mood,
  MOOD_SET,
  REASONS_ADD,
  REASONS_REMOVE,
  SelectedActionTypes
} from "./types";

export function addReason(key: number): SelectedActionTypes {
  return {
    payload: {
      reason: key
    },
    type: REASONS_ADD
  };
}

export function removeReason(key: number): SelectedActionTypes {
  return {
    payload: {
      reason: key
    },
    type: REASONS_REMOVE
  };
}

export function setCustomReason(reason: string): SelectedActionTypes {
  return {
    payload: {
      reason
    },
    type: CUSTOM_REASON_SET
  };
}

export function setMood(mood: Mood): SelectedActionTypes {
  return {
    payload: {
      mood
    },
    type: MOOD_SET
  };
}
