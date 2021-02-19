import React from 'react';
import { View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { gs, colors } from '../styles/styles';

const Bookmark = () => {
    return (
        <View style={styles.bookmark}>
            <Feather name='bookmark' size={24} color={colors.pink} />
        </View>
    );
};

const styles = StyleSheet.create({
    bookmark: {
        ...gs.center,
        position: 'absolute',
        width: 56,
        height: 56,
        right: 32,
        top: -56 / 2,
        backgroundColor: colors.text,
        borderRadius: 56 / 2,
        zIndex: 10
    }
});

export default Bookmark;
