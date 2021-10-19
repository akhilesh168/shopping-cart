import { IUserState } from "../../js/model/state.model";
import {
  SAVE_USER_DATA,
  USER_DATA_SAVED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../actions/constant";

const userInitialState = {} as IUserState;
export const AuthReducer = (state = userInitialState, action: any) => {
  switch (action.type) {
    case USER_DATA_SAVED: {
      return state;
    }
    case SAVE_USER_DATA: {
      return { ...state, users: action?.payload };
    }
    case LOGIN_SUCCESS: {
      return { ...state, users: action?.payload };
    }
    case LOGIN_FAIL: {
      return { ...state, users: action?.payload };
    }
    default:
      return state;
  }
};

export default AuthReducer;
