import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';


function NotificationItemComponent(props) {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name='pricetag' style={styles.icon}/>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text numberOfLines={1} style={styles.headerText}>Presents for you</Text>
            <Text style={styles.text}>Presents for you</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text>9:00 am</Text>
        </View>
      </View>
    );
}

export default NotificationItemComponent;

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        width : "100%",
        paddingVertical : SIZES.padding2
    },
    iconContainer : {

    },
    icon : {
        fontSize : 25,
        color : COLORS.primary,
        backgroundColor : COLORS.primaryHue,
        padding : SIZES.padding,
        borderRadius : SIZES.roundRadius
    },
    textContainer : {
        flex : 1,
        marginHorizontal : SIZES.padding
    },
    headerText : {
      ...FONTS.h4,
      color : COLORS.black
    },
    text : {
      ...FONTS.body5,
      color : COLORS.black40
    },
    timeContainer : {
    }
})