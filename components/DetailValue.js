import { View, Text, Image, StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../utils/ScreenSize"
import blink from '../assets/images/blink_icon.png'
export default function DeatilValue() {
    return (
        <View style={styles.detailColumnWrap}>
            <View style={styles.detailRowWrap}>
                <View style={styles.detailComponent}>
                    <View style={styles.detailTitle}>
                        <Image source={blink} style={styles.detailIcon} />
                        <Text style={styles.detailText}>눈 깜빡임</Text>
                    </View>
                    <Text style={styles.detailValue}>20회</Text>
                </View>
                <View style={styles.detailComponent}>
                    <View style={styles.detailTitle}>
                        <Image source={blink} style={styles.detailIcon} />
                        <Text style={styles.detailText}>눈 깜빡임</Text>
                    </View>
                    <Text style={styles.detailValue}>20회</Text>
                </View>
                <View style={styles.detailComponent}>
                    <View style={styles.detailTitle}>
                        <Image source={blink} style={styles.detailIcon} />
                        <Text style={styles.detailText}>눈 깜빡임</Text>
                    </View>
                    <Text style={styles.detailValue}>20회</Text>
                </View>
            </View><View style={styles.detailRowWrap}>
                <View style={styles.detailComponent}>
                    <View style={styles.detailTitle}>
                        <Image source={blink} style={styles.detailIcon} />
                        <Text style={styles.detailText}>눈 깜빡임</Text>
                    </View>
                    <Text style={styles.detailValue}>20회</Text>
                </View>
                <View style={styles.detailComponent}>
                    <View style={styles.detailTitle}>
                        <Image source={blink} style={styles.detailIcon} />
                        <Text style={styles.detailText}>눈 깜빡임</Text>
                    </View>
                    <Text style={styles.detailValue}>20회</Text>
                </View>
                <View style={styles.detailComponent}>
                    <View style={styles.detailTitle}>
                        <Image source={blink} style={styles.detailIcon} />
                        <Text style={styles.detailText}>눈 깜빡임</Text>
                    </View>
                    <Text style={styles.detailValue}>20회</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailColumnWrap:{

    },
    detailRowWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: windowHeight * 23,
    },
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
        height: windowHeight * 30

    },
    detailIcon: {
        width: windowWidth * 30,
        height: windowHeight * 30,
    },
    detailText: {
        color: 'white',
        fontSize: 12,
        marginLeft: windowWidth * 2,
        marginTop: windowHeight * 6,
    },
    detailValue: {
        fontSize: 24,
        color: 'white',
        textAlign: 'right',
        marginRight: windowWidth * 11,
        marginTop: windowHeight * 10,
    },
})