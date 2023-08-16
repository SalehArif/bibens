import 'react-native-gesture-handler';
import React from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import Icon from 'react-native-vector-icons/Ionicons'
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

export default function App() {
  Icon.loadFont();
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}