import React from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';

const Index = () => {
  const hasFingerprintSaved = LocalAuthentication.isEnrolledAsync();
  async function authenticate() {
    const result = await LocalAuthentication.authenticateAsync();
    if (result) console.log('Entrou');
  }
  return (
    <ImageBackground
      source={require('./src/assets/background-image.jpg')}
      style={styles.container}
    >
      <Image source={require('./src/assets/logo.png')} />
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      {/* <View style={styles.label}>
        <Icon name="email" size={40} color="#FFF" />
        <TextInput style={styles.input} placeholder="E-mail" />
      </View>
      <View style={styles.label}>
        <Icon name="lock" size={40} color="#FFF" />
        <TextInput style={styles.input} placeholder="Password" />
      </View> */}
      {hasFingerprintSaved ? (
        <TouchableOpacity onPress={authenticate}>
          <Icon name="fingerprint" color="#FFF" size={48} />
          <Text>Use your fingerprint/pin to login</Text>
        </TouchableOpacity>
      ) : (
        ''
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 36,
    paddingTop: 40 + Constants.statusBarHeight,
    filter: 
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 40,
  },
  label: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 24,
    fontSize: 16,
    height: 40,
    width: '80%',
  },
});

export default Index;
