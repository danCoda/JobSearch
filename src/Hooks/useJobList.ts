import { useState } from "react";

export const useJobList = () => {
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);

  const getJobList = async (workerId: string) => {
    setError(null);
    setIsPending(true);

    try {
        const response = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/matches`);
        const jobs = await response.json();

        setIsPending(false);
        setError(null);
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
