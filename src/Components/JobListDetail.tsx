import React from "react";
import { Link } from "react-router-dom";
import { Job } from "../customTypes";

interface Props {
  job: Job;
  fontColour: string;
}

export const JobListDetail: React.FC<Props> = ({ job, fontColour }) => {
  return (
    <div className={fontColour}>
      Branch: <strong>{job.branch}</strong>
      <br />
      Address: <strong>{job.company.address.formattedAddress}</strong>
      <br />
      Reporting to <strong>{job.company.reportTo.name}</strong>
      <br />
      <em>For shift information and more,</em>{" "}
      <Link to={`/jobInfo/${job.jobId}`}>Click here</Link>
    </div>
  );
};
