/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { CalculatorScreen } from './screens/calculator.screen';
import { SafeAreaView } from 'react-native';
import { sharedStyles } from './assets/shared.styles';


const App = () => {
  return (
    <SafeAreaView style={[sharedStyles.container]}>
      <CalculatorScreen />
    </SafeAreaView>
  );
}

export default App;