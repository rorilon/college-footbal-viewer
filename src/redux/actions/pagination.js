import {
  SELECT_PAGE,
  SELECT_PAGE_CONFERENCES,
  SELECT_PER_PAGE,
  SELECT_PER_PAGE_CONFERENCES
} from "./types";

export function selectPage(page) {
  return {
    type: SELECT_PAGE,
    page
  };
}

export function selectPerPage(perPage) {
  return {
    type: SELECT_PER_PAGE,
    perPage
  };
}
export function selectPageConferences(page) {
  return {
    type: SELECT_PAGE_CONFERENCES,
    page
  };
}

export function selectPerPageConferences(perPage) {
  return {
    type: SELECT_PER_PAGE_CONFERENCES,
    perPage
  };
}
