import React from 'react';
import { Text, View } from 'react-native';

import styles from './_ErrorMessage';

const ErrorMessage = (props) => {
  if (props.isError) {
    return (
      <Text
        style={styles.errorMessage}
      >
        Login and/or password are incorrect
      </Text>
    );
  }

  return (
    <View />
  );
};

export default ErrorMessage;
