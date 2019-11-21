import axios from "axios";

const baseUrl = "https://api.collegefootballdata.com";

const teamsPath = `${baseUrl}/teams`;
const conferencesPath = `${baseUrl}/conferences`;
const teamsConferencesPath = conference =>
  `${teamsPath}?conference=${conference}`;

export default {
  teams: {
    list: () => axios(teamsPath),
    ofConference: conference => axios(teamsConferencesPath(conference))
  },
  conferences: {
    list: () => axios(conferencesPath)
  }
};
