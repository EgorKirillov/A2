import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {HeaderItenMenu} from "./headerItem/headerItemMenu";
// import RNPickerSelect from 'react-native-picker-select';

const {width, height} = Dimensions.get("screen")
const WIDTH = width
const HEIGHT = height

let logoSvg = require('../../../assets/img/a1logopng.png');
let ask = require('../../../assets/img/asqPng50.png');


export const HeaderMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const pressMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    
      <View>
        <HeaderItenMenu key={'phone1'} name={'+375 29 111 11 11'} selected={false} type={"Phone"}/>
        <HeaderItenMenu key={'phone2'} name={'+375 29 222 22 22'} selected={true} type={"Phone"}/>
        <HeaderItenMenu key={'phone3'} name={'+375 29 333 33 33'} selected={false} type={"Phone"}/>
        <HeaderItenMenu key={'internet'} name={'0123456789'} selected={false} type={"Internet"}/>
        
      </View>
  
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    width: WIDTH,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 72,
    marginTop: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  logoContainer: {
    height: 42,
    width: 42 + (WIDTH - 114) * 0.6,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  selectUser: {
    height: 42,
    width: (WIDTH - 114) * 0.6,
    margin: 0,
    backgroundColor: 'blue',
  },
  
  logo: {
    height: 36,
    width: 36,
  },
  
  rightLogoContainer: {
    height: 42,
    width: 42,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});
