import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Job, JobDecision } from "../customTypes";
import { useJobList } from "../Hooks/useJobList";
import { State } from "../State";
import { JobListDetail } from "./JobListDetail";
import Accordion from "react-bootstrap/Accordion";

export const JobList = () => {
  const navigate = useNavigate();

  const { getJobList, error, isPending } = useJobList();
  const [jobs, setJobs] = useState<Job[]>([]);

  const { user, jobs: jobsFromState } = useSelector((state: State) => state);

  useEffect(() => {
    setJobs(jobsFromState.availableJobs);
  }, [jobsFromState.availableJobs]);

  console.log("Available jobs for list:", jobsFromState.availableJobs);

  useEffect(() => {
    if (!user.currentUser) {
      return navigate("/login");
    }

    // Preserve existing jobs in Store
    if (!jobsFromState.availableJobs) {
      getJobList(user.currentUser.workerId);
    }

    return () => {
      setJobs([]);
    };
  }, [user.currentUser]);

  const getJobDecisionMessage = (decision: JobDecision) => {
    return `${decision.isAccepted ? "Accepted" : "Rejected"} on ${dayjs(
      decision.decisionDate
    ).format("MMM D, ddd, YYYY")}`;
  };

  const getFontColour = (decision: undefined | JobDecision): string => {
    if (!decision) return "text-dark";

    return decision.isAccepted ? "text-success" : "text-danger";
  }
  return (
    <div className="mx-sm-auto col-lg-5 mt-sm-5">
      <h2>Available Jobs</h2>
      {isPending && <div>Loading jobs...</div>}
      {error && (
        <div>
          There was an error! <br /> Please contact Support
        </div>
      )}

      <Accordion>
        {!isPending &&
          !error &&
          jobs &&
          jobs.map((job) => (
            <Accordion.Item eventKey={job.jobId} key={job.jobId}>
              <Accordion.Header>
                <div className={getFontColour(job.decision)}>
                  <strong>{job.jobTitle.name}</strong>
                  <br />
                  {job.company.name} ({job.milesToTravel} miles away)
                  <br />${(job.wagePerHourInCents / 100).toFixed(2)} per hour
                  {job.decision && (
                    <>
                      <br />
                      {getJobDecisionMessage(job.decision)}
                    </>
                  )}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <JobListDetail job={job} fontColour={getFontColour(job.decision)}/>
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>

      {/* <div className="accordion" id="jobsList">
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
                    <br />${(job.wagePerHourInCents / 100).toFixed(2)} per hour
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
      </div> */}
    </div>
  );
};
