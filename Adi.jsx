import React, { useContext }from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { PracticeContext }  from "./src/context/Provider"
const Adi = ({navigation}) => {
    const { val, val1, val2, setVal, setVal1, setVal2 } = useContext(PracticeContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{val}</Text>
           
          
        </View>
    );
}

const styles = StyleSheet.create({})

export default Adi;
