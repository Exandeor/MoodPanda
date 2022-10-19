import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LogoComponent from './src/Components/LogoComponent';
import AuthProvider from './src/Providers/AuthProvider';
import Route from './src/Routes/Route';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';

function App(props) {
  useEffect(() => {
    SplashScreen.hide()
  },[])
  return (
    <AuthProvider>
      <Route/>
    </AuthProvider>
  );
}

export default App;