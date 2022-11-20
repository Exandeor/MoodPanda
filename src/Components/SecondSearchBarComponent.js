import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';
import ButtonComponent from './ButtonComponent';

function SecondSearchBarComponent(props) {
    return (
      <View style={styles.container}>
        <ButtonComponent onPress={props.onPress} rippleColor={COLORS.white} style={styles.button}>
          <Ionicons name='arrow-back' size={25} color={COLORS.black}/>
        </ButtonComponent>
        <View style={styles.inputContainer}>
          <Ionicons name='search' size={20} color={COLORS.darkgray}/>
          <TextInput placeholder='What are you craving?' textAlignVertical='bottom' placeholderTextColor={COLORS.darkgray} style={styles.input}/>
        </View>
      </View>
    );
}

export default SecondSearchBarComponent;

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : 60,
        backgroundColor : "white",
        flexDirection : "row"
    },
    button : {
        width : 50,
        height : "100%"
    },
    inputContainer : {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor : COLORS.lightGray,
        marginVertical : SIZES.padding,
        paddingLeft : SIZES.padding,
        marginEnd : SIZES.padding,
        borderRadius : SIZES.radius / 2,
    },
    input : {
        ...FONTS.body4,
        paddingTop : 0,
        paddingBottom : 0,
        flex : 1
        
    }
})