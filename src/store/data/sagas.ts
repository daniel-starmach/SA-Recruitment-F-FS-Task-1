import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_ERROR,
  REASONS_FETCH,
  REASONS_FETCH_SUCCESS,
  USER_FETCH,
  USER_FETCH_SUCCESS
} from "./types";

function* fetchReasons() {
  try {
    const reasons = yield call(() => ""); // axios
    yield put({
      payload: {
        reasons
      },
      type: REASONS_FETCH_SUCCESS
    });
  } catch (e) {
    yield put({
      payload: {
        message: e.message
      },
      type: FETCH_ERROR
    });
  }
}

function* fetchUser() {
  try {
    const user = yield call(() => ""); // axios
    yield put({
      payload: {
        user
      },
      type: USER_FETCH_SUCCESS
    });
  } catch (e) {
    yield put({
      payload: {
        message: e.message
      },
      type: FETCH_ERROR
    });
  }
}

function* reasonsSaga() {
  yield takeLatest(REASONS_FETCH, fetchReasons);
}

function* userSaga() {
  yield takeLatest(USER_FETCH, fetchUser);
}

export default function* dataSaga() {
  yield all([reasonsSaga(), userSaga()]);
}
