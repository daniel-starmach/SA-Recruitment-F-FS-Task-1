import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_ERROR,
  INITIAL_TOGGLE,
  REASONS_FETCH,
  REASONS_FETCH_SUCCESS,
  USER_FETCH,
  USER_FETCH_SUCCESS
} from "./types";

function* fetchReasons() {
  try {
    const reasons = yield call(
      axios.get,
      "http://www.mocky.io/v2/5d21afe12f0000361dc462fa"
    );
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
    const response = yield call(
      axios.get,
      "http://www.mocky.io/v2/5d1d2c6934000023b1b60248"
    );
    yield put({
      payload: {
        userName: response.data.name
      },
      type: USER_FETCH_SUCCESS
    });
    yield put({ type: INITIAL_TOGGLE });
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
