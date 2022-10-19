import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import AppStack from '../Navigation/AppStack';
import AuthStack from '../Navigation/AuthStack';
import { AuthContext } from '../Providers/AuthProvider';

function Route(props) {
    const {alreadyLogin} = useContext(AuthContext);

    return (
        <NavigationContainer>
        {
          alreadyLogin? (<AppStack/>) : (<AuthStack/>)    
        }
        </NavigationContainer>
    );
}

export default Route;