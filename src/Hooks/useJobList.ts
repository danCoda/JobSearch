import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State";

export const useJobList = () => {
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);

  const dispatch = useDispatch();
  const { addJobList } = bindActionCreators(actionCreators, dispatch);

  const getJobList = async (workerId: string) => {
    setError(null);
    setIsPending(true);

    try {
        const response = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/matches`);
        const jobs = await response.json();

        setIsPending(false);
        setError(null);
        addJobList(jobs);

        return jobs;
    } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
            setIsPending(false);
        }
    }
  };

  return { getJobList, error, isPending };
};
