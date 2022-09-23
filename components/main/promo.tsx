import React from 'react';
import {Dimensions, Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {NavigateLink} from "../navigateLink";

const {width, height} = Dimensions.get("screen")
const WIDTH = width

type PromoPropsType = {
  sourse: ImageSourcePropType
}

export const Promo = (props: PromoPropsType) => {

  return (
        <View style={[styles.promo, styles.shadow]}>
          <Image style={{width:'100%'}} source={props.sourse}/>
          <NavigateLink key={'4'} text={'Перейти'}/>
        </View>

  )}

const styles = StyleSheet.create({
  promo: {
    width: WIDTH-20,
    height: 'auto',
    backgroundColor: 'green',
    marginTop: 20,
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
  
});
