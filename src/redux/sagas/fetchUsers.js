import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS, ADD_USER } from "../constants/UserConstant";
import { API_USERS } from "../../constants/ApiConstant";
import { setUsers, fetchingUsers, addingUser, getUser } from "../actions/User";

const fetchUsersFromApi = () => fetch(API_USERS);
const fetchUserFromApi = (id) => fetch(`${API_USERS}/${id}`);
function* fetchUserWorker() {
  yield call(fetchingUsers);
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}

function* getUserWorker({ id }) {
  yield call(addingUser);
  const data = yield call(fetchUserFromApi, id);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(getUser(json));
}

export function* getUserWatcher() {
  yield takeEvery(ADD_USER, getUserWorker);
}
