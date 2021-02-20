import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/navigation/CustomHeaderButton';
import { colors } from '../styles/styles';

const ProfileScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>ProfileScreen</Text>
            </View>
        </ScrollView>
    );
};

ProfileScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Profile',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Home'
                    iconName='home-outline'
                    onPress={() => {
                        navigationData.navigation.navigate('Home')
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

export default ProfileScreen;
