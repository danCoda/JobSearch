import { Job, User } from "../../customTypes";
import { JobListActionType, UserLoginType } from "../action-types";

interface LoginAction {
  type: UserLoginType.LOGIN;
  payload: User;
}

interface LogoutAction {
  type: UserLoginType.LOGOUT;
}

export type UserAction = LoginAction | LogoutAction;

interface AddJobsAction {
  type: JobListActionType.ADD_JOBS;
  payload: Job[];
}

interface RemoveJobsAction {
  type: JobListActionType.REMOVE_JOBS;
}

export type JobsAction = AddJobsAction | RemoveJobsAction;
