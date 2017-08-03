export function userHasErrored(state = false, action) {
    switch (action.type) {
        case 'USER_HAS_ERRORED':
            return action.hasErrored;

        default:
            return false;
    }
}

export function userIsLoading(state = false, action) {
    switch (action.type) {
        case 'USER_IS_LOADING':
            return action.isLoading;

        default:
            return false;
    }
}

export function user(state = [], action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return action.auth;

        default:
            return state;
    }
}