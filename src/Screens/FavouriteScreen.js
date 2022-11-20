import React from 'react';
import { View ,StyleSheet, StatusBar } from 'react-native';
import DefaultHeaderBarComponent from '../Components/DefaultHeaderBarComponent';
import VerticalListComponent from '../Components/VerticalListComponent';
import { COLORS, SIZES } from '../Themes/Theme';

function FavouriteScreen(props) {
    return (
      <View style={styles.container}>
        <View style={{flex:1,backgroundColor : COLORS.lightGray}}>
          <DefaultHeaderBarComponent iconColor={COLORS.black} headerText="Favourite Restaurants"/>
          <VerticalListComponent style={styles.list}/>
        </View>
      </View>
    );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingVertical : StatusBar.currentHeight,
        backgroundColor : COLORS.white
    },
    list : {
      marginTop : SIZES.padding / 6,
      backgroundColor : COLORS.white
    }
})