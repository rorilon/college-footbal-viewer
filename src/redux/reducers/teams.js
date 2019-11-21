import {
  RECEIVE_TEAMS,
  RECEIVE_TEAMS_ON_CONFERENCE,
  REQUEST_TEAMS,
  REQUEST_TEAMS_ON_CONFERENCE
} from "../actions/types";

const initialState = {
  teams: [],
  teamsOnConference: [],
  currentConference: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return { ...state, isFetching: true };
    case RECEIVE_TEAMS:
      return {
        ...state,
        isFetching: false,
        teams: action.teams,
        lastUpdated: action.receivedAt
      };
    case REQUEST_TEAMS_ON_CONFERENCE:
      return { ...state, currentConference: action.conference };
    case RECEIVE_TEAMS_ON_CONFERENCE:
      return {
        ...state,
        //   isFetching: false,
        teamsOnConference: action.teamsOnConference
        // lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
