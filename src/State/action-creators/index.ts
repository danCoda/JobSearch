import { Dispatch } from "react";
import { User } from "../../customTypes";
import { UserLoginType, JobListActionType } from "../action-types";
import { UserAction, JobsAction } from "../actions";
import { Job } from "../../customTypes";
import { stringify } from "querystring";

export const loginUser = (user: User) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserLoginType.LOGIN,
      payload: user,
    });
  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserLoginType.LOGOUT,
    });
  };
};

export const addJobList = (jobs: Job[]) => {
  return (dispatch: Dispatch<JobsAction>) => {
    dispatch({
      type: JobListActionType.ADD_JOBS,
      payload: jobs,
    });
  };
};

export const removeJobList = () => {
  return (dispatch: Dispatch<JobsAction>) => {
    dispatch({
      type: JobListActionType.REMOVE_JOBS,
    });
  };
};

export const saveJobDecision = (
  jobId: string,
  isAccepted: boolean,
  decisionDate: string
) => {
  return (dispatch: Dispatch<JobsAction>) => {
    dispatch({
      type: JobListActionType.SAVE_DECISION,
      payload: {
        jobId,
        isAccepted,
        decisionDate,
      },
    });
  };
};
