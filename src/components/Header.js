import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { gs } from '../styles/styles';

const Header = () => {
    return (
        <View>
            <Image 
                source={require('../assets/images/pool.jpg')} 
                style={styles.image}
            />
            <View style={styles.topButtons}>
                <AntDesign name='close' size={24} style={styles.topButtonLeft} />
                <View style={gs.rowCenter}>
                    <AntDesign name='save' size={24} style={styles.topButtonRight}  />
                    <AntDesign name='sharealt' size={24} style={styles.topButtonRight}  />
                    <Entypo name='dots-three-vertical' size={18} style={styles.topButtonRight} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400
    },
    topButtons: {
        ...gs.rowBetween,
        position: 'absolute',
        top: 64,
        left: 32,
        right: 32
    },
    topButtonRight: {
        marginLeft: 12,
        color: '#fff'
    },
    topButtonLeft: {
        color: '#fff'
    }
});

export default Header;
