import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import Logo from '../components/Logo';
import Inputs from '../components/Inputs';
import SubmitArea from '../components/SubmitArea';
import GitHubAPI from '../storage/GitHubAPI';
import storage from '../storage/storage';

export default class Login extends Component {
    static navigationOptions = {
        header: false
    }

    constructor(props) {
        super(props);
        this.state = {
            logining: false,
            loginError: false,
            loggedIn: null,
            username: '',
            password: ''
        };
    }

    setUserName = (username) => {
        this.setState({ username });
    };

    setPassword = (password) => {
        this.setState({ password });
    };

    loginAttempt = async () => {
        this.setState({ logining: true });
        const { navigation } = this.props;
        const { username, password } = this.state;
        const authorized = await GitHubAPI.login(username, password);
        if (authorized) {
            this.setState({ loggedIn: true, logining: false });
            //storage.setUserName(username);
            navigation.navigate('UserInfo');
        } else {
            this.setState({ loggedIn: false, logining: false });
            Alert.alert('Login error', 'User name or password is incorrect');
        }
    };

    async componentDidMount() {
        const { navigation } = this.props;
        //await GitHubAPI.removeToken();
        const authorized = await GitHubAPI.checkIfAuthorized();
        console.log(authorized);
        if(authorized) {
            this.setState({ loggedIn: true, logining: false });
            const { username } = this.state;
            return navigation.navigate('UserInfo', { username });
        } else {
            this.setState({ loggedIn: false, logining: false });
        }
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case false:
                return (
                    <View style={styles.container}>
                        <Logo />
                        <Inputs setUserName={this.setUserName} setPassword={this.setPassword} username={this.state.username} password={this.state.password} />
                        <SubmitArea logining={this.state.logining} loginError={this.state.loginError} submitHandler={this.loginAttempt} />
                    </View>
                );
            default:
                return <ActivityIndicator style={{ flex:1 }} size="large" />;

        }
    }

    render() {
        return (
            this.renderContent()
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
