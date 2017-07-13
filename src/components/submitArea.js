import React, { Component } from 'react';
import { View, Button, Text, ActivityIndicator, StyleSheet  } from 'react-native';

class SubmitArea extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { viewStyle, submitButton, warningText, loadIndicator } = styles;
        return (
            <View style={viewStyle}>
                {this.props.loginError &&
                <Text style={warningText}>Login and/or password are incorrect</Text>
                }
                {this.props.logining &&
                <ActivityIndicator size="large" style={loadIndicator}/>
                }
                <Button title="Submit" disabled={this.props.logining} onPress={this.props.submitHandler} style={submitButton}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
        /*backgroundColor: '#84D0FF',*/
        alignItems: 'center'
    },
    warningText: {
        color: '#ff0000',
        /*backgroundColor: '#fcfcfc',*/
        fontSize: 14
    },
    submitButton: {
        fontSize: 16,
        color: '#fff'
    },
    loadIndicator: {
    }
});

export default SubmitArea;