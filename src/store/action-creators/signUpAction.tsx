import { SAVE_USER_DATA } from "../actions/constant";

export interface IUser {
  id?: number;
  firstNam: string;
  lastName: string;
  password: string;
  confirmPassword?: string;
  emailId: string;
  mobileNumber?: string;
  city?: string;
  country?: string;
}

export const signUp = (user: IUser) => {
  return { type: SAVE_USER_DATA, payload: user };
};
