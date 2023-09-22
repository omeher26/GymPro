import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

const DrawerLearn = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen}  />
        <Drawer.Screen name='about' component={About}  />
    </Drawer.Navigator>
  )
}

export default DrawerLearn


