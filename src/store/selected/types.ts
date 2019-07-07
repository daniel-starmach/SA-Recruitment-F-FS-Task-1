export const CUSTOM_REASON_SET = "CUSTOM_REASON_SET";
export const MOOD_SET = "MOOD_SET";
export const REASONS_SET = "REASONS_SET";
export const SELECTED_SEND = "SELECTED_SEND";
export const SELECTED_SEND_ERROR = "SELECTED_SEND_ERROR";

export enum Mood {
  NotSelected = "NotSelected",
  NotWell = "NotWell",
  OK = "OK",
  Awesome = "Awesome"
}

export interface SelectedState {
  customReason: string;
  mood: Mood;
  selectedReasons: number[];
}

export interface SendAction {
  type: typeof SELECTED_SEND;
  payload: SelectedState;
}

interface SendErrorAction {
  type: typeof SELECTED_SEND_ERROR;
  payload: {
    message: string;
  };
}

interface SetCustomReasonAction {
  type: typeof CUSTOM_REASON_SET;
  payload: {
    reason: string;
  };
}

interface SetMoodAction {
  type: typeof MOOD_SET;
  payload: {
    mood: Mood;
  };
}

interface SetReasonsAction {
  type: typeof REASONS_SET;
  payload: {
    reasons: number[];
  };
}

export type SelectedActionTypes =
  | SendAction
  | SendErrorAction
  | SetCustomReasonAction
  | SetMoodAction
  | SetReasonsAction;
