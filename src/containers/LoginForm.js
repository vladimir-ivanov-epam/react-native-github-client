import React, { Component } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { connect } from 'react-redux';
import { loginChanged, passwordChanged, loginUser } from '../actions';
import { Header, Spinner} from '../components/common';

class LoginForm extends Component {
    constructor(props)  {
        super(props);
    }
    static navigationOptions = {
        title: 'Login'
    };
    componentWillMount(){
        // Loading saved data
        //console.log('LoginForm will mount');
    }
    onLoginChange(text) {
        this.props.loginChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { login, password } = this.props;
        this.props.loginUser({ login, password });
    }
    _renderValidation() {
        return <Text style={[styles.validationText]}>
            {this.props.error}
        </Text>
    }
    _renderLoadingIndicator() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={[styles.column, styles.form]}>
                    <TextInput
                        placeholder={'Login'}
                        underlineColorAndroid = "transparent"
                        style={styles.textInput}
                        onChangeText={this.onLoginChange.bind(this)}
                        value={this.props.login}
                    />

                    <TextInput
                        placeholder={'Password'}
                        underlineColorAndroid = "transparent"
                        style={styles.textInput}
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry={true}
                        value={this.props.password}
                    />

                    <View style={styles.validation}>
                        {this._renderValidation()}
                        {this._renderLoadingIndicator()}
                    </View>

                    <Button
                        onPress={this.onButtonPress.bind(this)}
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
const mapStateToProps = ({ auth }) => {
    const { login, password, error, loading } = auth;
    return { login, password, error, loading };
};

export default connect(mapStateToProps, {
    loginChanged,
    passwordChanged,
    loginUser
})(LoginForm);