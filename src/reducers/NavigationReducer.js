import { NavigationActions } from 'react-navigation';
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
} from '../actions/types';

import { AppNavigator } from '../containers/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
const loginNavState = AppNavigator.router.getStateForAction(firstAction);
//const secondAction = AppNavigator.router.getActionForPathAndParams('Repositories');

export default (state = loginNavState, action) => {
    let nextState;
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Repositories'}),
                state
            );
            break;
        case LOGIN_USER_FAIL:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}