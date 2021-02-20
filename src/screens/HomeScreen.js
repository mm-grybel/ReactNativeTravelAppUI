import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/navigation/CustomHeaderButton';
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
        <ScrollView>
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
        </ScrollView>
    );
};

HomeScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Home',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Profile'
                    iconName='person-outline'
                    onPress={() => {
                        navigationData.navigation.navigate('Profile')
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});

export default HomeScreen;
