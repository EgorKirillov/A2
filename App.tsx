import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {HeaderApp} from "./components/header/headerApp";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Main} from "./components/main/main";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const {width, height} = Dimensions.get("screen")
const WIDTH = width
const Tab = createBottomTabNavigator();


export default function App() {
  
  
  return (
    <View style={styles.container}>
      
      <HeaderApp/>
      
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarStyle: {position: 'relative', height: 50, width: WIDTH},
        }}>
          <Tab.Screen name="Home" component={Main} options={{headerShown: false}}/>
          <Tab.Screen name="Home1" component={ScrollView}/>
          <Tab.Screen name="Home2" component={View}/>
          <Tab.Screen name="Settings" component={View}/>
        </Tab.Navigator>
      </NavigationContainer>
      
      <StatusBar style={"light"} backgroundColor={'#000'}/>
    </View>
  
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
