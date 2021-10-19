import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import * as Actions from "../actions/constant";
import * as API from "../../js/api/user.api";
import { IUser } from "../action-creators/signUpAction";
import { Action } from "../../js/model/action.model";

interface UserAction extends Action, IUser {}

function* loginWatcherSagas() {
  yield all([takeLatest<UserAction>(Actions.LOGIN, loginWorkerSagas)]);
}

function* loginWorkerSagas(user: UserAction) {
  try {
    yield call(API.login, user.payload.userId, user.payload.password);
    yield put({ type: Actions.LOGIN_SUCCESS });
  } catch (e) {
    yield put({ type: Actions.LOGIN_FAIL, payload: e });
  }
}

export default loginWatcherSagas;
