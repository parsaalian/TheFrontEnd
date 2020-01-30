import axios from 'axios';
import BASE_ADDR from '.';

const PROFILE_API = `${BASE_ADDR}/accounts/profile/`;
const PASSWORD_RESET_API = `${BASE_ADDR}/accounts/password/change/`;
const TASK = (id) => `${BASE_ADDR}/resources/${id}/`;
const TASK_LIST = `${BASE_ADDR}/resources/`;
const ALL_CONTESTS = `${BASE_ADDR}/contest/`;
const CONTEST = (contestID) => `${BASE_ADDR}/contest/${contestID}/`;
const MILESTONE = (contestID, milestoneID) =>
  `${BASE_ADDR}/contest/${contestID}/milestone/${milestoneID}/`;
const TASK_API = (contestId, milestoneId, taskId) =>
  `${BASE_ADDR}/contest/${contestId}/milestone/${milestoneId}/task/${taskId}/`;
const TRIAL_API = (contestID, milestoneID, taskId, trialId) =>
  `${BASE_ADDR}/contest/${contestID}/milestone/${milestoneID}/task/${taskId}/trial/${trialId}/`;

export function passwordUpdateAPI(data, token) {
  return axios.post(PASSWORD_RESET_API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export function profileUpdateAPI(data, token) {
  return axios.put(PROFILE_API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function profileAPI(token) {
  return axios.get(PROFILE_API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function taskListAPI(token) {
  return axios.get(TASK_LIST, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function taskAPI(id, token) {
  return axios.get(TASK(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function allContestsAPI(token) {
  return axios.get(ALL_CONTESTS, {
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getTrialAPI(token, contestId, milestoneId, taskId, trialId) {
  return axios.get(TRIAL_API(contestId, milestoneId, taskId, trialId), {
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function submitTrialAPI(data, token, contestId, milestoneId, taskId, trialId) {
  return axios.post(TRIAL_API(contestId, milestoneId, taskId, trialId), data, {
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function contestAPI(contestId, token) {
  return axios.get(CONTEST(contestId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function milestoneAPI(contestID, milestoneID, token) {
  return axios.get(MILESTONE(contestID, milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function trialsListAPI(contestID, milestoneID, token) {
  return axios.get(MILESTONE(contestID, milestoneID), {
    headers : {
      Authorization: `Bearer ${token}`
    }
  });
}

export function contentFinished(contestId, milestoneId, taskId) {
  return axios.put(TASK_API(contestId, milestoneId, taskId), {
    headers : {
      Authorization: `Bearer ${token}`
    }
  });
}

