import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { STEP_NEXT } from "../data/types";
import { SELECTED_SEND, SELECTED_SEND_ERROR, SendAction } from "./types";

function* sendSelected(action: SendAction) {
  try {
    yield call(
      axios.post,
      "http://www.mocky.io/v2/5d21cc6d2f00006f2cc46339",
      action.payload
    );
    yield put({
      type: STEP_NEXT
    });
  } catch (e) {
    yield put({
      payload: {
        message: e.message
      },
      type: SELECTED_SEND_ERROR
    });
  }
}

function* saga() {
  yield takeLatest(SELECTED_SEND, sendSelected);
}

export default function* dataSaga() {
  yield all([saga()]);
}
