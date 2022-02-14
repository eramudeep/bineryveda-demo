import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import SwitchToggle from 'react-native-switch-toggle'
import Label from '../../components/Label'
import { scale } from 'react-native-size-matters'
import { appColors,shadow } from '../../utils/appColors'

export default function MyDashboard() {
    const [switchOn, setSwitchOn] = useState(true)
  return (
    <View
    style={[styles.center, {paddingHorizontal: scale(25)}, styles.rowSb]}>
    <Label text={'My dashboard'} />

    <SwitchToggle
      switchOn={switchOn}
      backgroundColorOn="#44A33D"
      circleColorOn="#44A33D"
      containerStyle={styles.switchcontainerStyle}
      circleStyle={styles.switchcircleStyle}
      onPress={() => { setSwitchOn(!switchOn) }}
    />
  </View>
  )
}


const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
      paddingHorizontal: 20,
    },
    center: {justifyContent: 'center', alignItems: 'center'},
    rowSb: {
      paddingVertical: scale(20),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    switchcontainerStyle: {
      width: scale(50),
      height: scale(20),
      borderRadius: scale(30),
    },
    switchcircleStyle: {
      width: scale(25),
      height: scale(25),
      borderRadius: scale(20),
      borderWidth: scale(10),
      borderColor: appColors.white,
      ...shadow,
    },
    tabActive:{
      borderBottomWidth:scale(2),
      borderBottomColor:appColors.yellow
    }
  });