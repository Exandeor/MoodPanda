import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function AddressBoxComponent(props) {
    return (
        <View style={[styles.container,props.style]}>
            <View style={styles.shopLocation}>
                <FontAwesome5 name='dot-circle' size={25} color={COLORS.dodgerBlue}/>
                <Text style={styles.addressText}>Waizayandar Road,South Okkalapa</Text>
            </View>
            <View style={styles.myLocation}>
                <Ionicons name='location-sharp' size={25} color={COLORS.primary}/>
                <Text style={styles.addressText}>Tallest Building in the road</Text>
            </View>
        </View>
    );
}

export default AddressBoxComponent;

const styles = StyleSheet.create({
    container :{
        backgroundColor : COLORS.white,
        paddingHorizontal : SIZES.padding2,
        paddingVertical : SIZES.padding * 2
    },
    shopLocation : {
        flexDirection:"row",
        alignItems:"center"
    },
    myLocation : {
        flexDirection:"row",
        alignItems:"center",
        marginVertical:SIZES.padding
    },
    addressText : {
        marginLeft : SIZES.padding,
        ...FONTS.body4,
        color : COLORS.black70
    },
})