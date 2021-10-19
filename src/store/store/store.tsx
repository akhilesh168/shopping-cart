import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";
import logger from "redux-logger";
import { rootSaga } from "../sagas/rootSaga";

const initialSagasMiddleware = createSagaMiddleware();

const composedEnhancers = composeWithDevTools(
  applyMiddleware(initialSagasMiddleware, logger)
);
const store = createStore(rootReducer, composedEnhancers);

initialSagasMiddleware.run(rootSaga);
export default store;
