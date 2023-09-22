import { View, Text,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator();
    // Home:{
    //     screen : AppNavigation
    // }
// });

const DrawerNav = () => {
  return (
    <View>
    {/* <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
            name = "Home"
            component={HomeScreen}
            options={{headerShown: true}}
        />
    </Drawer.Navigator> */}
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home' >
        <Drawer.Screen
            name = "Home"
            component={HomeScreen}
            options={{headerShown: true}}
        />
    </Drawer.Navigator>
    </NavigationContainer>


         {/* <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/icons/menuLines.png')}
              style={{width: 40, height: 30}}
            />
          </TouchableOpacity> */}
    </View>
  )
}

export default DrawerNav

// export default createAppContainer(Drawer)

