import {
  SELECT_PAGE,
  SELECT_PAGE_CONFERENCES,
  SELECT_PER_PAGE,
  SELECT_PER_PAGE_CONFERENCES
} from "../actions/types";

const defaultPerPage = 10;
const initialState = {
  teams: {
    page: 1,
    perPage: defaultPerPage
  },
  conferences: {
    page: 1,
    perPage: defaultPerPage
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, teams: { ...state.teams, page: action.page } };
    case SELECT_PER_PAGE:
      return {
        ...state,
        teams: { ...state.teams, perPage: action.perPage }
      };
    case SELECT_PAGE_CONFERENCES:
      return {
        ...state,
        conferences: { ...state.conferences, page: action.page }
      };
    case SELECT_PER_PAGE_CONFERENCES:
      return {
        ...state,
        conferences: { ...state.conferences, perPage: action.perPage }
      };
    default:
      return state;
  }
}
