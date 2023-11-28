import { View, Text, StyleSheet, Image } from "react-native"
import DeatilValue from "../components/DetailValue";
import { windowWidth, windowHeight } from "../utils/ScreenSize";
import state_good from '../assets/images/state_good.png'
import state_bad from '../assets/images/state_bad.png'
import { Roboto_900Black_Italic, useFonts } from "@expo-google-fonts/roboto";
import { useEffect, useState } from "react"
import { db } from "../firebaseConfig"
import { collection, getDocs } from "firebase/firestore";
export default function MainScreen() {

    const [data, setData] = useState([{ 'blink': '로딩', 'temp': '로딩', 'humi': '로딩', 'bright': '로딩', 'dist': '로딩', 'sound': '로딩', }]);
    const [warnLevel, setWarnLevel] = useState(1)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "info"));
                const newData = [];
                querySnapshot.forEach((doc) => {
                    newData.push({ id: doc.id, ...doc.data() });
                });
                setData(newData);
                setWarnLevel(1)
                if (700 > data[0].bright)
                    setWarnLevel(2)
                if (20 > data[0].dist)
                    setWarnLevel(2)
                if (300 > data[0].bright)
                    setWarnLevel(3)
                if (10 > data[0].dist)
                    setWarnLevel(3)
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchData();
    }, [data]);
    console.log(data)
    console.log(warnLevel)
    let [fontsLoaded, fontError] = useFonts({
        Roboto_900Black_Italic,
        'NEXON-LV2-Gothic-Bold': require('../assets/fonts/NEXON-Lv2-Gothic-Bold.ttf'),
        'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf')
    })
    if (!fontsLoaded) {
        return null
    }



    return (
        <View style={{ backgroundColor: '#222222', flex: 1 }}>
            <Text style={styles.title}>EYESAM</Text>
            <View style={styles.stateWrap}>
                <Image source={warnLevel === 1 ? state_good : state_bad} style={styles.stateImg} />
                <Text style={styles.stateText}>
                    {warnLevel === 1 ? '눈 건강에 적절한 환경이에요!' : '눈 건강을 더 신경써 주세요!'}
                </Text>
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
        fontFamily: 'Roboto_900Black_Italic'
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
        fontFamily: 'Pretendard-SemiBold',
        fontWeight: 'bold'
    },


});
