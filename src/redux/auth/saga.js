import { all, fork, delay, call, put, takeLatest } from "redux-saga/effects";
// import { startLoading, finishLoading } from "./loading";
import actions from "./actions";

export function* loginRequest(action) {
  yield takeLatest(actions.LOGIN_REQUEST, function* ({ payload }) {
    yield delay(1000);
    if (payload.username === "admin" && payload.password === "password") {
      yield put(actions.loginSuccess(payload.username));
    } else yield put(actions.loginFailed());
  });
}

export default function* rootSaga() {
  yield all([fork(loginRequest)]);
}
