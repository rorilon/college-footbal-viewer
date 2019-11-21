import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import connect from "react-redux/es/connect/connect";
import TabTeams from "./TabTeams";
import TabConferences from "./TabConferences";
import { fetchTeamsIfNeeded } from "../redux/actions/teams";
import { fetchConferencesIfNeeded } from "../redux/actions/conferences";
import { getTeams } from "../redux/selectors";
import styled from "styled-components";

const FootballLabel = styled.div`
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  box-sizing: border-box;
  display: block;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-align: center;
`;
const TabsItem = styled.div`
  text-align: center;
`;

function ControlledTabs({ fetchTeamsIfNeeded, fetchConferencesIfNeeded }) {
  fetchTeamsIfNeeded();
  fetchConferencesIfNeeded();
  return (
    <Tab.Container defaultActiveKey="teams">
      <Row>
        <Col sm={3}>
          <FootballLabel>Football Data</FootballLabel>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <TabsItem>
                <Nav.Link eventKey="teams">Teams</Nav.Link>
              </TabsItem>
            </Nav.Item>
            <Nav.Item>
              <TabsItem>
                <Nav.Link eventKey="conferences">Conferences</Nav.Link>
              </TabsItem>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="teams">
              <TabTeams />
            </Tab.Pane>
            <Tab.Pane eventKey="conferences">
              <TabConferences />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
const mapStateToProps = state => {
  return { teams: getTeams(state) };
};

export default connect(mapStateToProps, {
  fetchTeamsIfNeeded,
  fetchConferencesIfNeeded
})(ControlledTabs);
