import 'react-native';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { reposFetchData } from '../src/actions/repos';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('Repos async - reposFetchData', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates REPOS_FETCH_DATA_SUCCESS when fetching repos has been done', () => {
        nock('https://api.github.com')
          .get('/user/repos')
          .reply(200, [{ name: 'testrepo', stargazers_count: 5 }]);

        const store = mockStore({ repos: [] });

        store.dispatch(reposFetchData('/user/repos'));

        expect(store.getActions()).toMatchSnapshot();

    });
});