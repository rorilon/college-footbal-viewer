import {
  totalPages,
  handleChangePerPageValue,
  handleChangePage
} from "../data/pagination";
import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 10px auto;
  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
`;
const PaginationControlContainer = styled.div`
  display: flex;
  margin: auto;
`;
const PaginationButton = styled.button`
  margin: auto 5%;
  @media (max-width: 320px) {
    margin: auto 0;
  }
`;
const PaginationSizeContainer = styled.div`
  display: flex;
`;
const ForPageLabel = styled.div`
  max-width: 70px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 5px;
`;
const ForPageInput = styled.input`
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 70px;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  @media (max-width: 320px) {
    max-width: 50px;
  }
`;
const ChoosePageInput = styled.input`
  display: block;
  max-width: 100px;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 70px;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  @media (max-width: 320px) {
    max-width: 50px;
  }
`;
const OfTotalPagerLabel = styled.div`
  margin: auto 5px;
  min-width: 45px;
  @media (max-width: 320px) {
    margin-right: 0;
    min-width: 25px;
  }
`;
export default function PaginationComponent({
  content,
  pagination,
  selectPage,
  selectPerPage
}) {
  return (
    <PaginationContainer>
      <PaginationControlContainer>
        <PaginationButton
          disabled={pagination.page === 1}
          onClick={() => selectPage(pagination.page - 1)}
        >
          {"<"}
        </PaginationButton>
        <ChoosePageInput
          type="number"
          defaultValue={pagination.page}
          value={pagination.page}
          onChange={event =>
            handleChangePage(event, selectPage, pagination, content)
          }
        />
        <OfTotalPagerLabel>
          {" of " + totalPages(content, pagination.perPage)}
        </OfTotalPagerLabel>
        <PaginationButton
          disabled={pagination.page === totalPages(content, pagination.perPage)}
          onClick={() => selectPage(pagination.page + 1)}
        >
          {">"}
        </PaginationButton>
      </PaginationControlContainer>
      <PaginationSizeContainer>
        <ForPageLabel>Page size:</ForPageLabel>
        <ForPageInput
          type="number"
          value={pagination.perPage}
          onChange={event => handleChangePerPageValue(event, selectPerPage)}
        />
      </PaginationSizeContainer>
    </PaginationContainer>
  );
}
