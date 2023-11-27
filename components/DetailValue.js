import { View, Text, Image, StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../utils/ScreenSize"
import blink from '../assets/images/blink_icon.png'
import bright from '../assets/images/bright_icon.png'
import dist from '../assets/images/dist_icon.png'
import humidity from '../assets/images/humidity_icon.png'
import sound from '../assets/images/sound_icon.png'
import temp from '../assets/images/temp_icon.png'
import DetailComponent from "./DetailComponent"
import { useEffect, useState } from "react"
import { db } from "../firebaseConfig"
import { collection, getDocs } from "firebase/firestore";




export default function DeatilValue() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "info"));
          const newData = [];
          querySnapshot.forEach((doc) => {
            newData.push({ id: doc.id, ...doc.data() });
          });
          setData(newData);
        } catch (error) {
          console.error("데이터를 가져오는 중 오류 발생:", error);
        }
      };
      fetchData();
      
    }, [data]);
    
    console.log(data)
    
    return (
        <View style={styles.detailColumnWrap}>
            <View style={styles.detailRowWrap}>
                <DetailComponent icon={blink} title='눈 깜빡임' value={data[0].blink+'회'} />
                <DetailComponent icon={temp} title='온도' value={data[0].temp+'도'} />
                <DetailComponent icon={humidity} title='습도' value={data[0].humi+'%'} />
            </View><View style={styles.detailRowWrap}>
                <DetailComponent icon={bright} title='밝기' value={data[0].bright} />
                <DetailComponent icon={dist} title='거리' value={data[0].dist+'cm'} />
                <DetailComponent icon={sound} title='소리' value={data[0].sound+'db'} />
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