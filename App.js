import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { windowHeight, windowWidth } from './utils/ScreenSize';
import state_good from './assets/images/state_good.png'
import state_bad from './assets/images/state_bad.png'

import DeatilValue from './components/DetailValue';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EYESAM</Text>
      <View style={styles.stateWrap}>
        <Image source={state_good} style={styles.stateImg} />
        <Text style={styles.stateText}>눈 건강에 적절한 환경이에요!</Text>
      </View>
      <DeatilValue/>
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
  stateText: {
    color: 'white',
    marginTop: windowHeight * 45,
    fontSize: 20,
    marginBottom:windowHeight*43,
  },


});
