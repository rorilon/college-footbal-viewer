import React from "react";
import Conferences from "./Conferences";
import styled from "styled-components";

const ConferencesContainer = styled.div`
  height: 100%;
`;
const ConferencesLabelContainer = styled.div`
  width: 98%;
  height: 50px;
  margin: auto;
  font-size: 1rem;
  line-height: 1.5;
  box-sizing: border-box;
  display: block;
  font-weight: 600;
  border-bottom: 1px solid gray;
  margin-bottom: 30px;
`;
const LabelConferences = styled.div`
  height: 100%;
  padding-top: 0.5em;
  text-align: start;
  font-size: 1.5rem;
`;
const TabConferences = () => (
  <ConferencesContainer>
    <ConferencesLabelContainer>
      <LabelConferences>Conferences</LabelConferences>
    </ConferencesLabelContainer>
    <Conferences />
  </ConferencesContainer>
);

export default TabConferences;
