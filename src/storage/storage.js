import { AsyncStorage } from 'react-native';

const AUTH_TOKEN_KEY = 'GitHubToken';


function setToken(token) {
    return AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
}

function setUserName(name) {
    return AsyncStorage.setItem('UserName', name);
}

function getUserName() {
    return AsyncStorage.getItem('UserName');
}

function getToken() {
    return AsyncStorage.getItem(AUTH_TOKEN_KEY);
}

function removeToken() {
    return AsyncStorage.removeItem(AUTH_TOKEN_KEY);
}

export default {
    setToken,
    getToken,    
    removeToken,
    setUserName,
    getUserName
}
