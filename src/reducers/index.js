import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ReposReducer from './ReposReducer';
import NavigationReducer from './NavigationReducer';

const AppReducer = combineReducers({
    auth: AuthReducer,
    repos: ReposReducer,
    nav: NavigationReducer,
});

export default AppReducer;