import { connect } from "react-redux";
import React from "react";
import { fetchTeamsOnConferenceIfNeeded } from "../redux/actions/teams";
import { getConferences, getCurrentConference } from "../redux/selectors";
//import Loading from "../components/Loading";
import styled from "styled-components";
const SelectConference = styled.select`
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  word-wrap: normal;
  margin-right: 10px;
`;
const SelectConferenceLabel = styled.div`
  max-width: 70px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 10px;
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 10px auto;
`;

const FilterConferences = ({
  conferences,
  currentConference,
  fetchTeamsOnConferenceIfNeeded
}) => (
  <FilterContainer id="filterConference">
    <SelectConferenceLabel>Filters:</SelectConferenceLabel>
    <SelectConference
      onChange={e => fetchTeamsOnConferenceIfNeeded(e.target.value)}
    >
      <option value="">- Choose conference -</option>
      {conferences.map(conference => (
        <option value={conference.name}>{conference.name}</option>
      ))}
    </SelectConference>
  </FilterContainer>
);

const mapStateToProps = state => {
  const conferences = getConferences(state);
  const currentConference = getCurrentConference(state);

  return { conferences, currentConference };
};

export default connect(mapStateToProps, { fetchTeamsOnConferenceIfNeeded })(
  FilterConferences
);
