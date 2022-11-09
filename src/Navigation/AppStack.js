import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BottomTabBtnComponent from '../Components/BottomTabBtnComponent';
import { BottomTabData } from '../DummyData/NavigationData';


const Tab = createBottomTabNavigator();

function AppStack(props) {
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel : false,headerShown : false,tabBarStyle : {height : 60}}}>
          {
          BottomTabData.map((eachItem,index) => {
            return(
              <Tab.Screen 
                name={eachItem.screenName} 
                component={eachItem.component} 
                key={index.toString()}
                options={{
                  tabBarIcon : ({focused})=> <BottomTabBtnComponent icon={eachItem.icon} label={eachItem.label} focused={focused}/>
                }}
              />
            )
          })
        }
        </Tab.Navigator>
    );
}

export default AppStack;

