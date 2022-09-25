import styled from "styled-components";

export const MainImage = styled.img`
  width: 100%;
`;

export const JobInfoContainer = styled.div`
  h3 {
    font-size: 1.5rem;
  }
`;

export const JobHeader = styled.div`
  padding: 0.5rem 1rem;    
  font-weight: bold;
  background-color: white;
`;

export const MainInfo = styled.div`
  background-color: #31c39c;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: space-between;

  > div {
    margin: 0.5rem 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
  
  > div {
    margin-left: 1rem;
    width: 100%;
  }
  h4 {
    font-weight: bolder;
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

export const DashedList = styled.ul`
  list-style-type: none;
  margin-bottom: 0;

  > li {
    text-indent: -30px;
  }

  > li:before {
    content: "- ";
  }
`;

export const JobOfferDecision = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-evenly;
  background-color: white;

  button {
    width: 45%;
  }
`;
