import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import RecentActivityComponent from '../../Components/RecentActivityComponent';
import TwoCategoryComponent from '../../Components/TwoCategoryComponent';
import { COLORS, FONTS, SIZES } from '../../Themes/Theme';

function ActivityScreen(props) {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.myActivity}>My Activity</Text>
            <Text style={styles.history}>History</Text>
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
        backgroundColor : COLORS.white
    },
    header : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        paddingHorizontal : SIZES.padding
    },
    myActivity : {
        ...FONTS.h1,
        color : COLORS.black
    },
    history : {
        ...FONTS.body4,
        color : COLORS.primary,
        bottom : 5
    },

})