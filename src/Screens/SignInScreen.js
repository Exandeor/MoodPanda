import React, { useContext } from 'react';
import { Keyboard, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FormButtonComponent from '../Components/FormButtonComponent';
import FormInputComponent from '../Components/FormInputComponent';
import LogoComponent from '../Components/LogoComponent';
import TwoTitlesComponent from '../Components/TwoTitlesComponent';
import { AuthContext } from '../Providers/AuthProvider';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function SignInScreen(props) {
    const {setAlreadylogin} = useContext(AuthContext)
    return (
        <Pressable onPress={()=>Keyboard.dismiss()} style={{flex : 1}}>
            <StatusBar translucent backgroundColor={COLORS.transparent}/>
            <LinearGradient start={{x:0,y:0}} end={{x:1,y:1}} colors={[COLORS.primary,COLORS.secondary]} style={styles.container}>
                <LogoComponent firstScale={2} secondScale={1.2} thirdScale={2}/>
                <View style={styles.subContainer}>
                    <TwoTitlesComponent/>
                    <View style={styles.formContainer}>
                        <FormInputComponent icon="person-outline" placeholder="User Name"/>
                        <FormInputComponent icon="key-outline" placeholder="Password"/>
                        <FormButtonComponent text="LOGIN" onPress={() => setAlreadylogin(true)}/>
                    </View>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")}><Text style={styles.footerText1}>Don't have an account?Sign Up Now</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.footerText2}>Forgot Password?</Text></TouchableOpacity>
                </View>
            </LinearGradient>
        </Pressable>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "coral",
        paddingTop : SIZES.padding * 5 + StatusBar.currentHeight,
        paddingHorizontal : SIZES.padding * 4
    },
    subContainer : {
        marginTop : SIZES.padding * 2
    },
    formContainer : {
        marginTop : SIZES.padding * 5,
        marginBottom : SIZES.padding * 3
    },
    footerText1 : {
        textAlign : "center",
        marginBottom : SIZES.padding * 10.5,
        color : COLORS.white,
        ...FONTS.body5
    },
    footerText2 : {
        textAlign : "center",
        color : COLORS.white,
        ...FONTS.body5
    }  
})