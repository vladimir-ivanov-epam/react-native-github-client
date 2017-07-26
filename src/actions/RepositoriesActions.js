import axios from 'axios';
import { REPOSITORIES_FETCH,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_FAIL
} from './types';
import repos from '../data/GitHubRepos.json';

export const repositoriesFetch = (currentUser) => {
    return (dispatch) => {
        dispatch({ type: REPOSITORIES_FETCH });
        if(currentUser && currentUser.repos_url != ''){
            axios({
                url: currentUser.repos_url
            }).then(response => {
                dispatch({ type: REPOSITORIES_FETCH_SUCCESS, payload: response.data });
            }).catch(error => {
                dispatch({ type: REPOSITORIES_FETCH_SUCCESS, payload: repos });
                //dispatch({ type: REPOSITORIES_FETCH_FAIL, payload: error.message });
            });
        } else{
            dispatch({ type: REPOSITORIES_FETCH_FAIL, payload: error.message });
        }
    };
};