import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Profile';
import TabNavigatior from '../Navigation/TabNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigatior}></Drawer.Screen>
            <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;