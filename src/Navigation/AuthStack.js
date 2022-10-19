import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignUpScreen from '../Screens/SignUpScreen'
import SignInScreen from '../Screens/SignInScreen'


const Stack = createNativeStackNavigator();

function AuthStack(props) {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
            <Stack.Screen name='SignIn' component={SignInScreen}/>
        </Stack.Navigator>

    );
}

export default AuthStack;