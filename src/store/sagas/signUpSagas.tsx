import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import * as Actions from "../actions/constant";
import * as API from "../../js/api/user.api";
import { IUser } from "../action-creators/signUpAction";
import { Action } from "../../js/model/action.model";

interface UserAction extends Action, IUser {}

function* signUpWatcherSagas() {
  yield all([
    takeLatest<UserAction>(Actions.SAVE_USER_DATA, signUpWorkerSagas),
  ]);
}

function* signUpWorkerSagas(user: UserAction) {
  try {
    yield call(API.addUsers, user.payload);
    yield put({ type: Actions.USER_DATA_SAVED });
  } catch (e) {
    yield put({ type: Actions.DATA_LOADED_WITH_ERROR, payload: e });
  }
}

export default signUpWatcherSagas;
