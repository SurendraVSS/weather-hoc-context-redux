import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { PracticeContext } from './Global/PracticeProvider';
import Hoc from './Hoc/index';

const Person2 = ({ name }) => {
    const { val, val1, val2, setVal, setVal1, setVal2 } = useContext(PracticeContext);
    return (
        <View style={styles.container}>
            <Text>Adi learned react from {val1}</Text>
           
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
