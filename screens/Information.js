import { View, Text, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/ScreenSize";
import { Roboto_900Black_Italic, useFonts } from "@expo-google-fonts/roboto";

export default function Information() {
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
            <View style={styles.text_wrap}>
                <Text style={styles.logo}>EYESAM</Text>
                <Text style={styles.version}>앱 버전 1.0.0</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth * 393,
        height: windowHeight * 852,
        backgroundColor: '#222222',
    },
    text_wrap: {
        marginTop: windowWidth * 393,
    },
    logo: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'Roboto_900Black_Italic',
    },
    version: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Pretendard-SemiBold',
    },

})