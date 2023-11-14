import { View, Text, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/ScreenSize";

export default function EtcScreen(){
    return(
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:windowHeight*852,
        width:windowWidth*393,
        backgroundColor:'#222222',
    }
})