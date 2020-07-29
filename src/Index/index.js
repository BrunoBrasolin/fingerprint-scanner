import React from 'react';
import { Text, View, Input } from 'react-native';
import styles from './styles';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>
        Silvio Santos Ipsum Mah roda a roduamm. Ma não existem mulher feiam,
        existem mulher que não conhece os produtos Jequitiamm.
      </Text>
      <Icon name="fingerprint" size={48} />
    </View>
  );
};

export default Index;
