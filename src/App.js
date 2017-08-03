import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import configureStore from './storage/configureStore';

import Login from './screens/Login';
import UserInfo from './screens/UserInfo';


const AppWithNav = StackNavigator({
    Login: { screen: Login },
    UserInfo: { screen: UserInfo }
}, {
    headerMode: 'screen'
});

const store = configureStore();

export default () => (
    <Provider store={ store }>
        <AppWithNav />
    </Provider>
);