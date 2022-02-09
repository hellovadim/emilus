import { all } from "redux-saga/effects";
import { userWatcher, getUserWatcher } from "./fetchUsers";

export default function* rootSaga(getState) {
  yield all([userWatcher(), getUserWatcher()]);
}
