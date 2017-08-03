import {
    REPOSITORIES_FETCH,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    repositories: [],
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REPOSITORIES_FETCH:
            return { ...state, loading: true, error: '' };
        case REPOSITORIES_FETCH_SUCCESS:
            return { ...state, repositories: action.payload, loading: false };
        case REPOSITORIES_FETCH_FAIL:
            return { ...state, error: 'Repositories are incorrect', password: '', loading: false };
        default:
            return state;
    }
};
