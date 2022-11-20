import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View ,StyleSheet, Text, FlatList, Image, ScrollView, Pressable} from 'react-native';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';
import RestaurantDetailsComponent from './RestaurantDetailsComponent';

function RestaurantItemsComponent(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const item = route.params.item;
  const {image} = item;
    return (
      <View style={[styles.container,{backgroundColor:props.hideBackground?COLORS.white:COLORS.transparent}]}>
        <FlatList
          data={[1,1,1,1,1,1,1,1,1]}
          style={{backgroundColor : COLORS.transparent}}
          ListHeaderComponent={()=> <RestaurantDetailsComponent item={item}/>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_,index)=>index}
          onScroll={e => e.nativeEvent.contentOffset.y > 100? props.setHideBackground(true) : props.setHideBackground(false)}
          renderItem={({item}) => {
            return(
              <Pressable onPress={()=>navigation.navigate("OrderSummaryScreen")} style={styles.renderItemContainer}>
                <View style={styles.detailsContainer}>
                  <Text style={styles.foodName}>Fried Chicken Full Pack</Text>
                  <Text style={styles.foodPrice}>9300.00</Text>
                  <Text style={styles.foodStatus}>available</Text>
                </View>
                <Image source={image} style={styles.image} resizeMode="stretch"/>
              </Pressable>
            )
          }}
        />
      </View>
    );
}

export default RestaurantItemsComponent;

const styles = StyleSheet.create({
    container : {
      flex : 1,
      paddingHorizontal : SIZES.padding * 2
    },
    headerText : {
      ...FONTS.h4,
      marginVertical : SIZES.padding2,
      color : COLORS.black
    },
    renderItemContainer : {
      flexDirection : "row",
      paddingVertical : SIZES.padding2,
      borderBottomColor  : COLORS.black20,
      borderBottomWidth : 1,
      backgroundColor : COLORS.white
    },
    detailsContainer : {
      flex : 1
    },
    foodName : {
      ...FONTS.body3,
      color : COLORS.black70,
      paddingVertical : SIZES.padding / 2
    },
    foodPrice : {
      ...FONTS.h5,
      color : COLORS.black
    },
    foodStatus : {
      ...FONTS.body5,
      color : COLORS.darkgray,
      paddingVertical : SIZES.padding / 2
    },
    image : {
      width : 90,
      height : 90,
      backgroundColor : COLORS.primary
    }
})