import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Hoc from './Hoc/index';

const Person2 = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text>Adi learned react from {name}</Text>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default Hoc(Person2);
