/**
 * Created by Pavel_Ryabichenko on 17.07.2017.
 */

import React from "react";
import {
    StackNavigator
} from 'react-navigation';
import {
    LoginForm,
    UserInfo
} from './containers';

const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'Home'
};
const App = StackNavigator({
    Home: {screen: LoginForm},
    UserInfo: {screen: UserInfo},
}, stackNavigatorConfiguration);


export default App;