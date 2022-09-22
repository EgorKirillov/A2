import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {HeaderMenu} from "./headerMenu/headerMenu";
// import RNPickerSelect from 'react-native-picker-select';

const {width, height} = Dimensions.get("screen")
const WIDTH = width
const HEIGHT = height

let logoSvg = require('../../assets/img/a1logopng.png');
let ask = require('../../assets/img/asqPng50.png');


export const HeaderApp = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const pressMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    
    <>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logoSvg}/>
          <View style={styles.selectUser}>
            
            <TouchableWithoutFeedback onPress={pressMenu}>
              <Text>выпадающее меню</Text>
            </TouchableWithoutFeedback>
            {/*<RNPickerSelect*/}
            {/*             onValueChange={(value) => alert(value)}*/}
            {/*  items={[*/}
            {/*    {label: 'phone1', value: 'phone1'},*/}
            {/*    {label: 'phone2', value: 'phone1'},*/}
            {/*    {label: 'internet', value: 'internet'},*/}
            {/*  ]}*/}
            {/*/>*/}
          </View>
        </View>
        
        <View style={styles.rightLogoContainer}><Image style={styles.logo} source={ask}/></View>
      </View>
      {showMenu && <HeaderMenu />}
    </>
  
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
