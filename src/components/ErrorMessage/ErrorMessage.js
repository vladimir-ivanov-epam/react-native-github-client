import React from 'react';
import { Text } from 'react-native';

import styles from './_ErrorMessage';

const ErrorMessage = () => (
  <Text
    style={styles.errorMessage}
  >
    Login and/or password are incorrect
  </Text>
);

export default ErrorMessage;
