import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function TwoCategoryComponent(props) {
    return (
      <View style={styles.container}>
        <View style={styles.delivery}><Text style={styles.deliveryText}>Delivery</Text></View>
        <View style={styles.pickUp}><Text style={styles.pickUpText}>Pick Up</Text></View>
      </View>
    );
}


export default TwoCategoryComponent;

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        paddingHorizontal : SIZES.padding
    },
    delivery : {
        paddingVertical : SIZES.padding,
        paddingHorizontal : SIZES.padding * 1.5,
        backgroundColor : COLORS.lightGray,
        borderRadius: SIZES.roundRadius
    },
    deliveryText : {
        ...FONTS.body4,
        color : COLORS.black
    },
    pickUp : {
        paddingVertical : SIZES.padding,
        paddingHorizontal : SIZES.padding * 1.5,
        backgroundColor : COLORS.lightGray,
        borderRadius: SIZES.roundRadius
    },
    pickUpText : {
        ...FONTS.body4,
        color : COLORS.black
    }
})