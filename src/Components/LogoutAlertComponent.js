import React from 'react';
import { View ,StyleSheet, Text, Modal, Pressable} from 'react-native';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function LogoutAlertComponent(props) {

    return (
        <Modal transparent={true} animationType={"fade"} statusBarTranslucent={true}>
          <Pressable onPress={props.onPressCancel} style={styles.container}>
            <View style={styles.subContainer}>
              <Text style={styles.headerText}>Confirmation</Text>
              <Text style={styles.bodyText}>Are you sure you want to logout?</Text>
              <View style={styles.twoButtonsContainer}>
                <View style={styles.pressableOverflowPreventer}>
                  <Pressable android_ripple={{color:COLORS.darkgray}} onPress={props.onPressFirstButton} style={styles.button1}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </Pressable>
                </View>
                <View style={styles.pressableOverflowPreventer}>
                  <Pressable android_ripple={{color:COLORS.secPrimary}} onPress={props.onPressSecondButton} style={styles.button2}>
                    <Text style={styles.buttonText}>Confirm</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Pressable>
        </Modal>
    );
}

export default LogoutAlertComponent;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : COLORS.black70,
    justifyContent : "center",
    alignItems : "center"
  },
  subContainer : {
    width : SIZES.width * 0.85,
    height : 160,
    backgroundColor : COLORS.white,
    borderRadius : SIZES.radius,
    paddingHorizontal : SIZES.padding2,
    paddingTop : SIZES.padding,
    paddingBottom : SIZES.padding
  },
  headerText : {
    borderBottomColor : COLORS.black20,
    borderBottomWidth : 1,
    height : 50,
    textAlignVertical : "center",
    lineHeight : 25,
    ...FONTS.h3,
    color : COLORS.black
  },
  bodyText : {
    marginVertical : SIZES.padding2,
    ...FONTS.body3,
    color : COLORS.black
  },
  twoButtonsContainer : {
    flex : 1,
    backgroundColor : "white",
    flexDirection : "row",
    justifyContent : "space-around"
  },
  pressableOverflowPreventer : {
    width:"38%",
    height:"100%",
    overflow:"hidden",
    borderRadius:SIZES.radius/2
  },
  button1 : {
    flex : 1,
    backgroundColor : COLORS.darkgray,
    justifyContent : "center",
    alignItems : "center",
    borderRadius : SIZES.radius / 2
  },
  button2 : {
    flex : 1,
    backgroundColor : COLORS.primary,
    justifyContent : "center",
    alignItems : "center",
    borderRadius : SIZES.radius / 2
  },
  buttonText : {
    color : COLORS.white,
    ...FONTS.body4
  }
})