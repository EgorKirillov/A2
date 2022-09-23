import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigateLink} from "../navigateLink";
import {Promo} from "./promo";
import {Balance} from "../balance";

const {width, height} = Dimensions.get("screen")
const WIDTH = width
let propmo1 = require('../../assets/img/promo01.jpeg');
let propmo2 = require('../../assets/img/promo02.jpg');
let propmo3 = require('../../assets/img/promo03.jpg');
let propmo4 = require('../../assets/img/promo04.jpg');

export const Main = () => {
  
  
  return (
    
    <ScrollView style={styles.main}>
      
      <Balance/>
      <View style={styles.tax}>
        <Text style={{marginLeft: 20, fontSize: 20}}>ТАРИФНЫЙ ПЛАН И УСЛУГИ</Text>
        <NavigateLink key={'1'} text={'Тарифный план'}/>
        <NavigateLink key={'2'} text={'Услуги'}/>
        <NavigateLink key={'3'} text={'Роуминг'}/>
        <NavigateLink key={'4'} text={'Спец. условия на моб.связь'}/>
      </View>
      
      <View style={{width: WIDTH, marginTop:20}}><NavigateLink key={'4'} text={'МАГАЗИН'}/></View>
      <Promo key={'promo1'} sourse={propmo1}/>
      <Promo key={'promo2'} sourse={propmo2}/>
      <Promo key={'promo3'} sourse={propmo3}/>
      <Promo key={'promo4'} sourse={propmo4}/>
    
    </ScrollView>
  
  
  );
}

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c6c6c6",
  
  },
  tax: {
    width: WIDTH,
    marginTop: 20,
  },
});
