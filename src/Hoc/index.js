import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';

const Hoc = (OrignalComponents) => {

    function NewComponent(){
        //const [money, setMoney] = useState(10);


        // const handleIncrease = () => {
        //     setMoney(money * 2)
        // }
        //return <OrignalComponents handleIncrease={handleIncrease} money={money} />

        return <OrignalComponents name="Surendra"/>
    }
    return NewComponent
    
}

const styles = StyleSheet.create({})

export default Hoc;
