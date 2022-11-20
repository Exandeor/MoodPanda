import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View ,StyleSheet, Text, Pressable, StatusBar, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';
import AddressBoxComponent from '../Components/AddressBoxComponent';
import OrderDetailsComponent from '../Components/OrderDetailsComponent';
import ButtonComponent from '../Components/ButtonComponent';

const Restaurant = () => {
  return(
    <View style={styles.restaurant}>
      <Image source={require("../DummyData/DummyImage/KFC.png")} style={styles.restaurantImage}/>
      <View style={{flex : 1,marginLeft:SIZES.padding}}>
        <View style={styles.layout}>
          <Text style={styles.restaurantHeaderText}>KFC(Waizayandar)</Text>
          <Text style={styles.restaurantBodyText}>Delivered</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Image style={styles.foodIcon1} source={require("../DummyData/DummyImage/burger.png")}/>
          <Image style={styles.foodIcon2} source={require("../DummyData/DummyImage/fries.png")}/>
          <Image style={styles.foodIcon3} source={require("../DummyData/DummyImage/thigh.png")}/>
        </View>
      </View>
    </View>
  )
}

function OrderSummaryScreen(props) {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.header}>
            <Pressable onPress={()=>navigation.goBack()} style={styles.headerButton}>
              <Ionicons name='ios-chevron-down-sharp' size={30} color={COLORS.darkgray}/>
            </Pressable>
            <Text style={styles.headerText}>20 OCT 2022 11:26 AM</Text>
          </View>
            <Restaurant/>
            <AddressBoxComponent style={styles.address}/>
            <OrderDetailsComponent/>
            <View style={styles.bottomContainer}>
              <Image style={styles.bottomImage} source={require("../Images/panda.png")}/>
              <ButtonComponent rippleColor={COLORS.black} style={styles.button}>
                <Text style={styles.buttonText}>Reorder</Text>
              </ButtonComponent>
            </View>
        </View>
      </View>
    );
}

export default OrderSummaryScreen;

const styles = StyleSheet.create({
    container : {
        paddingVertical : StatusBar.currentHeight,
        flex : 1,
        backgroundColor : COLORS.white
    },
    subContainer : {
      flex : 1,
      backgroundColor : COLORS.lightGray
    },
    header : {
        height : 60,
        backgroundColor : COLORS.white,
        alignItems : "center",
        justifyContent : "center",
        paddingHorizontal : SIZES.padding
    },
    headerButton : {
        position : "absolute",
        left : SIZES.padding
    },
    headerText : {
        ...FONTS.h4,
        color : COLORS.black
    },
    layout : {
      flexDirection : "row",
      justifyContent : "space-between",
      backgroundColor : COLORS.white,
      paddingVertical : SIZES.padding / 2
    },
    restaurant : {
        paddingHorizontal : SIZES.padding,
        paddingVertical : SIZES.padding,
        flexDirection : "row",
        backgroundColor : COLORS.white,
        marginVertical : SIZES.padding
    },
    restaurantImage : {
        width : 50,
        height : 50,
        borderRadius : SIZES.roundRadius
    },
    restaurantHeaderText : {
        ...FONTS.h4,
        color : COLORS.black
    },
    restaurantBodyText : {
        ...FONTS.body4,
        color : COLORS.online,
        top : 10
    },
    foodIcon1 : {
        width : 20,
        height : 20
    },
    foodIcon2 : {
        width : 20,
        height : 20
    },
    foodIcon3 : {
        width : 17,
        height : 17
    },
    address : {
      marginBottom : SIZES.padding
    },
    bottomContainer : {
      flex : 1,
      justifyContent:"flex-end",
      paddingVertical:SIZES.padding
    },
    bottomImage : {
      width : 150,
      height : 150,
      alignSelf : "center",
    },
    button : {
      height : 50,
      backgroundColor : COLORS.dodgerBlue,
      marginHorizontal : SIZES.padding,
      borderRadius : SIZES.radius / 2
    },
    buttonText : {
      ...FONTS.h3,
      color : COLORS.white
    }

})