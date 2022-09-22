import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigateLink} from "./components/navigateLink";
import {Promo} from "./components/promo";
import {HeaderApp} from "./components/header/headerApp";
import {Balance} from "./components/balance";

const {width, height} = Dimensions.get("screen")
const WIDTH = width
const HEIGHT = height

// let logoSvg = require('./assets/img/a1logopng.png');
// let ask = require('./assets/img/asqPng50.png');
// let rightArrow = require('./assets/img/right50c.png');
let propmo1 = require('./assets/img/promo01.jpeg');
let propmo2 = require('./assets/img/promo02.jpg');
let propmo3 = require('./assets/img/promo03.jpg');
let propmo4 = require('./assets/img/promo04.jpg');


export default function App() {

  
  return (
    <View style={styles.container}>
      
      
      <HeaderApp/>
      {/*<View accessibilityViewIsModal={false}><Text>dflghnj d;f</Text></View>*/}
      
      <ScrollView style={styles.main}>
        
        <Balance/>
        
        <View style={styles.tax}>
          <Text style={{marginLeft: 20, fontSize: 20}}>ТАРИФНЫЙ ПЛАН И УСЛУГИ</Text>
          <NavigateLink key={'1'} text={'Тарифный план'}/>
          <NavigateLink key={'2'} text={'Услуги'}/>
          <NavigateLink key={'3'} text={'Роуминг'}/>
          <NavigateLink key={'4'} text={'Спец. условия на моб.связь'}/>
        </View>
        
        <View style={{width: WIDTH}}><NavigateLink key={'4'} text={'МАГАЗИН'}/></View>
        
        <Promo key={'promo1'} sourse={propmo1}/>
        <Promo key={'promo2'} sourse={propmo2}/>
        <Promo key={'promo3'} sourse={propmo3}/>
        <Promo key={'promo4'} sourse={propmo4}/>
  
        <View style={styles.footer}>
            <Image style={{width:35, height:35}} source={propmo1}/>
            <Image style={{width:35, height:35}} source={propmo2}/>
            <Image style={{width:35, height:35}} source={propmo3}/>
            <Image style={{width:35, height:35}} source={propmo4}/>
        </View>

        
        

        {/*<StatusBar style="auto" />*/}
        <StatusBar style={"light"} backgroundColor={'#000'} />
        
      </ScrollView>
    
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
  
  logoContainer: {
    height: 42,
    width: 42,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c6c6c6",
    // alignItems: 'center',
    // justifyContent: 'center',
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
    
    
    // shadowRadius:15,
    // shadowColor:'#666',
    // shadowOpacity:0,
    // shadowOffset:{ width: WIDTH, height: 50 }
    //
  },
  balanceText: {
    marginLeft: 15,
  },
  tax: {
    // backgroundColor: '#888',
    width: WIDTH,
    // height: ,
    marginTop: 20,
  },
  promo: {
    width: width - 20,
    height: 'auto',
    backgroundColor: 'green',
    marginTop: 10,
    alignSelf: 'center',
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
  footer: {
    flex:1,
    height: 70,
    width: WIDTH,
    backgroundColor: '#FFF',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
});
