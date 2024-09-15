/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { CalculatorScreen } from './presentations/screens/CalculatorScreen';
import { styles } from './presentations/themes/app-theme';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  return (
    <View style={ styles.background } >
      <CalculatorScreen/>

      
    </View>
  );
}

export default App;
