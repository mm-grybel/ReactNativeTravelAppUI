import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import { colors } from './styles/styles';

class App extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <HomeScreen />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  }
});

export default App;
