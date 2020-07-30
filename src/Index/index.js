import React from 'react';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import styles from './styles';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';

const Index = () => {
  const hardware = LocalAuthentication.hasHardwareAsync();
  return (
    <ImageBackground
      source={require('../assets/background-image.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        {hardware}
      </Text>
      <View style={styles.label}>
        <Icon name="email" size={40} color="#FFF" />
        <TextInput style={styles.input} placeholder="E-mail" />
      </View>
      <View style={styles.label}>
        <Icon name="lock" size={40} color="#FFF" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <Icon name="fingerprint" size={48} />
    </ImageBackground>
  );
};

export default Index;
