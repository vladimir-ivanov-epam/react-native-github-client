export function userIsLoading(bool) {
    return {
        type: 'USER_IS_LOADING',
        isLoading: bool
    };
}

export function userHasErrored(bool) {
    return {
        type: 'USER_HAS_ERRORED',
        hasErrored: bool
    }
}

export function userLoginSuccess(repos) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        repos
    }
}

export function userLogin(username, password) {
    return async (dispatch) => {
        dispatch(userIsLoading(true));
        var auth = await login(username, password);
        if(auth) {
            dispatch(userLoginSuccess(auth));
            dispatch(userIsLoading(false));
        } else {
            dispatch(userHasErrored(true));
            dispatch(userIsLoading(false));
        }        
    }
}