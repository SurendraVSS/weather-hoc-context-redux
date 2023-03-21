import React, { createContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
const PracticeContext = createContext();
const Provider = ({children}) => {
    const [val, setVal] = useState(0)
    const [val1, setVal1] = useState(1)
    const [val2, setVal2] = useState(2)
    return (
        <PracticeContext.Provider value={{ val, val1, val2, setVal, setVal1, setVal2}}>
            {children}
        </PracticeContext.Provider>
    );
}

const styles = StyleSheet.create({})

export { Provider, PracticeContext };
