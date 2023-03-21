import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const Floating = () => {
    const icon_1 = useRef(new Animated.Value(0)).current;
    const icon_2 = useRef(new Animated.Value(0)).current;
    const icon_3 = useRef(new Animated.Value(0)).current;

    const [pop, setPop] = useState(false)
    function popIn(){
        setPop(true)
        Animated.timing(icon_1,{
            toValue:-100,
            duration:300,
            useNativeDriver:true
        }).start()

        Animated.timing(icon_2, {
            toValue: -80,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(icon_3, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    function popOut(){
        setPop(false)
        Animated.timing(icon_1, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()

        Animated.timing(icon_2, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()

        Animated.timing(icon_3, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()
    }
    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={[styles.circle, { transform: [{ translateY: icon_1 }] }]}>
               <TouchableOpacity >
                    <AntDesign name="clouduploado" size={24} color="black" />
               </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.circle, { transform: [{ translateX: icon_2 }, { translateY: icon_2 }]}]}>
                <TouchableOpacity>
                    <AntDesign name="sharealt" size={24} color="black" />
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.circle, { transform: [{ translateX: icon_3 }] }]}>
                <TouchableOpacity>
                    <AntDesign name="printer" size={24} color="black" />
                </TouchableOpacity>
            </Animated.View>
        
            <TouchableOpacity style={styles.circle}
                onPress={() => pop === false ? popIn(): popOut()}
            >
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>

        </View>
       
    );
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor: "#8458B3",
        width:60,
        height:60,
        position: "absolute",
        bottom: 40,
        right:40,
        borderRadius:50,
        justifyContent: "center",
        alignItems:'center',
    }
})

export default Floating;
