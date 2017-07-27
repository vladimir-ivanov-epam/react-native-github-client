import 'react-native';
import React from 'react';
import { repos, reposHasErrored, reposIsLoading } from '../src/reducers/repos';

it('returns correct state', () => {
    expect(repos(null, { type: 'REPOS_FETCH_DATA_SUCCESS', repos: [] })).toMatchSnapshot();
});

it('returns bool', () => {
    expect(reposHasErrored(null, { type: 'REPOS_HAS_ERRORED', hasErrored: true })).toMatchSnapshot();
});

it('returns bool', () => {
    expect(reposIsLoading(null, { type: 'REPOS_IS_LOADING', isLoading: true })).toMatchSnapshot();
});
