import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import Header from '../components/home/Header';
import Bookmark from '../components/home/Bookmark';
import About from '../components/home/About';
import Stats from '../components/home/Stats';
import Amenities from '../components/home/Amenities';
import Address from '../components/home/Address';
import Extras from '../components/home/Extras';
import { colors } from '../styles/styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />

            <Header />

            <View>
                <Bookmark />
                <About />
                <Stats />
                <Amenities />
                <Address />
                <Extras />
            </View>
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
