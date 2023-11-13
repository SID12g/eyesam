import { View, Image, Text, StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../utils/ScreenSize"
import blink from '../assets/images/blink_icon.png'
import bright from '../assets/images/bright_icon.png'
import dist from '../assets/images/dist_icon.png'
import humidity from '../assets/images/humidity_icon.png'
import sound from '../assets/images/sound_icon.png'
import temp from '../assets/images/temp_icon.png'

export default function DetailComponent({icon, title, value}) {
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
    },
    detailTextBlink: {
        color: 'white',
        fontSize: 12,
        marginTop: windowHeight * 7,
        textAlign:'right',
        width:windowWidth*50,
        paddingRight:windowWidth*3,
    },
    detailValue: {
        fontSize: 24,
        color: 'white',
        textAlign: 'right',
        marginRight: windowWidth * 11,
        marginTop: windowHeight * 10,
    },
})