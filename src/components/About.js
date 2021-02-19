import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { gs, colors } from '../styles/styles';

const hotel = {
    name: 'Mt. Catlin Hotel',
    price: '$967',
    location: 'New York',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim sed nibh elementum lobortis. Vivamus quis nunc arcu. Ut suscipit facilisis odio. Morbi vel eros in dui rutrum auctor a vitae odio. Nulla et mi vel dolor placerat vestibulum. Aenean volutpat dolor eget turpis volutpat bibendum. In tempus elementum magna, a mattis enim.' 
};

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hotel.name}</Text>

            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}
            </Text>

            <View style={gs.divider} />

            <Text style={gs.sectionTitle}>About {hotel.name}</Text>

            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info: {
        color: colors.textSec,
        fontWeight: '600',
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20
    }
});

export default About;
