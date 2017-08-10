import {
    LOGIN_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    login: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_CHANGED:
            return { ...state, login: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Login and/or password are incorrect', password: '', loading: false };
        default:
            return state;
    }
};
