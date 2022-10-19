import React from 'react';
import { View ,StyleSheet, Text, TouchableOpacity, Pressable, Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FormButton from '../Components/FormButton';
import FormInput from '../Components/FormInput';
import LogoComponent from '../Components/LogoComponent';
import TwoTitlesComponent from '../Components/TwoTitlesComponent';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function SignUpScreen(props) {
    return (
        <Pressable onPress={()=>Keyboard.dismiss()} style={{flex : 1}}>
        <LinearGradient start={{x:0,y:0}} end={{x:1,y:1}} colors={[COLORS.primary,COLORS.secondary]} style={styles.container}> 
                <View style={styles.brandContainer}>
                <LogoComponent firstScale={1} secondScale={0.6} thirdScale={1} style={styles.logoComponent}/>
                <TwoTitlesComponent style={styles.twoTitlesComponent}/>
                </View>
                <View style={styles.subContainer}>
                <View style={styles.textContainer}><Text style={styles.text}>SIGN UP</Text></View>
                <View style={styles.formContainer}>
                    <FormInput icon="person-outline" placeholder="User Name"/>
                    <FormInput icon="mail-outline" placeholder="Email Address"/>
                    <FormInput icon="key-outline" placeholder="Password"/>
                    <FormButton text="SIGN UP"/>
                </View>  
                <TouchableOpacity><Text style={styles.footerText1}>Don't have an account?Sign Up Now</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.footerText2}>Forgot Password?</Text></TouchableOpacity>
                

                </View>  
        </LinearGradient>
        </Pressable>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : SIZES.padding * 6,
        paddingHorizontal : SIZES.padding * 4
    },
    brandContainer : {
        justifyContent : "center",
        alignItems : "center"
    },
    logoComponent : {
        left : -140
    },
    twoTitlesComponent : {
        position : "absolute",  
    },
    subContainer : {
        paddingTop : SIZES.padding * 8

    },
    textContainer : {
        borderBottomColor : COLORS.white,
        borderBottomWidth : 1,
        alignSelf : "center",
        marginBottom : SIZES.padding * 8
    },
    text : {
        ...FONTS.body2,
        color : COLORS.white,
        textAlign : "center"
    },
    formContainer : {
        marginBottom : SIZES.padding * 2
    },
    footerText1 : {
        ...FONTS.body5,         
        color : COLORS.white,
        alignSelf : "center",
        marginBottom : SIZES.padding * 5,

    },
    footerText2 : {
        ...FONTS.body5,
        color : COLORS.white,
        alignSelf : "center"
    }
})