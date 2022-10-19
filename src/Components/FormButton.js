import React from 'react';
import { Text,StyleSheet, Pressable, View} from 'react-native';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function FormButton(props) {
    return (
        <View style={styles.container}>
          <Pressable android_ripple={{color: COLORS.secondary}} style={styles.pressable}>
            <Text style={styles.text}>{props.text}</Text>   
          </Pressable>
        </View>
    );
}

export default FormButton;

const styles = StyleSheet.create({
    container : {
        borderRadius : SIZES.roundRadius,
        overflow : "hidden"
    },
    pressable : {
        backgroundColor : COLORS.white,
    },
    text : {
        height : 50,
        textAlign : "center",
        textAlignVertical : "center",
        ...FONTS.h4,
        color : COLORS.secondary
    }
})