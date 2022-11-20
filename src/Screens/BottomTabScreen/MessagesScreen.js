import React from 'react';
import { View ,StyleSheet, Text, StatusBar} from 'react-native';
import NotificationItemComponent from '../../Components/NotificationItemComponent';
import { COLORS, FONTS, SIZES } from '../../Themes/Theme';

function MessagesScreen(props) {
    return (
        <View style={styles.container}>
          <View style={styles.header}><Text style={styles.messages}>Messages</Text></View>
          <View style={styles.twoCategories}>
            <View style={styles.categoryTextContainer}><Text style={styles.categoryText}>Chats</Text></View>
            <View style={styles.categoryTextContainer}><Text style={styles.categoryText}>Notifications</Text></View>
          </View>
          <NotificationItemComponent/>
        </View>
    );
}

export default MessagesScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.white,
        paddingHorizontal : SIZES.padding * 2,
        paddingTop : StatusBar.currentHeight
    },
    header : {
        width : "100%",
        height : 70,
        justifyContent : "center"
    },
    messages : {
        color : COLORS.black,
        ...FONTS.h2
    },
    twoCategories : {
        flexDirection : "row",
        alignSelf : "center",
        marginBottom : SIZES.padding2
    },
    categoryTextContainer : {
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : COLORS.primary,
        paddingVertical : SIZES.padding,
        borderRadius : SIZES.roundRadius,
        marginHorizontal : SIZES.padding / 4,
        width : 165,
        height : 35
    },
    categoryText : {
        ...FONTS.body4,
        lineHeight : 17,
        color : COLORS.white
    }
})