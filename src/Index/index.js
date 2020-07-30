import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';

const Index = () => {
  const hasHardwareSupport = LocalAuthentication.hasHardwareAsync();
  const hasFingerprintSaved = LocalAuthentication.isEnrolledAsync();
  const { authStatus, setAuthStatus } = useState(false);

  function authenticate() {
    const result = LocalAuthentication.authenticateAsync({
      promptMessage: 'Use your fingerprint to login',
      disableDeviceFallback: true,
    });
    if (result.success) setAuthStatus(true);
  }
  return (
    <ImageBackground
      source={require('../assets/background-image.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <View style={styles.label}>
        <Icon name="email" size={40} color="#FFF" />
        <TextInput style={styles.input} placeholder="E-mail" />
      </View>
      <View style={styles.label}>
        <Icon name="lock" size={40} color="#FFF" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
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

export default Index;
