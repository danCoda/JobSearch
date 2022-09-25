import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import { Job } from "../customTypes";
import { actionCreators, State } from "../State";
import {
  DashedList,
  JobInfoContainer,
  JobOfferDecision,
  Location,
  MainInfo,
  MainInfoEmphasis,
  ShiftDay,
} from "./JobInfoStyles";
import { JobDecisionModal } from "./JobDecisionModal";

// Needed for timezone.
dayjs.extend(advancedFormat);
dayjs.extend(timezone);

export const JobInfo = () => {
  const navigate = useNavigate();
  const selectedJobId = useParams().jobId;

  const { jobs, user } = useSelector((state: State) => state);

  const [job, setJob] = useState<null | Job>(null);

  const [jobDecision, setJobDecision] = useState<null | boolean>(null);
  const [showConirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    const availableJobs = jobs.availableJobs as Job[];
    console.log("Dann, available: ", availableJobs);
    if (!availableJobs) {
      return navigate("/jobList");
    }
    const job = availableJobs.find((j) => j.jobId === selectedJobId);

    setJob(job!);
    console.log("Job: ", job);
  }, []);

  const makeDecision = (decision: boolean) => {
    console.log("Decision: ", decision);
    setJobDecision(decision);
    setShowConfirmationModal(true);
  };

  const getShiftDate = (startDate: Date, endDate: Date) => {
    return `${dayjs(startDate).format("MMM D, ddd h:mm A")} - ${dayjs(endDate).format(
      "h:mm A z"
    )}`;
  };

  const openMaps = (address: string) => {
    window.open(`http://maps.google.com/?q=${address}`, "_blank")!.focus();
  };

  return (
    <>
      <Link to="/jobList" className="nav-link">
        Go back to jobs
      </Link>
      {job && (
        <JobInfoContainer className="mx-sm-auto col-lg-6 mt-sm-5">
          <img
            className="img-fluid"
            src={`${job.jobTitle.imageUrl}`}
            alt={`Worker of ${job.company.name}`}
          />
          <h2>{job.jobTitle.name}</h2>
          <h3>{job.company.name}</h3>
          <MainInfo>
            <div>
              <div>Distance</div>
              <MainInfoEmphasis>
                {job.milesToTravel.toFixed(1)} miles
              </MainInfoEmphasis>
            </div>
            <div>
              <div>Hourly Rate</div>
              <MainInfoEmphasis>
                ${(job.wagePerHourInCents / 100).toFixed(2)}
              </MainInfoEmphasis>
            </div>
          </MainInfo>
          <div>
            <h4>Shift Dates</h4>
            {job.shifts.map((s, i) => (
              <ShiftDay key={`${i}-${s.startDate}`}>
                {getShiftDate(s.startDate, s.endDate)}
              </ShiftDay>
            ))}
          </div>
          <hr />
          <Location>
            <div>
              <h4>Location</h4>
              {job.company.address.formattedAddress}
              <br />
              {job.milesToTravel} miles from your job search location
            </div>
            <button
              onClick={() => {
                openMaps(job.company.address.formattedAddress);
              }}
            >
              Open map
            </button>
          </Location>
          <hr />
          <div>
            <h4>Requirements</h4>
            <DashedList>
              {job.requirements ? (
                job.requirements?.map((r) => <li key={r}>{r}</li>)
              ) : (
                <li>None</li>
              )}
            </DashedList>
          </div>
          <hr />
          <div>
            <h4>Report To</h4>
            {job.company.reportTo.name} - {job.branchPhoneNumber}
          </div>
          <JobOfferDecision>
            <button onClick={() => makeDecision(false)}>No Thanks</button>
            <button onClick={() => makeDecision(true)}>I'll Take It</button>
          </JobOfferDecision>
          <JobDecisionModal
            job={job}
            decision={jobDecision as boolean}
            show={showConirmationModal}
            onHide={() => setShowConfirmationModal(false)}
          />
        </JobInfoContainer>
      )}
    </>
  );
};
