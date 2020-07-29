import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './Index';

const AppStack = createStackNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Index" component={Index} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
