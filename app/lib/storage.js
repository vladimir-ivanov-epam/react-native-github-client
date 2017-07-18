
import { AsyncStorage } from 'react-native';

const AUTH_TOKEN_KEY = '@GithubClient:auth';

function getAuthToken() {
  return AsyncStorage.getItem(AUTH_TOKEN_KEY);
}

function setAuthToken(token) {
  return AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
}

async function hasAuthToken() {
  return !!(await getAuthToken());
}

function deleteAuthToken() {
  return AsyncStorage.removeItem(AUTH_TOKEN_KEY);
}

export default { 
  getAuthToken, 
  setAuthToken,
  hasAuthToken,
  deleteAuthToken
}
