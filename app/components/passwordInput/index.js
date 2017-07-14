
import React from 'react';

import TextInput from '../textInput';

export default (props) => (
  <TextInput placeholder="Password" { ...props } secureTextEntry={ true } />
);
