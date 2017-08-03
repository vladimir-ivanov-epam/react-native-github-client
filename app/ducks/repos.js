
import apiProvider from '../lib/apiProvider.js';

const SET_DATA = 'repos/SET_DATA';

export default function reducer(state = null, action) {

  switch (action.type) {

    case SET_DATA:
      return action.reposData;

    default:
      return state;

  }

}

export function getRepos() {

  return async (dispatch) => {
    const reposData = await apiProvider.getRepos();

    dispatch(setReposData(reposData));
  };
}

export function setReposData(reposData) {
  return { type: SET_DATA, reposData };
}
