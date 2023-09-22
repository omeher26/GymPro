import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import {SafeAreaView} from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'


const SignUpScreen = () => {
  const navigation = useNavigation();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, SetPassword] = useState('');

  const handleSubmit = async () => {
    if(email && password){
      try{
        await createUserWithEmailAndPassword(auth,email,password)
      }catch (err) {
        console.log('got error : ', err.message);
      }
    }
  }

  return (
    <View style={{flex:1,backgroundColor:themeColors.bg}}>

      <SafeAreaView style={{flex:1}}>
        <StatusBar backgroundColor={themeColors.bg} />

        <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon style={styles.arrowA} />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center',marginTop:-18}}>
          <Image source={require('../assets/icons/signUpGym.png')} style={styles.png} />
        </View>
      </SafeAreaView>

      <View style={styles.login}>
        <View style={styles.form}>
          <Text style={styles.formtxt}>Full Name</Text>
          <TextInput placeholder='Enter Name' onChangeText={value => setName(value)} value={name} style={styles.formInp}/>

          <Text style={styles.formtxt}>Email Address</Text>
          <TextInput onChangeText={value => setEmail(value)} value={email} placeholder='Enter Email' style={styles.formInp}/>

          <Text style={styles.formtxt}>Password</Text>
          <TextInput placeholder='Enter Password' secureTextEntry onChangeText={value => SetPassword(value)} value={password} style={styles.formInp}/>

          <TouchableOpacity 
            style={styles.loginBtn}
            onPress={handleSubmit}
          >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={{fontSize:20,fontWeight:'bold',color:'#464545',textAlign:'center',marginTop:10}}>or</Text>

          <View style={{flexDirection:'row',justifyContent:'center',marginTop:3}}>
            <TouchableOpacity style={{backgroundColor:'#E1DFDF',borderRadius:10,margin:20}}>
              <Image source={require('../assets/icons/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#E1DFDF',borderRadius:10,margin:20}}>
              <Image source={require('../assets/icons/apple.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#E1DFDF',borderRadius:10,margin:20}}>
              <Image source={require('../assets/icons/facebook.png')} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{color:'#464545',fontWeight:'normal',fontSize:15}}>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{fontWeight:'bold',color:'#FED656'}}> Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  arrow:{
    backgroundColor:'#FED656',
    borderTopEndRadius:10,
    borderBottomLeftRadius:10,
    margin:5,
    marginLeft:8,
    padding:5,
  },
  arrowA:{
    fontWeight:'800',
    fontWeight:'bold',
    color:'black'
  },
  png: {
    height:140,
    width:170,
  },
  login:{
    flex:3,
    backgroundColor:'white',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    paddingTop:5,
  },
  form:{
    paddingHorizontal:25,
  },
  formtxt:{
    color:'#464545',
    marginLeft:20,
    marginTop:10,
    fontSize:15,
  },
  formInp:{
    marginTop:5,
    color:'#464545',
    backgroundColor:'#E1DFDF',
    paddingLeft:20,
    borderRadius:20,
    fontSize:15,
  },
  loginBtn:{
    backgroundColor:'#FED656',
    padding:8,
    marginTop:10,
    borderRadius:15,
  }
})

export default SignUpScreen
