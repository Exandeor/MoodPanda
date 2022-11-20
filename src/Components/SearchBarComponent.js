import React from 'react';
import { Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function SearchBar(props) {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{color : COLORS.darkgray}} style={styles.subContainer} onPress={props.onPress}>
                <Ionicons name='search' size={25} color={COLORS.darkgray}/>
                <Text style={styles.text}>{props.placeHolder}</Text>
            </Pressable>
            <TouchableHighlight style={styles.icon} underlayColor={COLORS.lightGray} onPress={props.onPressQR}>
                <Ionicons name='scan-outline' size={30} color={COLORS.black}/>
            </TouchableHighlight>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container : {
        height : 50,
        marginHorizontal : SIZES.padding,
        bottom : 25,
        backgroundColor : COLORS.white,
        borderRadius : SIZES.radius,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        alignItems : "center",
        flexDirection : "row",
        overflow : "hidden"
    },
    subContainer : {
        flexDirection : "row",
        flex : 1,
        height : "100%",
        alignItems : "center",
        paddingStart : SIZES.padding,


    },
    text : {
        ...FONTS.body4,
        flex : 1,
        paddingLeft : SIZES.padding,
        color : COLORS.darkgray
    },
    icon : {
        width : 50,
        justifyContent : "center",
        alignItems : "center",
        height : "100%",
        borderTopEndRadius : SIZES.radius,
        borderBottomEndRadius : SIZES.radius,
        borderLeftColor : COLORS.lightGray3,
        borderLeftWidth : 1
    }
})