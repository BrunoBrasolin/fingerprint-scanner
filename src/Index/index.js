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
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const hasHardwareSupport = LocalAuthentication.hasHardwareAsync();
  const hasFingerprintSaved = LocalAuthentication.isEnrolledAsync();
  const navigation = useNavigation();
  async function authenticate() {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) navigation.navigate('Home');
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
