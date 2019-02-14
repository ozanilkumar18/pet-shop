import { loginRequest, registerRequest } from "./sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([loginRequest(), registerRequest()]);
}
