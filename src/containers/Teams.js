import { connect } from "react-redux";
import React from "react";
import Table from "react-bootstrap/Table";
import Team from "./Team";
import { getTeams } from "../redux/selectors";
import { getPagination } from "../redux/selectors";
import { selectPage, selectPerPage } from "../redux/actions/pagination";
import { dataForPage } from "../data/pagination";
import PaginationComponent from "./Pagination";
import styled from "styled-components";

const TableContainer = styled.div`
  margin: auto 10px;
`;
const TextTh = styled.th`
  padding: 0.75rem;
  vertical-align: middle !important;
  text-align: center;
`;

const Teams = ({ teams, selectPage, pagination, selectPerPage }) => (
  <TableContainer>
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <TextTh hidden={window.innerWidth < 350}></TextTh>
            <TextTh>Abbr.</TextTh>
            <TextTh>School</TextTh>
            <TextTh hidden={window.innerWidth < 350}>Mascot</TextTh>
            <TextTh hidden={window.innerWidth < 350}>Division</TextTh>
            <TextTh>Conference</TextTh>
          </tr>
        </thead>
        <tbody>
          {teams &&
            dataForPage(
              teams,
              pagination.page,
              pagination.perPage
            ).map(team => <Team team={team} handleClick={() => {}} />)}
        </tbody>
      </Table>
    </div>
    {teams && (
      <PaginationComponent
        content={teams}
        pagination={pagination}
        selectPage={selectPage}
        selectPerPage={selectPerPage}
      />
    )}
  </TableContainer>
);

const mapStateToProps = state => {
  const teams = getTeams(state);
  const pagination = getPagination(state);

  return { teams, pagination };
};

export default connect(mapStateToProps, { selectPage, selectPerPage })(Teams);
