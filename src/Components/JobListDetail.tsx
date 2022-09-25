import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  LocationIcon,
  PersonIcon,
  OrganizationIcon,
} from "@primer/octicons-react";
import { Job } from "../customTypes";

const Icon = styled.div`
  margin-right: 1rem;
  display: inline;
`;

interface Props {
  job: Job;
  fontColour: string;
}

export const JobListDetail: React.FC<Props> = ({ job, fontColour }) => {
  
  return (
    <div className={fontColour}>
      <Icon>
        <OrganizationIcon size={16} />
      </Icon>
      Branch: <strong>{job.branch}</strong>
      <br />
      <Icon>
        <LocationIcon size={16} />
      </Icon>
      Address: <strong>{job.company.address.formattedAddress}</strong>
      <br />
      <Icon>
        <PersonIcon size={16} />
      </Icon>
      Reporting to <strong>{job.company.reportTo.name}</strong>
      <br />
      <br />
      <em>For shift information and more,</em>{" "}
      <Link className="btn btn-info" to={`/jobInfo/${job.jobId}`}>
        Click here
      </Link>
    </div>
  );
};
