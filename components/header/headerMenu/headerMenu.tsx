import React from 'react';
import {View} from 'react-native';
import {HeaderItenMenu} from "./headerItem/headerItemMenu";


export const HeaderMenu = () => {

  return (
      <View>
        <HeaderItenMenu key={'phone1'} name={'+375 29 111 11 11'} selected={false} type={"Phone"}/>
        <HeaderItenMenu key={'phone2'} name={'+375 29 222 22 22'} selected={true} type={"Phone"}/>
        <HeaderItenMenu key={'phone3'} name={'+375 29 333 33 33'} selected={false} type={"Phone"}/>
        <HeaderItenMenu key={'internet'} name={'0123456789'} selected={false} type={"Internet"}/>
      </View>
  )
}
