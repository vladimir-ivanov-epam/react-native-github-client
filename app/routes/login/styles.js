
import { StyleSheet } from 'react-native';

import theme from '../../theme.js';

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
    backgroundColor: theme.backgroundColor,
    justifyContent: 'center'    
  },

  logo: {    
    fontSize: 90,
    marginTop: 15,
    marginBottom: 15,
    color: theme.fontColor,
    textAlign: 'center'
  },

  statusWrapper: {
    minHeight: 40,    
    margin: 15
  },

  errorMessage: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: theme.errorColor
  }

});
