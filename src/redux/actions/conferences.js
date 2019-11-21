import api from "../../data/api";
import { RECEIVE_CONFERENCES, REQUEST_CONFERENCES } from "./types";

function requestConferences() {
  return {
    type: REQUEST_CONFERENCES
  };
}

function receiveConferences(response) {
  return {
    type: RECEIVE_CONFERENCES,
    conferences: response.data,
    receivedAt: Date.now()
  };
}

function fetchConferences() {
  return dispatch => {
    dispatch(requestConferences());
    return api.conferences.list().then(response => {
      dispatch(receiveConferences(response));
    });
  };
}

function shouldFetchConferences(state) {
  const conferences = state.conferences.conferences;
  return conferences.length === 0;
}

export function fetchConferencesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchConferences(getState())) {
      return dispatch(fetchConferences());
    } else {
      return Promise.resolve();
    }
  };
}
