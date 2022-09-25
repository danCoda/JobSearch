import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { User } from "../customTypes";
import { actionCreators, State } from "../State";

export const useJobDecision = () => {
  const dispatch = useDispatch();
  const { saveJobDecision } = bindActionCreators(actionCreators, dispatch);

  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);
  const [isConfirmedByServer, setIsConfirmedByServer] = useState(false);

  const { user } = useSelector((state: State) => state);
  const currentUser = user.currentUser as User;

  const makeJobDecision = async (decision: boolean, jobId: string) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await fetch(
        `https://test.swipejobs.com/api/worker/${
          currentUser.workerId
        }/job/${jobId}/${decision === true ? "accept" : "reject"}`
      );
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setIsPending(false);
      setError(null);
      setIsConfirmedByServer(true);

      // Save to Store.
      saveJobDecision(jobId, decision, new Date().toISOString());
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        setIsPending(false);
      }
    }
  };

  return { makeJobDecision, error, isPending, isConfirmedByServer };
};
