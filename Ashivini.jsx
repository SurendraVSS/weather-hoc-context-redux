import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { PracticeContext } from "./src/context/Provider"
const Ashivini = ({ navigation }) => {
    const { val, val1, val2, setVal, setVal1, setVal2, } = useContext(PracticeContext)
   

    return (
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
            {/* <Text>{val}</Text>
            <Text>{val1}</Text>
        
            <Button title="Ash" onPress={() => {
                setVal(val + 1)
                setVal1(val1 + 1)
                setVal2(val2 + 1)
            }} /> */}
            <Button title="Add to Cart" onPress={() => {
                setVal(val + 1)
                
            }} /> 
      

            <Button title="Cart Screen" onPress={() => navigation.navigate("Adi")}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Ashivini;
