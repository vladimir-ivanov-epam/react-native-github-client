
import { StyleSheet } from 'react-native';

import theme from '../../theme.js';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor
  },

  name: {
    fontSize: 15,
    color: theme.fontColor,
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#2a2a2a',
    borderBottomWidth: 1,
    borderColor: theme.secondaryColor
  },

  sectionTitle: {
    fontSize: 28,
    padding: 15,
    color: theme.fontColor
  }

});
