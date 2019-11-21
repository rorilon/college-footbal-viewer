import { connect } from "react-redux";
import React from "react";
import Table from "react-bootstrap/Table";
import Conference from "./Conference";
import { getConferences } from "../redux/selectors";
import { getPaginationConferences } from "../redux/selectors";
import {
  selectPageConferences,
  selectPerPageConferences
} from "../redux/actions/pagination";
import { dataForPage } from "../data/pagination";
import PaginationComponent from "./Pagination";
//import Loading from "../components/Loading";
import styled from "styled-components";

const TableContainer = styled.div`
  margin: auto 10px;
`;
const TextTh = styled.th`
  padding: 0.75rem;
  vertical-align: middle !important;
  text-align: center;
`;

const Conferences = ({
  conferences,
  selectPageConferences,
  pagination,
  selectPerPageConferences
}) => (
  <TableContainer>
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <TextTh>Abbr.</TextTh>
            <TextTh>Name</TextTh>
            <TextTh>Short name</TextTh>
          </tr>
        </thead>
        <tbody>
          {conferences &&
            dataForPage(
              conferences,
              pagination.page,
              pagination.perPage
            ).map(conference => (
              <Conference conference={conference} handleClick={() => {}} />
            ))}
        </tbody>
      </Table>
    </div>
    {conferences && (
      <PaginationComponent
        content={conferences}
        pagination={pagination}
        selectPage={selectPageConferences}
        selectPerPage={selectPerPageConferences}
      />
    )}
  </TableContainer>
);

const mapStateToProps = state => {
  const conferences = getConferences(state);
  const pagination = getPaginationConferences(state);

  return { conferences, pagination };
};

export default connect(mapStateToProps, {
  selectPageConferences,
  selectPerPageConferences
})(Conferences);
