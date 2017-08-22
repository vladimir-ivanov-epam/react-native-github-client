import React from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './_Spinner';


const Spinner = () => (
  <ActivityIndicator
    style={styles.spinner}
    size='large'
  />
);

export default Spinner;
