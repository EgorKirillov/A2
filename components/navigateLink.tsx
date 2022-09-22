import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const {width, height} = Dimensions.get("screen")
const WIDTH = width
const HEIGHT = height

let rightArrow = require('../assets/img/right50c.png');

type NavigateLinkType = {
  text: string
  
}

export const NavigateLink = (props: NavigateLinkType) => {
  return (
    <TouchableWithoutFeedback onPress={() => alert(props.text)}>
      <View style={styles.navigateLink}>
        <Text style={styles.text}>{props.text}</Text>
        <Image style={{height: 36, width: 36,}} source={rightArrow}/>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  navigateLink: {
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    width: "100%",
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'rgba(144,144,144,0.73)',
    backgroundColor: '#fff',
  },
  text: {
    // fontFamily:'',
    fontSize: 20,
  },
});
