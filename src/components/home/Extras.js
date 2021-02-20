import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { gs, colors } from '../../styles/styles';

const extras = [
    'Payment at Checkout',
    'WI-FI Network is off by 12:00pm',
    'No swimming after 10:00pm',
    'No more than 2 pieces of luggage',
    'No refunds'
];

const Extras = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Before you go</Text>

            <View style={styles.list}>
                {extras.map((extra, key) => {
                    return (
                        <Text style={styles.listItem} key={key}>
                            &mdash; {extra}
                        </Text>
                    );
                })}
            </View>

            <View style={{ marginTop: 32, marginBottom: -40 }}>
                <Button 
                    buttonStyle={styles.filterButton}
                    title='Filter'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 64
    },
    list: {
        marginTop: 16,
        marginLeft: 8
    },
    listItem: {
        color: colors.textSec,
        marginVertical: 8
    },
    filterButton: {
        ...gs.button,
        paddingVertical: 16,
        color: 'white',
        fontWeight: '700'
    }
});

export default Extras;
