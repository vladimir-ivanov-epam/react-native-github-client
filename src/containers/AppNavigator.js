/**
 * Created by Pavel_Ryabichenko on 24.07.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import Repositories from './Repositories';

const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'Login'
};
export const AppNavigator = StackNavigator({
    Login: { screen: LoginForm },
    Repositories: { screen: Repositories }
}, stackNavigatorConfiguration);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);