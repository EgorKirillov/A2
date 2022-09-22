import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

const {width, height} = Dimensions.get("screen")
const WIDTH = width
const HEIGHT = height

type HeaderItenMenuPropsType = {
  name: string
  selected: boolean
  type: 'Phone' | 'Internet'
  
}


export const HeaderItenMenu = (props:HeaderItenMenuPropsType) => {

  return (
    
      <View style={styles.container}>
        
        <View style={styles.name}>
          <Text style={styles.whiteText}>{props.type}</Text>
          <Text style={styles.whiteText}>{props.name}</Text>
        </View>
        
        <View style={styles.icons}>
  
          {props.selected && <Text style={styles.whiteText}>sel </Text>}
          <Text style={styles.whiteText}>del </Text>
          <Text style={styles.whiteText}>edit </Text>
        </View>
        
      </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000',
    width:WIDTH,
    height:72,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
  },
  name: {
    marginLeft:15,
  },
  icons: {
    marginRight:15,
    flexDirection:'row',
    alignItems:"center"
  },
  whiteText: {
    color:'#fff',
  },
  

});
