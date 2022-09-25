import React, { useEffect, useRef, useState } from "react";
import { Job } from "../customTypes";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useJobDecision } from "../Hooks/useJobDecision";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  job: Job;
  decision: boolean;
  show: boolean;
  onHide: () => void;
}

export const JobDecisionModal: React.FC<Props> = ({
  job,
  decision,
  show,
  onHide,
}) => {
  const navigate = useNavigate();
  const {
    makeJobDecision,
    error: errorWithNetwork,
    isPending,
    isConfirmedByServer,
  } = useJobDecision();

  const [modalMainMessage, setModalMainMessage] = useState("");

  useEffect(() => {
    setModalMainMessage(
      `Are you sure you want to ${decision ? "Accept" : "Reject"} this job?`
    );
  }, [decision]);

  useEffect(() => {
    if (errorWithNetwork) {
      setModalMainMessage(
        `Error: 
    - ${errorWithNetwork}. 

Please contact swipejobs support`
      );
    }
  }, [errorWithNetwork]);

  const onclickHandleJobDecision = () => {
    makeJobDecision(decision, job.jobId);
  };

  useEffect(() => {
    if (isConfirmedByServer) {
      setModalMainMessage(
        `Job ${decision === true ? "Accepted" : "Rejected"}!`
      );
    }
  }, [isConfirmedByServer]);

  const getConfirmationButtonText = (): string => {
    let buttonText = "";

    if (isPending) {
      buttonText = "Loading...";
    } else if (isConfirmedByServer) {
      buttonText = decision === true ? "Accepted" : "Rejected";
    } else {
      buttonText = `I am sure. ${decision === true ? "Accept" : "Reject"} job`;
    }

    return buttonText;
  };

  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Job {decision === true ? "Acceptance" : "Rejection"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 style={{ whiteSpace: "pre-wrap" }}>{modalMainMessage}</h5>
        {!errorWithNetwork && (
          <p>
            {job.jobTitle.name} for {job.company.name} in {job.branch}
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {errorWithNetwork || isConfirmedByServer ? (
          <Link className="btn btn-primary" to="/jobList">
            Go back to Job List
          </Link>
        ) : (
          <>
            <Button onClick={onHide} disabled={isPending}>
              Close
            </Button>
            <Button onClick={onclickHandleJobDecision} disabled={isPending}>
              {getConfirmationButtonText()}
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};
