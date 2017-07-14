import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, AppRegistry } from 'react-native';
import Header from './src/components/header';
import Inputs from './src/components/inputs';
import SubmitArea from './src/components/submitArea';

class App extends Component {
    constructor() {
        super();
        this.state = {
            logining: false,
            loginError: false
        }
    }

    loginAttempt = () => {
        this.setState({logining: true, loginError: false});
        setTimeout(() => {
            this.setState({logining: false, loginError: true});
        }, 2000);
    };

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Inputs />
                <SubmitArea logining={this.state.logining} loginError={this.state.loginError} submitHandler={this.loginAttempt} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#ffffff'
    }
});

AppRegistry.registerComponent('albums', () => App);
