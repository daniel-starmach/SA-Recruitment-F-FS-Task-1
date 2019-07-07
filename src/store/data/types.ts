import { Mood } from "../selected/types";

export const FETCH_ERROR = "FETCH_ERROR";
export const INITIAL_TOGGLE = "INITIAL_TOGGLE";
export const LOADER_TOGGLE = "LOADER_TOGGLE";
export const REASONS_FETCH = "REASONS_FETCH";
export const REASONS_FETCH_SUCCESS = "REASONS_FETCH_SUCCESS";
export const STEP_NEXT = "STEP_NEXT";
export const STEP_PREV = "STEP_PREV";
export const USER_FETCH = "USER_FETCH";
export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";

export const STEP_MIN = 1; // todo: change with enum
export const STEP_MAX = 3; // todo: change with enum

export enum Steps {
  Step1 = 1,
  Step2,
  Step3
}

export interface DataState {
  userName: string;
  reasons: string[];
  isInitial: boolean;
  isLoading: boolean;
  currentStep: number;
}

interface FetchErrorAction {
  type: typeof FETCH_ERROR;
  payload: {
    message: string;
  };
}

interface NextStepAction {
  type: typeof STEP_NEXT;
}

interface PrevStepAction {
  type: typeof STEP_PREV;
}

export interface ReasonsFetchAction {
  payload: {
    mood: Mood;
  };
  type: typeof REASONS_FETCH;
}

interface ReasonsFetchSuccessAction {
  type: typeof REASONS_FETCH_SUCCESS;
  payload: {
    reasons: string[];
  };
}

interface ToggleInitialAction {
  type: typeof INITIAL_TOGGLE;
}

interface ToggleLoaderAction {
  type: typeof LOADER_TOGGLE;
  payload: {
    state: boolean;
  };
}

interface UserFetchAction {
  type: typeof USER_FETCH;
}

interface UserFetchSuccessAction {
  type: typeof USER_FETCH_SUCCESS;
  payload: {
    userName: string;
  };
}

export type DataActionTypes =
  | FetchErrorAction
  | NextStepAction
  | PrevStepAction
  | ReasonsFetchAction
  | ReasonsFetchSuccessAction
  | ToggleInitialAction
  | ToggleLoaderAction
  | UserFetchAction
  | UserFetchSuccessAction;
