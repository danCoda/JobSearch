import { Job } from "../../customTypes";
import { JobListActionType } from "../action-types";

type Store = {
  availableJobs: null | Job[];
};

const initialState: Store = {
  availableJobs: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case JobListActionType.ADD_JOBS:
      return { ...state, availableJobs: action.payload };

    case JobListActionType.REMOVE_JOBS:
      return { ...state, availableJobs: initialState.availableJobs };

    default:
      return state;
  }
};

export default reducer;
