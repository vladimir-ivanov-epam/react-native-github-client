
import mockStore from 'redux-mock-store';

import reducer, { getRepos, setReposData } from '../../app/ducks/repos.js';

describe('Repos # reducer', () => {

  it('is expected to return appropriate state', () => {
    expect(reducer(null, setReposData([{ name: 'name' }]))).toMatchSnapshot();
  });

});

describe('Repos # async/getRepos', () => {

  afterEach(() => nock.cleanAll())

  it('is expected to trigger set data action with received data', async () => {

    nock('https://api.github.com')
      .get('/user/repos')
      .reply(200, [{ name: 'repo-name', stargazers_count: 10 }]);

    const store = mockStore({ repos: null });

    await store.dispatch(getRepos());

    expect(store.getActions()).toMatchSnapshot();

  });

});

describe('Repos # setReposData', () => {

  it('is expected to create SET_DATA action', () => {
    expect(setReposData([ { name: 'name', stargazers_count: 5 } ])).toMatchSnapshot();
  });

});
