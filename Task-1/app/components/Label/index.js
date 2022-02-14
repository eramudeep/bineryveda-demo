import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import ReduxWrapper from 'Redux/ReduxWrapper';
import {appColors} from '../../utils/appColors';

function Label({
  text,
  style,
  appState: {darkMode},
  light,
  elight,
  bold,
  medium,
  bElight
}) {
  return (
    <Text
      style={[
        styles.label,
        style,
        darkMode ? styles.dark : styles.light,
        elight && styles.elight,
        light && styles.light,
        bold && styles.bold,
        medium && styles.medium,
        bElight&& styles.bElight
      ]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    //flex:1,
    fontSize: scale(16),
    color: appColors.black,
    fontFamily: 'BarlowCondensed-Regular',
    //backgroundColor:'green'
  },
  light: {
    color: appColors.black,
  },
  dark: {
    color: appColors.white,
  },
  elight: {
    fontFamily: 'BarlowCondensed-ExtraLight',
  },
  light: {
    fontFamily: 'BarlowCondensed-Light',
  },
  bold: {
    fontFamily: 'BarlowCondensed-Bold',
  },
  medium: {
    fontFamily: 'BarlowCondensed-Medium',
  },
  bElight: {
    fontFamily: "Barlow-ExtraLight"
   }
});

export default ReduxWrapper(Label);
