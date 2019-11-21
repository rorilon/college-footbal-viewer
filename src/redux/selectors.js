export const getTeams = store => {
  const conference = getCurrentConference(store);
  if (conference) return getTeamsOnConference(store);
  else return store.teams.teams;
};
export const getTeamsOnConference = store => {
  return store.teams.teamsOnConference;
};
export const getConferences = store => {
  return store.conferences.conferences;
};
export const getPagination = store => {
  return store.pagination.teams;
};
export const getCurrentConference = store => {
  return store.teams.currentConference;
};
export const getPaginationConferences = store => {
  return store.pagination.conferences;
};
