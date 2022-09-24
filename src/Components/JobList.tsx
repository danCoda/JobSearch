import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Job } from "../customTypes";
import { useJobList } from "../Hooks/useJobList";
import { State } from "../State";
import { JobListDetail } from "./JobListDetail";

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
    <div className="mx-sm-auto col-lg-5 mt-sm-5">
      <h2>Available Jobs</h2>
      {isPending && <div>Loading jobs...</div>}
      {error && (
        <div>
          There was an error! <br /> Please contact Support
        </div>
      )}

      <div className="accordion" id="jobsList">
        {!isPending &&
          !error &&
          jobs &&
          jobs.map((job) => (
            <div className="accordion-item" key={job.jobId}>
              <h3 className="accordion-header" id={`heading-${job.jobId}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${job.jobId}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${job.jobId}`}
                >
                  <div>
                    <strong>{job.jobTitle.name}</strong> 
                    <br />
                    {job.company.name} ({job.milesToTravel} miles away)
                    <br />
                    ${(job.wagePerHourInCents / 100).toFixed(2)} per hour
                  </div>
                </button>
              </h3>

              <div
                id={`collapse-${job.jobId}`}
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#jobsList"
              >
                <div className="accordion-body">
                  <JobListDetail job={job} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
