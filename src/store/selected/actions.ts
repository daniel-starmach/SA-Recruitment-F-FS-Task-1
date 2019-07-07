import {
  CUSTOM_REASON_SET,
  Mood,
  MOOD_SET,
  REASONS_SET,
  SELECTED_SEND,
  SelectedActionTypes
} from "./types";

export function send(
  customReason: string,
  mood: Mood,
  selectedReasons: number[]
): SelectedActionTypes {
  return {
    payload: {
      customReason,
      mood,
      selectedReasons
    },
    type: SELECTED_SEND
  };
}

export function setReasons(reasons: number[]): SelectedActionTypes {
  return {
    payload: {
      reasons
    },
    type: REASONS_SET
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
