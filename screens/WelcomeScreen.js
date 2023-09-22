import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: themeColors.bg, flex: 1}}>
      <StatusBar backgroundColor={themeColors.bg} />
      <View
        style={{flex: 1,justifyContent: 'space-around',marginHorizontal: 'auto'}}>
        <Text style={styles.font}>Let's Get Started!</Text>
        <View>
          <Image
            source={require('../assets/icons/pngegg.png')}
            style={styles.png}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.btn}>
            <Text style={styles.btntxt}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'normal', fontSize: 15}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{fontWeight: 'bold', color: '#FED656', fontSize: 15}}>
                {' '}
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  font: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  png: {
    height: 180,
    width: 270,
    justifyContent: 'center',
    marginLeft: 50,
  },
  btn: {
    backgroundColor: '#FED656',
    marginHorizontal: 12,
    borderRadius: 8,
    paddingVertical: 8,
    marginVertical: 8,
  },
  btntxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
