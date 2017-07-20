
import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './routes/login';
import User from './routes/user';

export default StackNavigator({
  Login: { screen: Login },
  User: { screen: User }
}, {
  headerMode: 'none'
});
