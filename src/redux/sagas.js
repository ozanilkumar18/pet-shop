import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOADING } from "./actions";
import { takeEvery, put, takeLatest, call } from "redux-saga/effects";

const HTTP_API = "https://jsonplaceholder.typicode.com/posts";

export function* loginSaga(action) {
  console.log("data recieved" + JSON.stringify(action));
  try {
    yield put({ type: LOADING });
    const response = yield call(() => axios.post(HTTP_API, action.payload));
    yield put({ type: LOADING });
    yield put({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: LOGIN_FAIL, payload: error });
  }
}

export function* loginRequest(action) {
  console.log("data recieved -- >" + action);
  yield takeEvery("LOGIN", loginSaga);
}

export default loginRequest;
