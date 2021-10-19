import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import {
  DATA_LOADED,
  GET_ALL_PRODUCT,
  DATA_LOADED_WITH_ERROR,
} from "../actions/constant";
import * as API from "../../js/api/product.api";

function* productWatcherSagas() {
  yield all([takeLatest(GET_ALL_PRODUCT, productWorkerSagas)]);
}

function* productWorkerSagas() {
  try {
    const { data } = yield call(API.getProducts);
    yield put({ type: DATA_LOADED, payload: data });
  } catch (e) {
    yield put({ type: DATA_LOADED_WITH_ERROR, payload: e });
  }
}

export default productWatcherSagas;
