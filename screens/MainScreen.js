import { View, Text, StyleSheet, Image } from "react-native"
import DeatilValue from "../components/DetailValue";
import { windowWidth, windowHeight } from "../utils/ScreenSize";
import state_good from '../assets/images/state_good.png'
import state_bad from '../assets/images/state_bad.png'
import { useState } from "react";
import { Roboto_900Black_Italic, useFonts } from "@expo-google-fonts/roboto";
export default function MainScreen() {
    const [goodState, setGoodState] = useState(true)
    let [fontsLoaded, fontError] = useFonts({
        Roboto_900Black_Italic,
        'NEXON-LV2-Gothic-Bold':require('../assets/fonts/NEXON-Lv2-Gothic-Bold.ttf'),
        'Pretendard-SemiBold':require('../assets/fonts/Pretendard-SemiBold.otf')
    })
    if(!fontsLoaded) {
        return null
    }
    return (
        <View style={{backgroundColor:'#222222', flex:1}}>
            <Text style={styles.title}>EYESAM</Text>
            <View style={styles.stateWrap}>
                <Image source={goodState?state_good:state_bad} style={styles.stateImg} />
                <Text style={styles.stateText}>눈 건강에 적절한 환경이에요!</Text>
            </View>
            <DeatilValue />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: 'white',
        marginLeft: windowWidth * 44,
        marginTop: windowHeight * 82,
        fontFamily:'Roboto_900Black_Italic'
    },
    stateWrap: {
        alignItems: 'center',
        marginTop: windowHeight * 67,
    },
    stateImg: {
        width: windowWidth * 150,
        height: windowHeight * 150,
        resizeMode: "cover",
        overflow: 'hidden'
    },
    stateText: {
        color: 'white',
        marginTop: windowHeight * 45,
        fontSize: 20,
        marginBottom: windowHeight * 43,
        fontFamily:'Pretendard-SemiBold',
        fontWeight:'bold'
    },


});
