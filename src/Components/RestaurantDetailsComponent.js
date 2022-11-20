import React from 'react';
import { View , StyleSheet, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function RestaurantDetailsComponent(props) {
  const item = props.item;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={styles.headerText}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name='star' color={COLORS.gold} size={20}/>
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
          <View style={styles.threeFoodIcons}>
            <Image source={require("../DummyData/DummyImage/burger.png")} resizeMode='center' style={styles.foodIcon1}/>
            <Image source={require("../DummyData/DummyImage/fries.png")} resizeMode='center' style={styles.foodIcon2}/>
            <Image source={require("../DummyData/DummyImage/thigh.png")} resizeMode='center' style={styles.foodIcon3}/>
          </View>
        </View>
        <View style={styles.distanceContainer}>
          <Image source={require("../Images/panda.png")} resizeMode='center' style={styles.deliveryImage}/>
          <View style={styles.distanceTextContainer}>
            <Text style={styles.distantHeaderText}><Text style={styles.km}>{item.details}</Text></Text>
            <Text style={styles.deliverNow}>Deliver Now</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={15} color={COLORS.black40}/>
        </View>
        <View style={styles.offers}>
          <Ionicons name="pricetag-outline" style={styles.offersIcon}/>
          <Text style={styles.offersBodyText}>Check for available offers</Text>
          <Ionicons name="chevron-forward-outline" size={15} color={COLORS.black40}/>
        </View>
      </View>
    );
}

export default RestaurantDetailsComponent;

const styles = StyleSheet.create({
    container : {
      width : SIZES.width * 0.9,
      backgroundColor : COLORS.white,
      marginTop : 250,
      marginBottom : 10,
      alignSelf : "center",
      borderRadius : SIZES.radius,
      paddingTop : SIZES.padding2,
      paddingHorizontal : SIZES.padding * 2,
      borderColor : COLORS.black20,
      borderWidth : 1
      
    },
    titleContainer : {
    },
    headerText : {
        ...FONTS.h1,
        width : "80%",
        color : COLORS.black
    },
    ratingContainer : {
        flexDirection : "row",
        paddingBottom : SIZES.padding,
        paddingLeft : "5%"
    },
    rating : {
        ...FONTS.h4,
        color : COLORS.black,
        marginStart : 5
    },
    threeFoodIcons : {
        flexDirection : "row",
        marginLeft : 10,
        top  : -10
    },
    foodIcon1 : {
        width : 40,
        height : 50,
        left : -20
    
    },
    foodIcon2 : {
        width : 50,
        height : 50,
        left : -35
    },
    foodIcon3 : {
        width : 30,
        height : 50,
        left : -45
    },
    distanceContainer : {
        flexDirection : "row",
        alignItems : "center",
        paddingVertical : SIZES.padding2,
        borderTopColor : COLORS.black10,
        borderTopWidth : 1,
        borderBottomColor : COLORS.black10,
        borderBottomWidth : 1
    },
    distantHeaderText : {
      ...FONTS.body4,
      color : COLORS.darkgray
    },
    km : {
      ...FONTS.body4,
      color : COLORS.black
    },
    deliverNow : {
      ...FONTS.body5,
      color : COLORS.darkgray
    },
    deliveryImage : {
        width : 30,
        height : 30
    },
    distanceTextContainer : {
        flex : 1,
        paddingHorizontal : SIZES.padding,
    },
    offers : {
      flexDirection : 'row',
      alignItems : "center",
      paddingVertical : SIZES.padding * 2
    },
    offersIcon : {
      fontSize : 20,
      color : COLORS.primary
    },
    offersBodyText : {
      flex : 1,
      paddingHorizontal : SIZES.padding * 2,
      ...FONTS.body4,
      color : COLORS.black
    }
})