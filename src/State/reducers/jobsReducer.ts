import { Job } from "../../customTypes";
import { JobListActionType } from "../action-types";

type Store = {
  availableJobs: null | Job[];
};

const initialState: Store = {
  availableJobs: null,
};

const reducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case JobListActionType.ADD_JOBS:
      return { ...state, availableJobs: action.payload };

    case JobListActionType.REMOVE_JOBS:
      return { ...state, availableJobs: initialState.availableJobs };

    case JobListActionType.SAVE_DECISION:
      const updatedJobs = state.availableJobs?.map((j) => {
        if (j.jobId === action.payload.jobId) {
          return {
            ...j,
            decision: {
              isAccepted: action.payload.isAccepted,
              date: action.payload.decisionDate,
            },
          };
        }
        return j;
      });

      return { ...state, availableJobs: updatedJobs };

    default:
      return state;
  }
};

export default reducer;
