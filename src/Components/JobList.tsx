import React, { useEffect, useState } from "react";
import { Job } from "../customTypes";
import { useJobList } from "../Hooks/useJobList";

const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";

export const JobList = () => {
  const { getJobList, error, isPending } = useJobList();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await getJobList(workerId);
      setJobs(jobs);
    };

    fetchJobs()
      .catch(console.error);

    return () => {
      setJobs([]);
    };
  }, []);

  console.log("Jobs: ", jobs);

  return (
    <>
      <h2>Available Jobs</h2>
      {isPending && <div>Loading jobs...</div>}
      {error && (
        <div>
          There was an error! <br /> Please contact Support
        </div>
      )}
      {!isPending && !error && (
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
