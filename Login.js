/**
 * Created by Pavel_Ryabichenko on 12.07.2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ActivityIndicator,
    Button,
    Image
} from 'react-native';

export class Login extends Component {
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
    getInitialState () {
        return {
            animating: true,
            login: '',
            password: '',
            valid: true,
            loading: false
        }
    }

    _onPressBtn () {
        this.setState({loading: true, valid: true});
        var self = this;
        setTimeout(function(){
            self.setState({valid: false, loading: false});
        }, 3000);
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
        return (
            <View style={styles.container}>
                <View style={[styles.row,  {paddingVertical: 30}]}>
                    <Image source={require('./resources/img/GitHub-Logo.png')} style={styles.logoImg} resizeMode="contain"/>
                </View>
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
                        style={styles.submitBtn}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ecf0f1'},
    row:    { flexDirection: 'row' },
    column: { flexDirection: 'column' },
    form:   { width: 250, /*backgroundColor: 'green'*/},
    validation: {height: 35, /*backgroundColor: 'yellow'*/},
    validationText:{ color: 'red' },
    logoImg:   { width: 300, height: 100, padding: 10 },
    submitBtn: { borderColor: 'gray', borderWidth: 1, width: 200 },
    textInput: { borderColor: 'gray', borderWidth: 1, height: 40, marginBottom: 10 },
    wrapper:   { paddingVertical: 30},
    inputWrap: { flexDirection: "row", marginVertical: 10, height: 40, borderBottomWidth: 1, borderBottomColor: "#CCC" },
});