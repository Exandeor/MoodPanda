import React from 'react';
import { Text, View ,StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../Themes/Theme';

function BubbleTextComponent(props) {
    return (
      <View style={[styles.container,props.style]}>
        <Text numberOfLines={1} style={styles.text}>{props.text}</Text>
      </View>
    );
}

export default BubbleTextComponent;

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : SIZES.padding * 2,
        backgroundColor : COLORS.lightGray,
        borderRadius : SIZES.roundRadius,
        justifyContent : "center",
        alignItems : "center",
        alignSelf:"flex-start",
        minWidth : 70,
    },
    text : {
      height:30,
      textAlignVertical:"center",
      color : COLORS.black,
      alignSelf:"flex-start"
    
    }
})