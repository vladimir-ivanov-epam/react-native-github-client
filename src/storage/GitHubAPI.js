import axios from 'axios';
import storage from './storage';

const GITURL = 'https://api.github.com';

async function login(username, password) {
    
    try {
        const resp = await axios({
            url: GITURL + '/authorizations',
                method: 'post',
                auth: { username, password },
                data: {
                    note: 'GitHubClient13',
                    scopes: ['public_repo']
                }
        });

        const token = resp.data.token;

        if(token) {
            await storage.setToken(token);
            return true;
        }
    } catch(err) {
        console.log(err);
    }

    return false;
}

async function checkIfAuthorized() {
    return await storage.getToken();
}

async function doApiCall(url) {
    const token = await storage.getToken();
    const response = await axios({
        url: GITURL + url,
        headers: {
          'Authorization': 'token ' + token
        }
    });
    return response.data;
}

async function removeToken() {
    return await storage.removeToken()
}

export default {
    login,
    checkIfAuthorized,
    removeToken,
    doApiCall
}