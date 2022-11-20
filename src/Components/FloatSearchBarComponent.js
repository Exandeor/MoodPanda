import React from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function FloatSearchBarComponent(props) {
    return (
        <Pressable onPress={props.onPress} style={styles.container}>
          <View style={styles.subContainer}>
            <Ionicons name="search" size={20} color={COLORS.black}/>
            <Text style={styles.text}>What are you craving?</Text>
          </View>     
        </Pressable>
    );
}

export default FloatSearchBarComponent;

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : 60,
        paddingHorizontal : SIZES.padding,
        paddingTop : SIZES.padding,
        marginTop : StatusBar.currentHeight,
        paddingBottom : SIZES.padding,
        position : "absolute",
        zIndex : 10,
        backgroundColor : COLORS.white
    },
    subContainer : {
        flex : 1,
        flexDirection : "row",
        backgroundColor : COLORS.lightGray,
        paddingHorizontal : SIZES.padding,
        alignItems : "center",
        borderRadius : SIZES.radius / 2
    },
    text : {
        ...FONTS.body4,
        marginStart : SIZES.padding,
        color : COLORS.darkgray
    }
})