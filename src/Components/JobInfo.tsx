import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import {
  CalendarIcon,
  LocationIcon,
  ToolsIcon,
  PersonIcon,
} from "@primer/octicons-react";
import { Alert, Button } from "react-bootstrap";
import {
  DashedList,
  DistanceDescription,
  Info,
  JobHeader,
  JobInfoContainer,
  JobOfferDecision,
  MainImage,
  MainInfo,
  MainInfoEmphasis,
  ShiftDay,
} from "./JobInfoStyles";
import { Job } from "../customTypes";
import { State } from "../State";
import { JobDecisionModal } from "./JobDecisionModal";

// Needed for timezone.
dayjs.extend(advancedFormat);
dayjs.extend(timezone);

export const JobInfo: React.FC = () => {
  const navigate = useNavigate();
  const selectedJobId = useParams().jobId;

  const { jobs } = useSelector((state: State) => state);

  const [selectedJob, setSelectedJob] = useState<null | Job>(null);
  const [jobDecision, setJobDecision] = useState<null | boolean>(null);
  const [showConirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    const availableJobs = jobs.availableJobs as Job[];

    if (!availableJobs) {
      return navigate("/jobList");
    }

    const selectedJob = availableJobs.find((j) => j.jobId === selectedJobId);
    setSelectedJob(selectedJob!);
  }, []);

  const makeJobDecision = (decision: boolean) => {
    setJobDecision(decision);
    setShowConfirmationModal(true);
  };

  const getShiftDate = (startDate: Date, endDate: Date) => {
    const start = dayjs(startDate).format("MMM D, ddd h:mm A");
    const end = dayjs(endDate).format("h:mm A z");

    return `${start} - ${end}`;
  };

  return (
    <>
      <Button variant="link">
        <Link to="/jobList" className="nav-link">
          Go back to jobs
        </Link>
      </Button>
      {selectedJob && (
        <JobInfoContainer className="mx-sm-auto col-lg-6">
          <MainImage
            src={`${selectedJob.jobTitle.imageUrl}`}
            alt={`Worker of ${selectedJob.company.name}`}
          />
          <JobHeader>
            <h2>{selectedJob.jobTitle.name}</h2>
            <h3>{selectedJob.company.name}</h3>
          </JobHeader>
          
          <MainInfo>
            <div>
              <div>Distance</div>
              <MainInfoEmphasis>
                {selectedJob.milesToTravel.toFixed(1)} miles
              </MainInfoEmphasis>
            </div>
            <div>
              <div>Hourly Rate</div>
              <MainInfoEmphasis>
                ${(selectedJob.wagePerHourInCents / 100).toFixed(2)}
              </MainInfoEmphasis>
            </div>
          </MainInfo>

          <Info>
            <CalendarIcon size={24} />
            <div>
              <h4>Shift Dates</h4>
              {selectedJob.shifts.map((s, i) => (
                <ShiftDay key={`${i}-${s.startDate}`}>
                  {getShiftDate(s.startDate, s.endDate)}
                </ShiftDay>
              ))}
            </div>
          </Info>

          <Info>
            <LocationIcon size={24} />
            <div>
              <div>
                <h4>Location</h4>
                {selectedJob.company.address.formattedAddress}
                <DistanceDescription>
                  {selectedJob.milesToTravel.toFixed(2)} miles from your
                  selected Job search location
                </DistanceDescription>
              </div>
              <div>
                {process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? (
                  <>
                    <iframe
                      title="Map of the office"
                      width="100%"
                      height="450"
                      style={{ border: "0" }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    &q=${selectedJob.company.address.formattedAddress}`}
                    ></iframe>
                    <div>(Map may not be accurate)</div>
                  </>
                ) : (
                  <Alert variant="warning">
                    Hello devs! Your Google API key was not found in the
                    environment variables, so you can't see Google Maps; please
                    read the Readme.
                  </Alert>
                )}
              </div>
            </div>
          </Info>

          <Info>
            <ToolsIcon size={24} />
            <div>
              <h4>Requirements</h4>
              <DashedList>
                {selectedJob.requirements ? (
                  selectedJob.requirements?.map((r) => <li key={r}>{r}</li>)
                ) : (
                  <li>None</li>
                )}
              </DashedList>
            </div>
          </Info>

          <Info>
            <PersonIcon size={24} />
            <div>
              <h4>Report To</h4>
              {selectedJob.company.reportTo.name} - {"   "}
              <a href={`tel:${selectedJob.branchPhoneNumber}`}>
                Call {selectedJob.branchPhoneNumber}
              </a>
            </div>
          </Info>

          <JobOfferDecision>
            <Button
              size="lg"
              variant="outline-dark"
              onClick={() => makeJobDecision(false)}
            >
              No Thanks
            </Button>
            <Button
              size="lg"
              variant="dark"
              onClick={() => makeJobDecision(true)}
            >
              I'll Take It
            </Button>
          </JobOfferDecision>
          <JobDecisionModal
            job={selectedJob}
            decision={jobDecision as boolean}
            show={showConirmationModal}
            onHide={() => setShowConfirmationModal(false)}
          />
        </JobInfoContainer>
      )}
    </>
  );
};
