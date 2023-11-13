import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { windowHeight, windowWidth } from './utils/ScreenSize';
import state_good from './assets/images/state_good.png'
import state_bad from './assets/images/state_bad.png'
import blink from './assets/images/blink_icon.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EYESAM</Text>
      <View style={styles.stateWrap}>
        <Image source={state_good} style={styles.stateImg} />
        <Text style={styles.stateText}>눈 건강에 적절한 환경이에요!</Text>
      </View>
      <View style={styles.detailWrap}>
        <View style={styles.detailComponent}>
          <View style={styles.detailTitle}>
            <Image source={blink} style={styles.detailIcon}/>
            <Text style={styles.detailText}>눈 깜빡임</Text>
          </View>
          <Text style={styles.detailValue}>20회</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginLeft: windowWidth * 44,
    marginTop: windowHeight * 82,
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
  stateText:{
    color:'white',
    marginTop:windowHeight*45,
    fontSize:20,
  },
  detailWrap:{

  },
  detailComponent:{
    width:windowWidth*100, 
    height:windowHeight*100,
    backgroundColor:'#353535',
    borderRadius:15,
  },
  detailTitle:{
    flexDirection:'row',
    marginLeft:windowWidth*11,
    marginTop:windowHeight*15,
    height:windowHeight*30
    
  },
  detailIcon:{
    width:windowWidth*30, 
    height:windowHeight*30,
  },
  detailText:{
    color:'white',
    fontSize:12,
    marginLeft:windowWidth*2,
    marginTop:windowHeight*5,
  },
  detailValue:{
    fontSize:24,
    color:'white',
    
  },

});
