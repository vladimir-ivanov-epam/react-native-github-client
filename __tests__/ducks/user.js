
import mockStore from 'redux-mock-store';

import reducer, { getUser, setUserData } from '../../app/ducks/user.js';

describe('User # reducer', () => {

  it('is expected to return appropriate state', () => {
    expect(reducer(null, setUserData({ login: 'login' }))).toMatchSnapshot();
  });

});

describe('User # async/getUser', () => {

  afterEach(() => nock.cleanAll())

  it('is expected to trigger set data action with received data', async () => {

    nock('https://api.github.com')
      .get('/user')
      .reply(200, { name: 'Superman' });

    const store = mockStore({ user: null });

    await store.dispatch(getUser());

    expect(store.getActions()).toMatchSnapshot();

  });

});

describe('User # setUserData', () => {

  it('is expected to create SET_DATA action', () => {
    expect(setUserData({ name: 'some' })).toMatchSnapshot();
  });

});
