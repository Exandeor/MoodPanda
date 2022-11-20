import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View , StyleSheet, Image, ImageBackground, Text, StatusBar} from 'react-native';
import DefaultHeaderBarComponent from '../Components/DefaultHeaderBarComponent';
import RestaurantDetailsComponent from '../Components/RestaurantDetailsComponent';
import RestaurantItemsComponent from '../Components/RestaurantItemsComponent';
import { COLORS, SIZES } from '../Themes/Theme';

function RestaurantScreen(props) {
  const [hideBackground,setHideBackground] = useState(false);
  const route = useRoute();
  const {image} = route.params.item;

    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={!hideBackground? COLORS.transparent : COLORS.white}/>
        <DefaultHeaderBarComponent iconColor={COLORS.white} secondIcon={true} buttonStyle={styles.button} style={styles.header}/>
        <Image resizeMode="stretch" style={styles.image} source={image}/>
        <RestaurantItemsComponent hideBackground={hideBackground} setHideBackground={setHideBackground}/>
      </View>
    );
}

export default RestaurantScreen;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : COLORS.white
  },
  header : {
    position : "absolute",
    backgroundColor : COLORS.transparent,
    zIndex : 10,
    marginTop : StatusBar.currentHeight
  },
  button : {
    backgroundColor : COLORS.black40,
    borderRadius : SIZES.roundRadius
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