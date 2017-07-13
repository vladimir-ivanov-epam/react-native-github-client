/**
 * Created by Pavel_Ryabichenko on 12.07.2017.
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Login} from "./Login";

export default class MyGitHub extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <Login/>
    );
  }
}

AppRegistry.registerComponent("MyGitHub", () => MyGitHub);
