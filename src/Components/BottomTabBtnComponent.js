import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS } from '../Themes/Theme';


function BottomTabBtnComponent(props) {
    const focused = props.focused;
    return (
        <View style={styles.container}>
            <Ionicons name={props.icon} size={25} color={focused? COLORS.primary : COLORS.lightGray4}/>
            <Text style={[styles.text,{color : focused? COLORS.primary : COLORS.lightGray4}]}>{props.label}</Text>
        </View>
    );
}

export default BottomTabBtnComponent;

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center"
    },
    text : {
        ...FONTS.body5
    }
})