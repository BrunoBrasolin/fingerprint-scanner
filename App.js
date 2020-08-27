import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as LocalAuthentication from 'expo-local-authentication';
import { PanGestureHandler } from 'react-native-gesture-handler';

const App = () => {
  const [result, setResult] = useState(false);
  async function authenticate() {
    setResult(await LocalAuthentication.authenticateAsync());
    if (result) {
      Alert.alert('Success', "You've successfully logged in", [
        {
          text: 'Ok!',
          onPress: () => {
            console.log('Ok!');
          },
        },
      ]);
      setResult(false);
    }
  }

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });
  if (!fontsLoaded)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#060610',
        }}
      >
        <Image source={require('./src/assets/loading.gif')} />
      </View>
    );
  return (
    <ImageBackground
      source={require('./assets/splash.png')}
      style={styles.content}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={require('./src/assets/logo.png')} />
      <View style={styles.container}>
        <Image
          style={styles.rectangle}
          source={require('./src/assets/rectangle.png')}
        />

        <Text style={styles.title}>Bruno, welcome back </Text>

        <TouchableOpacity style={styles.button} onPress={authenticate}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 80 + Constants.statusBarHeight,
  },
  container: {
    backgroundColor: 'rgba(0, 255, 255, 0.8)',
    width: '100%',
    justifyContent: 'space-between',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingHorizontal: 64,
    paddingVertical: 24,
    opacity: 1,
  },
  rectangle: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 40,
    fontFamily: 'Roboto_700Bold',
    fontSize: 32,
    color: '#fff',
  },
  button: {
    backgroundColor: 'rgb(255, 124, 216)',
    borderRadius: 32,
    alignItems: 'center',
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
    color: '#fff',
  },
});

export default App;
