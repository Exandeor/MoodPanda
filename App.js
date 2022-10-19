import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LogoComponent from './src/Components/LogoComponent';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';

function App(props) {
  useEffect(() => {
    SplashScreen.hide()
  },[])
  return (
    <View style={{flex : 1}}>
      <SignInScreen/>
    </View>
  );
}

export default App;