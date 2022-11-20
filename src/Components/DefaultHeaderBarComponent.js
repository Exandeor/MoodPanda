import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View , StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';
import ButtonComponent from './ButtonComponent';

function DefaultHeaderBarComponent(props) {
    const navigation = useNavigation();
    return (
      <View style={[styles.container,props.style]}>
        <ButtonComponent onPress={()=>navigation.goBack()} rippleColor={COLORS.darkgray} style={[styles.button,props.buttonStyle]}>
          <Ionicons name='arrow-back' style={[styles.icon,{color:props.iconColor}]}/>
        </ButtonComponent>
        <Text style={styles.headerText}>{props.headerText}</Text>
        {props.secondIcon && <ButtonComponent onPress={props.onPressSecondButton} rippleColor={COLORS.darkgray} style={[styles.button,props.buttonStyle]}>
          <Ionicons name="heart-outline" style={[styles.secondIcon,{color:props.iconColor}]}/>
        </ButtonComponent>}
      </View>
    );
}

export default DefaultHeaderBarComponent;

const styles = StyleSheet.create({
    container :{
        width : "100%",
        height : 60,
        flexDirection : "row",
        backgroundColor : COLORS.white
    },
    button : {
        width : 40,
        height : 40,
        margin : SIZES.padding * 1,
        borderRadius : SIZES.roundRadius
    },
    icon : {
        fontSize : 25,
        color : COLORS.black
    },
    secondIcon : {
        fontSize : 20,
        color : COLORS.black,
    },
    headerText : {
        ...FONTS.h3,
        color : COLORS.black,
        alignSelf : "center",
        flex : 1
    }
})