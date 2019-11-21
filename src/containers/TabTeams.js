import Teams from "./Teams";
import React from "react";
import FilterConferences from "./FilterConferences";
import styled from "styled-components";

const TeamsContainer = styled.div`
  height: 100%;
`;
const TeamsLabelContainer = styled.div`
  width: 98%;
  height: 50px;
  margin: auto;
  font-size: 1rem;
  line-height: 1.5;
  box-sizing: border-box;
  display: block;
  font-weight: 600;
  border-bottom: 1px solid gray;
`;
const TeamsLabel = styled.div`
  height: 100%;
  padding-top: 0.5em;
  text-align: start;
  font-size: 1.5rem;
`;
const TabTeams = () => (
  <TeamsContainer>
    <TeamsLabelContainer>
      <TeamsLabel>Teams</TeamsLabel>
    </TeamsLabelContainer>
    <FilterConferences />
    <Teams />
  </TeamsContainer>
);

export default TabTeams;
