/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class
 * @summary Classe base per a iniciar una app en React Native
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Hola Manel</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
