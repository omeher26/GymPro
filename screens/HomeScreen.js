import { View, Text, TouchableOpacity, Modal, StyleSheet,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigation } from '@react-navigation/native'



const HomeScreen = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    await signOut(auth);
  }


  return (
    
    <SafeAreaView >
        <Text style={{textAlign:'center',fontSize:30,}}>Home Screen</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={{fontSize:20,backgroundColor:'yellow',borderRadius:20,textAlign:'center'}}>LogOut</Text>
        </TouchableOpacity>

        <View>
        <TouchableOpacity style={{marginTop:200}} onPress={() => navigation.navigate('about')}>
          <Text style={{fontSize:20,backgroundColor:'yellow',borderRadius:20,textAlign:'center'}}>About</Text>
        </TouchableOpacity>
        </View>

    </SafeAreaView>


  )
}



export default HomeScreen



