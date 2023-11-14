import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainScreen from './screens/MainScreen';
import EtcScreen from './screens/EtcScreen';
import Information from './screens/Information';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { windowHeight, windowWidth } from './utils/ScreenSize';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position:'absolute',
            marginBottom: windowHeight * 52,
            height: windowHeight * 61,
            width: windowWidth * 225,
            backgroundColor: '#484848',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 0,
            marginLeft: windowWidth * 84,
            marginRight: windowWidth * 84,
            overflow:'hidden',
            borderTopWidth:0
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor:'white',
          tabBarActiveBackgroundColor: '#303030',
        }}>
        <Tab.Screen name="menu" component={EtcScreen} options={{
          tabBarIcon:()=>(
            <Octicons name="three-bars" size={24} color="white" />
          )
        }}/>
        <Tab.Screen name="Home" component={MainScreen} options={{
          tabBarIcon:()=>(
            <AntDesign name="home" size={24} color="white" />
          )
        }}/>
        <Tab.Screen name="information" component={Information} options={{
          tabBarIcon:()=>(
            <MaterialCommunityIcons name="information-outline" size={24} color="white" />
          )
        }}/>
      </Tab.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
