/**
 * Created by Pavel_Ryabichenko on 17.07.2017.
 */

import React from 'react'
import {Image, View, StyleSheet} from "react-native";

const Header = () => {
    const {header, logoImg} = styles;
    return (
        <View style={header}>
            <Image source={require('../images/GitHub-Logo.png')} style={logoImg} resizeMode="contain"/>
        </View>
    );
}
const styles = StyleSheet.create({
    header:    { flexDirection: 'row', paddingVertical: 30 },
    logoImg:   { width: 300, height: 100, padding: 10 }
});

export { Header };