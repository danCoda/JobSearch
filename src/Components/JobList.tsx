import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Job } from "../customTypes";
import { useJobList } from "../Hooks/useJobList";
import { State } from "../State";

export const JobList = () => {
  const navigate = useNavigate();

  const { getJobList, error, isPending } = useJobList();
  const [jobs, setJobs] = useState<Job[]>([]);

  const { user, jobs: jobsFromState } = useSelector((state: State) => state);

  useEffect(() => {
    setJobs(jobsFromState.availableJobs);
  }, [jobsFromState.availableJobs]);

  useEffect(() => {
    if (!user.currentUser) {
      return navigate("/login");
    }

    getJobList(user.currentUser.workerId);

    return () => {
      setJobs([]);
    };
  }, [user.currentUser]);

  return (
    <>
      <h2>Available Jobs</h2>
      {isPending && <div>Loading jobs...</div>}
      {error && (
        <div>
          There was an error! <br /> Please contact Support
        </div>
      )}
      {!isPending && !error && jobs && (
        <table>
          <thead>
            <tr>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.jobId}>
                <td>{job.company.name}</td>
                <td>{job.company.address.formattedAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
