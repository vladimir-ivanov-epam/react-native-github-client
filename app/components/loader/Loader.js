
import React from 'react';
import { ActivityIndicator } from 'react-native';

import theme from '../../theme.js';

export default (props) => (
  <ActivityIndicator { ...props } color={ theme.primaryColor } size="large" />
);
