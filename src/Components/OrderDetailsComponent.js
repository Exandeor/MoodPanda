import React from 'react';
import { Text, View , StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS, SIZES , FONTS } from '../Themes/Theme';

const StandardText = (props) => {
    return <Text style={{...FONTS.body4,color:COLORS.black70}}>{props.children}</Text>
}

function OrderDetailsComponent(props) {
    return (
        <View>
            <View style={styles.header}>
              <Text style={styles.orderSummaryText}>Order Summary</Text>
              <Text style={styles.reorderText}>Price</Text>
            </View>
            <View style={styles.orderedItem}>
              <Text style={styles.amount}>1x</Text>
              <Text style={styles.orderName}>
                Fried Chicken(Half Pack)
              </Text>
              <StandardText>8,300.00</StandardText>
            </View>

            <View style={styles.calculationBody}>
                <View style={styles.subTotal}>
                  <StandardText>Subtotal</StandardText>
                  <StandardText>Ks 8,300.00</StandardText>
                </View>
                <View style={styles.deliveryFee}>
                  <StandardText>Delivery Fee</StandardText>
                  <StandardText>1,000.00</StandardText>
                </View>
                <View style={styles.total}>
                  <StandardText>Total</StandardText>
                  <View style={{flex:1,paddingHorizontal:SIZES.padding}}>
                      <FontAwesome5 name='money-bill' style={styles.moneyIcon}/>
                  </View>
                  <StandardText>Ks 7,470.00</StandardText>
                </View>
            </View>
        </View>
    );
}

export default OrderDetailsComponent;

const styles = StyleSheet.create({
    orderSummaryText : {
      paddingVertical : SIZES.padding,
      ...FONTS.h5,
      color : COLORS.black
    },
    reorderText : {
      paddingVertical : SIZES.padding,
      ...FONTS.h5,
      color : COLORS.dodgerBlue
    },
    header : {
      flexDirection : "row",
      justifyContent : "space-between",
      backgroundColor : COLORS.white,
      paddingHorizontal : SIZES.padding2,
      paddingVertical : SIZES.padding / 2
    },
    orderedItem : {
      flexDirection : "row",
      justifyContent : "space-between",
      backgroundColor : COLORS.white,
      paddingHorizontal : SIZES.padding2,
      paddingVertical : SIZES.padding
    },
    amount : {
        ...FONTS.h5,
        color : COLORS.black
    },
    orderName : {
        flex:1,
        marginHorizontal:SIZES.padding,
        ...FONTS.body4,
        color : COLORS.black70
    },
    calculationBody : {
      marginTop : SIZES.padding,
      paddingVertical : SIZES.padding * 2,
      backgroundColor : COLORS.white
    },
    subTotal : {
      flexDirection : "row",
      justifyContent : "space-between",
      backgroundColor : COLORS.white,
      paddingHorizontal : SIZES.padding2,
    },
    deliveryFee : {
      flexDirection : "row",
      justifyContent : "space-between",
      backgroundColor : COLORS.white,
      paddingHorizontal : SIZES.padding2,
    },
    total : {
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingTop: SIZES.padding * 2,
      marginHorizontal : SIZES.padding2,
      marginTop : SIZES.padding,
      borderTopColor : COLORS.black10,
      borderTopWidth : 1
    },
    totalText : {
        ...FONTS.body4,
        color : COLORS.black70
    },
    totalPrice : {
        ...FONTS.body4,
        color : COLORS.black70
    },
    moneyIcon : {
        alignSelf : "flex-end",
        fontSize : 18,
        color : COLORS.darkgray
    }

})