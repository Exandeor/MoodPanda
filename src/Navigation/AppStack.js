import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RestaurantScreen from '../Screens/RestaurantScreen';
import RootHomeScreen from '../Screens/RootHomeScreen';
import AddPaymentMethodScreen from '../Screens/AddPaymentMethodScreen'
import { COLORS, FONTS } from '../Themes/Theme';
import FavouriteScreen from '../Screens/FavouriteScreen';
import SearchScreen from '../Screens/SearchScreen';
import OrderSummaryScreen from '../Screens/OrderSummaryScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';
import ReorderScreen from '../Screens/ReorderScreen';
import QRCodeScreen from '../Screens/QRCodeScreen';
import MapScreen from '../Screens/MapScreen';

const Stack = createNativeStackNavigator();

function AppStack(props) {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name='RootHomeScreen' component={RootHomeScreen}/>
          <Stack.Screen name='RestaurantScreen' component={RestaurantScreen} options={{animation : "fade"}}/>
          <Stack.Screen name='AddPaymentMethodScreen' component={AddPaymentMethodScreen}
            options={{
              animation :"slide_from_right",
              headerShown : true,
              headerTitle : "Add Card",
              headerTitleStyle : {...FONTS.h3,color:COLORS.black}
            }}
          />
          <Stack.Screen name='FavouriteScreen' component={FavouriteScreen}
            options={{
              headerShown : false,
              animation : "fade"
            }}
          />
          <Stack.Screen name='SearchScreen' component={SearchScreen}
            options={{
              headerShown : false,
              animation : "slide_from_bottom"
            }}
          />
          <Stack.Screen name='OrderSummaryScreen' component={OrderSummaryScreen}
            options={{
              headerShown : false,
              animation : "slide_from_bottom"
            }}
          />
          <Stack.Screen name='ReorderScreen' component={ReorderScreen}
            options={{
              headerShown : false,
              animation : "slide_from_bottom"
            }}
          />
          <Stack.Screen name='EditProfileScreen' component={EditProfileScreen}
            options={{
              headerShown : false,
              animation : "slide_from_right"
            }}
          />
          <Stack.Screen name='QRCodeScreen' component={QRCodeScreen}
            options={{
              headerShown : false
            }}
          />
          <Stack.Screen name='MapScreen' component={MapScreen}
            options={{
              headerShown : false
            }}
          />
        </Stack.Navigator>
    );
}

export default AppStack;

