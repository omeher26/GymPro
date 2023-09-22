import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomeScreen';
import useAuth from '../../hooks/useAuth';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import HomeScreen from '../../screens/HomeScreen';
// import DrawerNav from '../../screens/DrawerNav';

import DrawerLearn from '../../Drawer/DrawerLearn';
import About from '../../screens/About';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {user} = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="draLer">
          <Stack.Screen name='draLer' options={{headerShown:false}} component={DrawerLearn} />
          <Stack.Screen name='about' options={{headerShown:false}} component={About} />
          {/* <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={HomeScreen}
          /> */}
          {/* <Stack.Screen name='drawer nav' options={{headerShown:false}} component={DrawerNav} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            options={{headerShown: false}}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{headerShown: false}}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="Home" component={WelcomeScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};

export default AppNavigation;
