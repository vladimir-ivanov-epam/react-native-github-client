import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './_Spinner';


const Spinner = (props) => {
  if (props.isLoading) {
    return (
      <ActivityIndicator
          style={styles.spinner}
          size='large'
      />
    );
  }

  return (
    <View />
  );
};

export default Spinner;
