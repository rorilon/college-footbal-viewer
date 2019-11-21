import { RECEIVE_CONFERENCES, REQUEST_CONFERENCES } from "../actions/types";

const initialState = {
  conferences: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CONFERENCES:
      return { ...state, isFetching: true };
    case RECEIVE_CONFERENCES:
      return {
        ...state,
        isFetching: false,
        conferences: action.conferences,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
