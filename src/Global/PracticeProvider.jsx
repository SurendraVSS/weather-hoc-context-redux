import React, { useState, createContext } from 'react';
import {View, StyleSheet} from 'react-native';
const PracticeContext = createContext();

const PracticeProvider = ({children}) => {
   
    const [val, setVal] = useState(0);
    return (
        <PracticeContext.Provider value={{
            val, setVal
        }}>
            {children}
        </PracticeContext.Provider>
    );
}

const styles = StyleSheet.create({})

export { PracticeProvider, PracticeContext };
