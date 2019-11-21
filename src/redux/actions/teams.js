import {
  RECEIVE_TEAMS,
  RECEIVE_TEAMS_ON_CONFERENCE,
  REQUEST_TEAMS,
  REQUEST_TEAMS_ON_CONFERENCE
} from "./types";
import api from "../../data/api";

function requestTeams() {
  return {
    type: REQUEST_TEAMS
  };
}

function receiveTeams(response) {
  return {
    type: RECEIVE_TEAMS,
    teams: response.data,
    receivedAt: Date.now()
  };
}

function fetchTeams() {
  return dispatch => {
    dispatch(requestTeams());
    return api.teams.list().then(response => {
      dispatch(receiveTeams(response));
    });
  };
}

function shouldFetchTeams(state) {
  const teams = state.teams.teams;
  return teams.length === 0;
}

export function fetchTeamsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTeams(getState())) {
      return dispatch(fetchTeams());
    } else {
      return Promise.resolve();
    }
  };
}

function requestTeamsOnConference(conference) {
  return {
    type: REQUEST_TEAMS_ON_CONFERENCE,
    conference: conference
  };
}

function receiveTeamsOnConference(response) {
  return {
    type: RECEIVE_TEAMS_ON_CONFERENCE,
    teamsOnConference: response.data,
    receivedAt: Date.now()
  };
}

function fetchTeamsOnConference(conference) {
  return dispatch => {
    dispatch(requestTeamsOnConference(conference));
    return api.teams.ofConference(conference).then(response => {
      dispatch(receiveTeamsOnConference(response));
    });
  };
}

function shouldFetchTeamsOnConference(state, conference) {
  //  const teamsOnConference = state.teams.onConference;
  const currentConference = state.teams.currentConference;
  return currentConference !== conference;
}

export function fetchTeamsOnConferenceIfNeeded(conference) {
  return (dispatch, getState) => {
    if (shouldFetchTeamsOnConference(getState(), conference)) {
      return dispatch(fetchTeamsOnConference(conference));
    } else {
      return Promise.resolve();
    }
  };
}
