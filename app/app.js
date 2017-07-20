
import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store.js';

import Login from './routes/login';
import User from './routes/user';

const AppNavigation = StackNavigator({
  Login: { screen: Login },
  User: { screen: User }
}, {
  headerMode: 'none'
});

export default () => (
  <Provider store={ store }>
    <AppNavigation />
  </Provider>
);
