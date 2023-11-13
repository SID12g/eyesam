import { View, Image, Text, StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../utils/ScreenSize"
import blink from '../assets/images/blink_icon.png'
import { useFonts } from "expo-font"

export default function DetailComponent({icon, title, value}) {
    let [fontsLoaded, fontError] = useFonts({
        'NEXON-LV2-Gothic-Bold':require('../assets/fonts/NEXON-Lv2-Gothic-Bold.ttf')
    })
    if(!fontsLoaded) {
        return null
    }
    return (
        <View style={styles.detailComponent}>
            <View style={styles.detailTitle}>
                <Image source={icon} style={styles.detailIcon} />
                <Text style={icon == blink ? styles.detailTextBlink:styles.detailText}>{title}</Text>
            </View>
            <Text style={styles.detailValue}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detailComponent: {
        width: windowWidth * 100,
        height: windowHeight * 100,
        backgroundColor: '#353535',
        borderRadius: 15,
        marginHorizontal: windowWidth * 10,
    },
    detailTitle: {
        flexDirection: 'row',
        marginLeft: windowWidth * 11,
        marginTop: windowHeight * 15,
        height: windowHeight * 30,
        width:windowWidth*100,
    },
    detailIcon: {
        width: windowWidth * 30,
        height: windowHeight * 30,
    },
    detailText: {
        color: 'white',
        fontSize: 16,
        marginTop: windowHeight * 7,
        textAlign:'right',
        width:windowWidth*50,
        paddingRight:windowWidth*5,
        fontFamily:'NEXON-LV2-Gothic-Bold'
    },
    detailTextBlink: {
        color: 'white',
        fontSize: 12,
        marginTop: windowHeight * 7,
        textAlign:'right',
        width:windowWidth*50,
        paddingRight:windowWidth*3,
        fontFamily:'NEXON-LV2-Gothic-Bold'
    },
    detailValue: {
        fontSize: 24,
        color: 'white',
        textAlign: 'right',
        marginRight: windowWidth * 11,
        marginTop: windowHeight * 10,
        fontFamily:'NEXON-LV2-Gothic-Bold'
    },
})