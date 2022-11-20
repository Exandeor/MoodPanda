import React from 'react';
import { View ,StyleSheet, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function ProfileComponent(props) {
    return (
          <Pressable onPress={props.onPress} style={styles.container}>
            <Ionicons name='person-circle-outline' style={styles.profileIcon}/>
            <View>
                <Text style={styles.userName}>Aung Aung Oo</Text>
                <View style={{flexDirection : "row",alignItems : "center"}}>
                <Text style={styles.editProfile}>Edit Profile</Text>
                <Ionicons name='chevron-forward-outline' color={COLORS.black40} size={14}/>
                </View>
            </View>
          </Pressable>     
  
    );
}

export default ProfileComponent;

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : 120,
        flexDirection : "row",
        alignItems : "center"
    },
    profileIcon : {
        fontSize : 100,
        color : COLORS.primary,
        marginEnd : SIZES.padding / 2
    },
    userName : {
        ...FONTS.h3,
        color : COLORS.black
    },
    editProfile : {
        ...FONTS.body4,
        color : COLORS.black40,
        marginEnd : SIZES.padding
    }
})