import React from 'react';
import { View , StyleSheet, Image, ImageBackground, Text, StatusBar} from 'react-native';
import RestaurantDetailsComponent from '../Components/RestaurantDetailsComponent';
import RestaurantItemsComponent from '../Components/RestaurantItemsComponent';
import { COLORS, SIZES } from '../Themes/Theme';

function RestaurantScreen(props) {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={COLORS.transparent}/>
        <Image resizeMode="stretch" style={styles.image} source={require("../DummyData/DummyImage/KFC.png")}/>
          <RestaurantItemsComponent/>
      </View>
    );
}

export default RestaurantScreen;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : COLORS.white
  },
  image : {
    width  : SIZES.width,
    height : 300,
    position : "absolute"
  },
  subContainer : {
    flex : 1
  },
})