import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, AsyncStorage } from 'react-native';
import axios from 'axios';
import Header from './Header';
import Inputs from './Inputs';
import SubmitArea from './SubmitArea';

export default class App extends Component {
    static navigationOptions = {
        title: 'GitHub login',
    }

    constructor(props) {
        super(props);
        this.state = {
            logining: false,
            loginError: false,
            username: '',
            password: ''
        }
    }

    componentWillMount() {
        AsyncStorage.multiGet(['username', 'password'], (err, credentials) => {
            console.log(credentials);
            const username = credentials[0][1];
            const password = credentials[1][1];
            console.log('Credentials on load: ' + username + ' ' + password );
            if(!username || !password) return;
            this.setState({
                username: username,
                password: password
            });
            this.loginAttempt();
        });
    }

    loginAttempt = () => {
        const { navigate } = this.props.navigation;
        //console.log('Credentials: ' + this.state.username + ' ' + this.state.password );
        this.setState({logining: true, loginError: false});        

        axios({
            url: 'https://api.github.com/user',
            auth: {
                username: this.state.username,
                password: this.state.password
            }
        }).then((res) => {
            //console.log(res);
            //console.log('Credentials: ' + this.state.username + ' ' + this.state.password );            
            this.setState({logining: false, loginError: false});
            AsyncStorage.multiSet(
                [['username', this.state.username], ['password', this.state.password]], (err) => {
                    navigate('UserInfo', {data: res.data});
                });            
        }).catch((err) => {
            if(err.response) {
                Alert.alert(
                    'Error code: '+err.response.status,
                    err.message
                );
                this.setState({logining: false, loginError: false});
                AsyncStorage.multiRemove(['username', 'password'], (err) => {

                });
            }            
        })
    };

    setUserName = (username) => {
        this.setState({username});
    };

    setPassword = (password) => { 
        this.setState({password});
    };

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Inputs setUserName={this.setUserName} setPassword={this.setPassword} username={this.state.username} password={this.state.password} />
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