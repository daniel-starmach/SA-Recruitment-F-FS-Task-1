export const CUSTOM_REASON_SET = "CUSTOM_REASON_SET";
export const MOOD_SET = "MOOD_SET";
export const REASONS_ADD = "REASONS_ADD";
export const REASONS_REMOVE = "REASONS_REMOVE";

export enum Mood {
  NotSelected,
  NotWell,
  OK,
  Awesome
}

export interface SelectedState {
  customReason: string;
  mood: Mood;
  selectedReasons: number[];
}

interface AddReasonAction {
  type: typeof REASONS_ADD;
  payload: {
    reason: number;
  };
}

interface RemoveReasonAction {
  type: typeof REASONS_REMOVE;
  payload: {
    reason: number;
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

export type SelectedActionTypes =
  | AddReasonAction
  | RemoveReasonAction
  | SetCustomReasonAction
  | SetMoodAction;
