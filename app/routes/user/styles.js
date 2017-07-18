
import { StyleSheet } from 'react-native';

import theme from '../../theme.js';

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
    backgroundColor: theme.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },

  avatar: {
    borderWidth: 1,
    borderColor: theme.secondaryColor,
    borderRadius: 5,
    width: 200,
    height: 200
  },

  name: {
    fontSize: 32,
    color: theme.fontColor,
    marginTop: 15,
    textAlign: 'center'    
  }

});
