import GitHubAPI from '../storage/GitHubAPI';

export function reposIsLoading(bool) {
    return {
        type: 'REPOS_IS_LOADING',
        isLoading: bool
    };
}

export function reposHasErrored(bool) {
    return {
        type: 'REPOS_HAS_ERRORED',
        hasErrored: bool
    }
}

export function reposFetchDataSuccess(repos) {
    return {
        type: 'REPOS_FETCH_DATA_SUCCESS',
        repos
    }
}

export function reposFetchData(url) {
    return async (dispatch) => {
        dispatch(reposIsLoading(true));

        var repos = await GitHubAPI.doApiCall('/user/repos');
        console.log(repos);
        if(repos) {
            dispatch(reposFetchDataSuccess(repos));
            dispatch(reposIsLoading(false));
        } else {
            dispatch(reposHasErrored(true));
            dispatch(reposIsLoading(false));
        }

    }
}