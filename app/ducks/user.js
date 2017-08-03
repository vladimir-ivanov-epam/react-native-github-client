
import apiProvider from '../lib/apiProvider.js';

const SET_DATA = 'user/SET_DATA';

export default function reducer(state = null, action) {

  switch (action.type) {

    case SET_DATA:
      return action.userData;

    default:
      return state;

  }

}

export function getUser() {

  return async (dispatch) => {
    const userData = await apiProvider.getUser();

    dispatch(setUserData(userData));
  };
}

export function setUserData(userData) {
  return { type: SET_DATA, userData };
}
