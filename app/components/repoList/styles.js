
import { StyleSheet } from 'react-native';

import theme from '../../theme.js';

export default StyleSheet.create({

  list: {
    padding: 15,
    paddingTop: 0
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  name: {
    color: theme.fontColor,
    flex: 5,
    fontSize: 18
  },

  stargazers: {
    color: theme.fontColor,
    flex: 1
  }

});
