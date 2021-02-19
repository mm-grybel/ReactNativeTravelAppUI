import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Bookmark from '../components/Bookmark';
import { colors } from '../styles/styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <Header />
            <Bookmark />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});

export default HomeScreen;
