import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function FormInput(props) {
    return (
        <View style={styles.container}>
          <View style={styles.icon}><Ionicons name={props.icon} size={25} color={COLORS.secondary}/></View>
          <TextInput style={styles.textInput} placeholder={props.placeholder} placeholderTextColor={COLORS.white} maxLength={30}/>
        </View>
    );
}

export default FormInput;

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        marginBottom : SIZES.padding2 * 2
    } ,
    icon : {
        borderRadius : SIZES.roundRadius,
        position : "absolute",
        height : 50,
        width : 50,
        backgroundColor : COLORS.white,
        justifyContent : "center",
        alignItems : "center",
        zIndex : 1
    },
    textInput : {
        height : 50,
        backgroundColor : COLORS.transparent10,
        textAlign : "center",
        borderRadius : SIZES.roundRadius,
        ...FONTS.body4,
        borderColor : COLORS.transparent25,
        borderWidth : 1
    }
})