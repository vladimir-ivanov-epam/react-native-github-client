
import { combineReducers } from 'redux';

import user from './user.js';
import repos from './repos.js';

export default combineReducers({
  user,
  repos
});
