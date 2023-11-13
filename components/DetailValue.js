import { View, Text, Image, StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../utils/ScreenSize"
import blink from '../assets/images/blink_icon.png'
import bright from '../assets/images/bright_icon.png'
import dist from '../assets/images/dist_icon.png'
import humidity from '../assets/images/humidity_icon.png'
import sound from '../assets/images/sound_icon.png'
import temp from '../assets/images/temp_icon.png'

import DetailComponent from "./DetailComponent"
export default function DeatilValue() {
    return (
        <View style={styles.detailColumnWrap}>
            <View style={styles.detailRowWrap}>
                <DetailComponent icon={blink} title='눈 깜빡임' value='20회' />
                <DetailComponent icon={temp} title='온도' value='25도' />
                <DetailComponent icon={humidity} title='습도' value='45%' />
            </View><View style={styles.detailRowWrap}>
                <DetailComponent icon={bright} title='밝기' value='1500Lx' />
                <DetailComponent icon={dist} title='거리' value='50cm' />
                <DetailComponent icon={sound} title='소리' value='50db' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailColumnWrap: {

    },
    detailRowWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: windowHeight * 23,
    },
})