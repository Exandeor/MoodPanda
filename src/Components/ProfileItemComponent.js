import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function ProfileItemComponent(props) {
    return (
        
        <Pressable onPress={()=>alert("Unavailable")} style={styles.container} android_ripple={{color : COLORS.darkgray}}>
          <View style={styles.subContainer}>
            <Text style={styles.text}>{props.text}</Text>
            <Ionicons name="chevron-forward-outline" size={15} color={COLORS.black40}/>
          </View>
        </Pressable>
    );
}

export default ProfileItemComponent;

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : SIZES.padding * 2
    },
    subContainer : {
        width : "100%",
        height : 60,
        borderBottomColor : COLORS.black10,
        borderBottomWidth : 1,
        flexDirection : "row",
        alignItems : "center",
        paddingEnd : SIZES.padding,
    },
    text : {
        flex : 1,
        color : COLORS.black70,
        ...FONTS.body4
    }
})