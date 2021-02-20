import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Navigator from './navigation/Navigator';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { colors } from './styles/styles';

class App extends React.Component {
  render () {
    return (
      <Navigator />
    );
  }
}

export default App;
