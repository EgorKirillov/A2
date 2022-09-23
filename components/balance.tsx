import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';


let cross = require('../assets/img/cross50.png');
const {width, height} = Dimensions.get("screen")

export const Balance = () => {
  
  const date = new Date()
  const time = date.toLocaleTimeString([], {hour: "numeric", minute: "numeric"}) // как убрать секунды?
  const money = 12.54
  
  return (
    
    <View style={[styles.balance, styles.shadow]}>
      <View style={styles.balanceText}>
        <Text>Баланс на сегодня {time}</Text>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{money} руб</Text>
      </View>
      <View style={styles.logoContainer}><Image style={{height: 36, width: 36,}} source={cross}/></View>
    
    </View>
  )
  
}

export const styles = StyleSheet.create({
  
  logoContainer: {
    height: 42,
    width: 42,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  balance: {
    backgroundColor: '#fff',
    width: width - 20,
    height: 80,
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    marginLeft: 15,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  
});
