/**
 * Created by Pavel_Ryabichenko on 21.07.2017.
 */

import axios from 'axios';
import {
    LOGIN_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const loginChanged = (text) => {
    return {
        type: LOGIN_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ login, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        axios({
            url: 'https://api.github.com/user',
            //url: './src/reducers/GiHubLoginData.json',
            auth: {
                username: login,
                password: password
            }
        }).then(userResponse =>
            loginUserSuccess(dispatch, userResponse))
          .catch((error) => {
            console.log(error);
            loginUserFail(dispatch);
          });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginUserSuccess = (dispatch, userResponse) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: userResponse.data
    });
};
