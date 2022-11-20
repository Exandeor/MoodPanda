import React, { useContext, useState } from 'react';
import { View, StyleSheet ,Image, Text, TextInput, Pressable } from 'react-native';
import { SIZES , FONTS, COLORS } from '../Themes/Theme';
import ButtonComponent from '../Components/ButtonComponent';
import ProfilePictureComponent from '../Components/ProfilePictureComponent';
import LinkedAccountsComponent from '../Components/LinkedAccountsComponent';
import LogoutAlertComponent from '../Components/LogoutAlertComponent';
import { AuthContext } from '../Providers/AuthProvider';
function EditProfileScreen(props) {
    const [firstSwitchValue,setFirstSwitchValue] = useState(false)
    const [secondSwitchValue,setSecondSwitchValue] = useState(false)
    const [showAlert,setShowAlert] = useState(false)
    const {setAlreadylogin} = useContext(AuthContext);
    return (
        <View style={styles.container}>
          {showAlert && 
            <LogoutAlertComponent
              onPressFirstButton={() => setShowAlert(false)}
              onPressSecondButton={()=> setAlreadylogin(false)}
              onPressCancel={() => setShowAlert(false)}
            />
        }
          <Image style={styles.backgroundImage} resizeMode="stretch" source={require("../Images/profileBackground.png")}/>
          <View style={styles.subContainer}>
            <ProfilePictureComponent size={80} style={styles.profilePicture}/>
            <Text style={styles.pointsText}>64 Points | Rewards Member</Text>
        
            {/* Personal Details */}
            <View style={styles.inputField}>
              <Text style={styles.inputHeader}>Name</Text>
              <TextInput textAlignVertical="bottom" style={styles.input}/>
              <Text style={styles.inputHeader}>Mobile Number</Text>
              <TextInput keyboardType='numeric' textAlignVertical="bottom" style={styles.input}/>
              <Text style={styles.inputHeader}>Enter your email address</Text>
              <TextInput textAlignVertical="bottom" style={styles.input}/>
            </View>
            <ButtonComponent rippleColor={COLORS.black} style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </ButtonComponent>
        
            { /* Linked Accounts */}
            <LinkedAccountsComponent 
              style={styles.linkedAccounts}
              firstSwitchValue={firstSwitchValue}
              secondSwitchValue={secondSwitchValue}
              firstSwitchUpdate={setFirstSwitchValue}
              secondSwitchUpdate={setSecondSwitchValue}
            />
            <Pressable onPress={()=>setShowAlert(true)} android_ripple={{color:COLORS.darkgray}} style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Log Out</Text>
            </Pressable>
            <Text style={styles.copyright}>@ Powered by MoodPanda 2022</Text>
          </View>
      </View>
        
        
        //.........................................
       
    );
}

export default EditProfileScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:COLORS.white
    },
    mirrorHeader:  {
        position :  "absolute",
    },
    backgroundImage : {
        width:"100%",
        height:  170
    },
    subContainer:  {
        flex : 1,
        top: -45,
        backgroundColor:COLORS.transparent
    },
    profilePicture:  {
        alignSelf:  "center"
    },
    pointsText:{
        alignSelf:  "center",
        ...FONTS.body5,
        color:  COLORS.black70,
        marginTop : SIZES.padding
    },
    inputField:{
        paddingHorizontal:SIZES.padding * 4
    },
    inputHeader:  {
        ...FONTS.body4,
        color: COLORS.black40,
        marginTop: SIZES.padding * 2
    },
    input: {
        ...FONTS.body3,
        color: COLORS.black70,
        paddingTop: 0,
        paddingBottom:0,
        paddingHorizontal : 0,
        borderBottomColor : COLORS.black10,
        borderBottomWidth : 1
    },
    button:  {
        height:50,
        marginHorizontal: SIZES.padding * 4,
        marginVertical : SIZES.padding * 2,
        backgroundColor: COLORS.primary,
        borderRadius:SIZES.radius / 2
    },
    buttonText:  {
        ...FONTS.h3,
        color:COLORS.white
    },
    logoutButton : {
        height : 50,
        justifyContent : "center",
        alignItems : "center",
        marginTop : 10,
        marginHorizontal : SIZES.padding * 2
    },
    logoutButtonText : {
        ...FONTS.h4,
        color : COLORS.black
    },
    copyright : {
        ...FONTS.body5,
        alignSelf : "center",
        color : COLORS.black40
    }
})