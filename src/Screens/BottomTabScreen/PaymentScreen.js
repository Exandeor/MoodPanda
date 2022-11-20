import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../Themes/Theme';

function PaymentScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.pandaPay}>PandaPay</Text></View>
            <View style={styles.subContainer}>
                <Pressable onPress={()=>navigation.navigate("AddPaymentMethodScreen")} android_ripple={{color:COLORS.darkgray}} style={styles.addPaymentMethod}>
                  <Ionicons name='add' style={styles.addPaymentMethodIcon}/>
                  <Text style={styles.addPaymentMethodText}>ADD PAYMENT METHOD</Text>
                </Pressable>
                <Text style={styles.decorationText}>Enjoy cashless ride experience and never</Text>
                <Text style={styles.decorationText}>worry about not having enough cash!</Text>
            </View>
            <View style={styles.fourIconsContainer}>
              <Fontisto name="visa" style={styles.fourIcons}/>
              <Fontisto name="mastercard" style={styles.fourIcons}/>
              <Fontisto name="jcb" style={styles.fourIcons}/>
              <Fontisto name="american-express" style={styles.fourIcons}/>
              <Fontisto name="apple-pay" style={styles.fourIcons}/>
            </View>
        </View>
    );
}

export default PaymentScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.lightGray,
        paddingTop : StatusBar.currentHeight
    },
    header : {
        paddingVertical : SIZES.padding * 1.5,
        paddingHorizontal : SIZES.padding * 1.5,
        backgroundColor : COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    pandaPay : {
        color : COLORS.black,
        ...FONTS.body2
    },
    subContainer : {
        paddingHorizontal : SIZES.padding * 1.5,
        paddingVertical : SIZES.padding * 1.5
    },
    addPaymentMethod : {
        borderColor : COLORS.black,
        width : "100%",
        height : 50,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        borderStyle : "dotted",
        borderWidth : 1,
        backgroundColor : COLORS.white,
        marginBottom : SIZES.padding
    },
    addPaymentMethodIcon : {
        fontSize : 30,
        color : COLORS.black70,
        position : "absolute",
        left : SIZES.padding * 2
    },
    addPaymentMethodText : {
        color : COLORS.black70,
        ...FONTS.body3
    },
    decorationText : {
        ...FONTS.body4,
        color : COLORS.black40,
        alignSelf : "center"
    },
    fourIconsContainer : {
        flexDirection : "row",
        width : "100%",
        justifyContent : "center"
    },
    fourIcons : {
        fontSize : 14,
        paddingHorizontal : SIZES.padding / 2,
        color : COLORS.darkgray
    }

})