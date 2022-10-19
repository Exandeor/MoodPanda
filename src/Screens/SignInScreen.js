import React from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FormButton from '../Components/FormButton';
import FormInput from '../Components/FormInput';
import LogoComponent from '../Components/LogoComponent';
import TwoTitlesComponent from '../Components/TwoTitlesComponent';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function SignInScreen(props) {
    return (
        <Pressable onPress={()=>Keyboard.dismiss()} style={{flex : 1}}>
            <LinearGradient start={{x:0,y:0}} end={{x:1,y:1}} colors={[COLORS.primary,COLORS.secondary]} style={styles.container}>
                <LogoComponent firstScale={2} secondScale={1.2} thirdScale={2}/>
                <View style={styles.subContainer}>
                    <TwoTitlesComponent/>
                    <View style={styles.formContainer}>
                        <FormInput icon="person-outline" placeholder="User Name"/>
                        <FormInput icon="key-outline" placeholder="Password"/>
                        <FormButton text="LOGIN"/>
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
        paddingTop : SIZES.padding * 5,
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