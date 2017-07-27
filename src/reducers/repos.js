export function reposHasErrored(state = false, action) {
    switch (action.type) {
        case 'REPOS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return false;
    }
}

export function reposIsLoading(state = false, action) {
    switch (action.type) {
        case 'REPOS_IS_LOADING':
            return action.isLoading;

        default:
            return false;
    }
}

export function repos(state = [], action) {
    switch (action.type) {
        case 'REPOS_FETCH_DATA_SUCCESS':
            return action.repos;

        default:
            return state;
    }
}