import { Dispatch } from "react";
import { User } from "../../customTypes";
import { UserLoginType } from "../action-types";
import { Action } from "../actions";

export const loginUser = (user: User) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: UserLoginType.LOGIN,
      payload: user,
    });
  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: UserLoginType.LOGOUT,
    });
  };
};
