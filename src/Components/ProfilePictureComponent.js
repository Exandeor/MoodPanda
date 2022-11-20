import React from 'react';
import { View, StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../Themes/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MateritalCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ProfilePictureComponent(props) {
    return (
        <View style={[styles.container,props.style]}>
          <View style={styles.profileIconContainer}>
            <Ionicons name='person' style={[styles.profileIcon,{fontSize:props.size}]}/>
          </View>
          <View style={styles.crownIconContainer}>
            <MateritalCommunityIcons name='crown' style={[styles.crownIcon,{fontSize:props.size * 0.25}]}/>
          </View>
        </View> 
    );
}

export default ProfilePictureComponent;

const styles = StyleSheet.create({
    container:{
    },
    profileIconContainer : {
        borderRadius : SIZES.roundRadius * 2,
        justifyContent : "center",
        alignItems : "center",
        borderColor : COLORS.primary,
        borderWidth : 3,
        backgroundColor : COLORS.white
    },
    profileIcon:  {
        fontSize: 80,
        color : COLORS.primary
    },
    crownIconContainer : {
        borderRadius : SIZES.roundRadius * 2,
        position: "absolute",
        bottom :0,
        right : 0,
        justifyContent : "center",
        alignItems : "center",
        borderColor : COLORS.primary,
        borderWidth : 3,
        backgroundColor : COLORS.primary
    },
    crownIcon:  {
        fontsize: 80 * 0.2,
        borderRadius: SIZES.roundRadius,
        color : COLORS.white
    }
})