import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import Label from '../Label'

export default function index({label,style,onPress,labelStyle, IconLeft}) {
    return (
        <TouchableRipple rippleColor={appColors.white} onPress={onPress} rippleDuration={800} style={[styles.container,style]}> 
            {
                <View style={{paddingHorizontal:scale(5)}}>
                   {IconLeft}
                </View>
            }
            <Label text={ label } style={[styles.label,labelStyle]}/>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(43),
        backgroundColor:appColors.primary,
        borderRadius:scale(9),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
        //overflow:"hidden",
         
    },
    label:{ 
        color:appColors.white
    }
})
