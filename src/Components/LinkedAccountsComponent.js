import React from 'react';
import { View, StyleSheet ,Image, Text, Switch } from 'react-native';
import { SIZES, FONTS, COLORS } from '../Themes/Theme';

function LinkedAccountsComponent(props) {
    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Linked Accounts</Text>
          <View style={styles.box}>
            <Image source={require("../Images/facebook-logo.png")} style={styles.boxImage}/>
            <Text style={styles.boxText}>Facebook</Text>
            <Switch value={props.firstSwitchValue} onValueChange={props.firstSwitchUpdate}/>
          </View>
          <View style={styles.box}>
            <Image source={require("../Images/google-logo.png")} style={styles.boxImage}/>
            <Text style={styles.boxText}>Google</Text>
            <Switch value={props.secondSwitchValue} onValueChange={props.secondSwitchUpdate}/>
          </View>
        </View>

    );
}

export default LinkedAccountsComponent;

const styles = StyleSheet.create({
    headerText:{
        ...FONTS.h4,
        color:COLORS.black70,
        marginVertical:SIZES.padding,
        marginHorizontal : SIZES.padding * 2
    },    
    box:{
        flexDirection:"row",
        justifyContent:  "space-between",
        alignItems:  "center",
        backgroundColor : COLORS.white,
        paddingVertical : SIZES.padding,
        paddingHorizontal : SIZES.padding * 2,
        borderBottomColor : COLORS.black10,
        borderBottomWidth : 1,
        marginBottom : 1
    },
    boxImage:  {
        width:  30,
        height: 30,
        borderRadius : SIZES.roundRadius
    },
    boxText:  {
        flex:  1,
        marginHorizontal:  SIZES.padding,
        ...FONTS.body3,
        color : COLORS.black70
    }
})