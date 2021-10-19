import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  authReducer: AuthReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
