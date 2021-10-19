import { all, fork } from "redux-saga/effects";

import productWatcherSagas from "../sagas/productSagas";
import loginWatcherSagas from "./loginSagas";
import signUpWatcherSagas from "./signUpSagas";

export function* rootSaga() {
  yield all([
    fork(signUpWatcherSagas),
    fork(productWatcherSagas),
    fork(loginWatcherSagas),
  ]);
}
