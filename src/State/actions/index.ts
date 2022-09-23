import { User } from "../../customTypes";
import { UserLoginType } from "../action-types";

interface LoginAction {
  type: UserLoginType.LOGIN;
  payload: User;
}

interface LogoutAction {
  type: UserLoginType.LOGOUT;
}

export type Action = LoginAction | LogoutAction;
