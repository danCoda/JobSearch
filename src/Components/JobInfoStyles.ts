import styled from "styled-components";

export const JobInfoContainer = styled.div`
  h3 {
    font-size: 1.5rem;
  }
`;

export const MainInfo = styled.div`
  background-color: green;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: space-between;

  > div {
    margin: 20px;
  }
`;

export const MainInfoEmphasis = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

export const ShiftDay = styled.div`
  text-transform: uppercase;
`;

export const Location = styled.div`
  display: flex;
`;
export const DashedList = styled.ul`
  list-style-type: none;

  > li {
    text-indent: -30px;
  }

  > li:before {
    content: "- ";
  }
`;

export const JobOfferDecision = styled.div`
  display: flex;
`;
