import { View, Text, StyleSheet, Pressable } from "react-native";
import { windowHeight, windowWidth } from "../utils/ScreenSize";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { Roboto_900Black_Italic, useFonts } from "@expo-google-fonts/roboto";
import { Linking } from "react-native";

export default function EtcScreen() {
    function preesed1(){
        console.log(1)
    }
    const openGithub = () => {
        Linking.openURL("https://github.com/SID12g/eyesam")
    }
    const [goodState, setGoodState] = useState(true)
    let [fontsLoaded, fontError] = useFonts({
        Roboto_900Black_Italic,
        'NEXON-LV2-Gothic-Bold': require('../assets/fonts/NEXON-Lv2-Gothic-Bold.ttf'),
        'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf')
    })
    if (!fontsLoaded) {
        return null
    }
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: windowHeight * 92 }}></View>
            <Pressable onPress={ openGithub } style={({pressed})=>pressed? styles.btnPress:''}>
                <View style={styles.menuWrap}>
                    <AntDesign name="github" size={24} color="white" style={{ marginLeft: windowWidth * 21 }} />
                    <View style={{ width: windowWidth * 280, height: windowHeight * 31, justifyContent: 'center' }}>
                        <Text style={styles.menuText}>코드 확인하기</Text>
                    </View>
                    <AntDesign name="right" size={24} color="white" style={{ marginLeft: windowWidth * 16 }} />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 852,
        width: windowWidth * 393,
        backgroundColor: '#222222',

    },
    btnPress:{
        opacity:0.75,
    },
    menuWrap: {
        flexDirection: 'row',
        width: windowWidth * 393,
        height: windowHeight * 50,
        alignItems: 'center'
    },
    menuText: {
        color: 'white',
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 12,
        marginLeft: windowWidth * 19,

    },
})