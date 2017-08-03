import React from 'react'
import {Image, View, StyleSheet} from "react-native";

const Header = (props) => {
    const {header, logoImg} = styles;
    return (
        <View style={header}>
            <Image source={require('../../images/GitHub-Logo.png')} style={logoImg} resizeMode="contain"/>
        </View>
    );
}
const styles = StyleSheet.create({
    header:    { flexDirection: 'column', paddingVertical: 30, justifyContent: 'center', alignItems: 'center',position: 'relative'},
    logoImg:   { width: 300, height: 100, padding: 10 }
});

export { Header };