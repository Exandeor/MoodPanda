import React, { useEffect } from 'react';
import { View ,StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Keyboard} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS, SIZES} from '../Themes/Theme'
function AddPaymentMethodScreen(props) {
  useEffect(() => {
    Keyboard.addListener("keyboardWillShow")
  },[])
    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Card Number</Text>
          <View style={{flexDirection : "row",alignItems : "center"}}>
            <Ionicons name='card-outline' size={25} color={COLORS.black30}/>
            <TextInput autoFocus={true} keyboardType="numeric" style={styles.cardNoInput} placeholder="Card Number" placeholderTextColor={COLORS.black30}/>
          </View>
          <View style={{flexDirection : "row"}}>
            <View style={{flex : 1,marginRight : 10}}>
              <Text style={styles.twinHeaderTexts}>Expiry date</Text>
              <TextInput keyboardType="numeric" placeholder='MM/YY' textAlignVertical="bottom" placeholderTextColor={COLORS.black30} style={styles.twinTextInputs}/>
              <TouchableOpacity style={styles.exclamationMark}><FontAwesome name='exclamation-circle' size={15} color={COLORS.black30}/></TouchableOpacity>
            </View>
            <View style={{flex : 1}}>
              <Text style={styles.twinHeaderTexts}>CVV</Text>
              <TextInput keyboardType="numeric" placeholder='CVV' textAlignVertical="bottom" placeholderTextColor={COLORS.black30} style={styles.twinTextInputs}/>
              <TouchableOpacity style={styles.exclamationMark}><FontAwesome name='exclamation-circle' size={15} color={COLORS.black30}/></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.notice}>First card will be your primary card</Text>
          <View style={styles.floatContainer}>
            <Text style={styles.explanation}>Your card may be charged to make sure it's valid.That amount will be automatically refunded.</Text>
            <Text style={styles.explanation}>
              By adding a card,
              you have read and agree to our 
                <Text onPress={()=>alert("a")} style={{color:COLORS.dodgerBlue}}> terms and conditions</Text>.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

    );
}

export default AddPaymentMethodScreen;

const styles = StyleSheet.create({
    container : {
      flex : 1,
      paddingHorizontal : SIZES.padding * 2,
      backgroundColor : COLORS.white
    },
    headerText : {
      ...FONTS.h4,
      color : COLORS.black70,
      paddingTop : SIZES.padding * 2,
      paddingBottom : SIZES.padding
    },
    cardNoInput : {
      width : "100%",
      height : 60,
      padding : SIZES.padding,
      ...FONTS.h4,
      color : COLORS.black
      
    },
    twinHeaderTexts : {
      color : COLORS.black70,
      ...FONTS.h4,
      marginBottom : SIZES.padding * 3,
      marginTop : SIZES.padding
    },
    exclamationMark : {
      position : "absolute",
      bottom : 10,
      right : 0
    },
    twinTextInputs : {
      borderBottomColor : COLORS.black20,
      borderBottomWidth : 1,
      textAlignVertical : 'bottom',
      paddingTop : 0,
      paddingBottom : 5,
      ...FONTS.body3,
      color : COLORS.black
    },
    notice : {
      ...FONTS.body4,
      marginVertical : SIZES.padding * 4,
      color : COLORS.black70
    },
    floatContainer : {
      position : "absolute",
      alignSelf : "center",
      bottom : 10
    },
    explanation : {
      ...FONTS.body5,
      color : COLORS.black70,
      marginBottom : SIZES.padding * 2
    },
    button : {
      width : "100%",
      height : 50,
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : COLORS.black20,
      borderRadius : SIZES.radius / 2,

    },
    buttonText : {
      ...FONTS.h3,
      color : COLORS.black40
    }
})