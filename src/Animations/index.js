import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text ,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const Animations = () => {
 //const  [translation, setTranslation] = useState(0)
 
    // useEffect(() => {
    //     for(let i = 0; i<340;i++){
    //         setTimeout(() => {
    //             setTranslation(i)
    //             console.log(i);
    //         }, 25 * i)
            
    //     }
    // }, []);

    const translation = useRef(new Animated.Value(0)).current
useEffect(() => {
    Animated.timing(translation, {
        toValue:-120,
        useNativeDriver:true,
        duration:5000
    }).start()
},[])

    return (
     
        <Animated.View
        style={{
            width: 100,
            height:100,
            backgroundColor:'orange',
            transform:[{translateX:translation}],
            justifyContent:'center',
            alignItems: 'center',
        }}
        >
            <Entypo name="home" size={54} color="black" />
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </Animated.View>
    );
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 40,
        height: 40,
    }
})
export default Animations;
