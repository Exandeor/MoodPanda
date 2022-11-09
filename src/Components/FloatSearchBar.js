import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function FloatSearchBar(props) {
    return (
        <View style={[styles.container,props.style]}>
          <View style={styles.subContainer}>
            <Ionicons name="search" size={20} color={COLORS.black}/>
            <Text style={styles.text}>What are you craving?</Text>
          </View>     
        </View>
    );
}

export default FloatSearchBar;

const styles = StyleSheet.create({
    container : {
        width : SIZES.width,
        height : 60,
        paddingHorizontal : SIZES.padding,
        paddingTop : SIZES.padding,
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