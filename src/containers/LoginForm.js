/**
 * Created by Pavel_Ryabichenko on 17.07.2017.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ActivityIndicator,
    Button,
    AsyncStorage
} from 'react-native';
import {Header} from '../components/Header'
import {getCredentials, setCredentials, loginUser, setUserData, getUserData} from '../services'

class LoginForm extends Component {
    static navigationOptions = {
        title: 'Home screen'
    }
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
            login: '',
            password: '',
            valid: true,
            loading: false
        }
    }

    componentWillMount(){
        // Loading saved data
        this._loadInitialState().done();
    }

    async _loadInitialState (){
        getCredentials(['login', 'password'])
            .then((creds) => {
                if(creds != null){
                    var userdata = getUserData();
                    this.setState(creds);
                    // if(userdata != null) {
                    //     this.props.navigation.navigate('UserInfo', {userdata: userdata})
                    // }
                    // else{
                    loginUser(creds)
                        .then((response) => {
                            setCredentials(this.state.login, this.state.password)
                                .then(() => setUserData(response.data).done());
                        }).catch((error) => {
                            console.log('error');
                            alert('Login failed');
                    });
                    // }
                }
            }
        );
    }

    _onPressBtn () {
        // console.log(this.state.login + this.state.password);
        loginUser({login: this.state.login, password: this.state.password})
            .then((response) => {
                if (response.status === 200) {
                    setCredentials(this.state.login, this.state.password)
                        .then(() => setUserData(response.data).done());
                    this.props.navigation.navigate('UserInfo', {userdata: response.data});
                } else{
                    alert('Login failed with status ' + response.status);
                }
            }).catch((error) => {
                console.log('Error: ' + error.message);
                alert('Error: ' + error.message);
            });
    }
    _renderValidation() {
        if(!this.state.valid){
            return <Text style={[styles.validationText]}>
                Login and/or password are incorrect
            </Text>
        }
    }
    _renderLoadingIndicator () {
        if(this.state.loading)
            return <ActivityIndicator
                animating={true}
                color={'gray'}
                size={'large'}
            />
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header/>
                <View style={[styles.column, styles.form]}>
                    <TextInput
                        placeholder={'Login'}
                        underlineColorAndroid = "transparent"
                        style={styles.textInput}
                        onChangeText={(login) => this.setState({login})}
                        value={this.state.login}
                    />

                    <TextInput
                        placeholder={'Password'}
                        underlineColorAndroid = "transparent"
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        value={this.state.password}
                    />
                    <View style={styles.validation}>
                        {this._renderValidation()}
                        {this._renderLoadingIndicator()}
                    </View>

                    <Button
                        onPress={(e) => this._onPressBtn(e)}
                        title="Submit"
                        style={styles.submitBtn} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ecf0f1'},
    row:    { flexDirection: 'row' },
    column: { flexDirection: 'column' },
    form:   { width: 250 },
    validation: {height: 35 },
    validationText:{ color: 'red' },
    logoImg:   { width: 300, height: 100, padding: 10 },
    submitBtn: { borderColor: 'gray', borderWidth: 1, width: 200 },
    textInput: { borderColor: 'gray', borderWidth: 1, height: 40, marginBottom: 10 },
    wrapper:   { paddingVertical: 30},
    inputWrap: { flexDirection: "row", marginVertical: 10, height: 40, borderBottomWidth: 1, borderBottomColor: "#CCC" },
});

export { LoginForm };