import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View , StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';
import ButtonComponent from './ButtonComponent';

function DefaultHeaderBarComponent(props) {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <ButtonComponent onPress={()=>navigation.goBack()} rippleColor={COLORS.darkgray} style={styles.button}>
          <Ionicons name='arrow-back' size={25} color={COLORS.black}/>
        </ButtonComponent>
        <Text style={styles.headerText}>{props.headerText}</Text>
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
        width : 50,
        height : "100%",
        borderRadius : SIZES.roundRadius
    },
    headerText : {
        ...FONTS.h3,
        color : COLORS.black,
        alignSelf : "center"
    }
})