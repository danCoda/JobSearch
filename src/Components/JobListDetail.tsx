import React from "react";
import { Link } from "react-router-dom";
import { Job } from "../customTypes";
import {
  CalendarIcon,
  LocationIcon,
  ToolsIcon,
  PersonIcon,
  OrganizationIcon
} from "@primer/octicons-react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

interface Props {
  job: Job;
  fontColour: string;
}

const Icon = styled.div`
  margin-right: 1rem;
  display: inline;
`;

export const JobListDetail: React.FC<Props> = ({ job, fontColour }) => {
  return (
    <div className={fontColour}>
      <Icon><OrganizationIcon size={16}/></Icon>Branch: <strong>{job.branch}</strong>
      <br />
      <Icon><LocationIcon size={16}/></Icon>Address: <strong>{job.company.address.formattedAddress}</strong>
      <br />
      <Icon><PersonIcon size={16}/></Icon>Reporting to <strong>{job.company.reportTo.name}</strong>
      <br />
      <br />
      <em>For shift information and more,</em>{" "}
      <Link className="btn btn-info" to={`/jobInfo/${job.jobId}`}>Click here</Link>
    </div>
  );
};
