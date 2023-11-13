import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainScreen from './screens/MainScreen';
import EtcScreen from './screens/EtcScreen';
import Information from './screens/Information';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false, 
        
       }}>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="menu" component={EtcScreen} />
        <Tab.Screen name="information" component={Information} />
      </Tab.Navigator>
      <StatusBar style='light'/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
