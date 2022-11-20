import React from 'react';
import { View ,StyleSheet, Text, StatusBar} from 'react-native';
import RecentActivityComponent from '../../Components/RecentActivityComponent';
import TwoCategoryComponent from '../../Components/TwoCategoryComponent';
import { COLORS, FONTS, SIZES } from '../../Themes/Theme';

function ActivityScreen(props) {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.myActivity}>My Activity</Text>
          </View>
          <TwoCategoryComponent/>
          <RecentActivityComponent/>
        </View>
    );
}

export default ActivityScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.white,
        paddingTop : StatusBar.currentHeight
    },
    header : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        paddingHorizontal : SIZES.padding,
        paddingVertical : SIZES.padding
    },
    myActivity : {
        ...FONTS.h1,
        color : COLORS.black
    },

})