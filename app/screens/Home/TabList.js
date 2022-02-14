import { View,StyleSheet, Text,useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import { TabBar, TabView } from 'react-native-tab-view'
import { appColors,shadow } from '../../utils/appColors';
import { scale } from 'react-native-size-matters';

export default function TabList({renderScene,Icon}) {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      {key: 'uploads', title: 'Uploads',img: require(`../../assets/profile/upload.png`) },
      {key: 'exhibitions', title: 'Exhibitions',img: require(`../../assets/profile/exhibitions.png`)},
      {key: 'revenue', title: 'Revenue',img: require(`../../assets/profile/revenue.png`)},
    ]);
  const renderTabBar = (props) => { 
    return  (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: appColors.white}}
        style={{backgroundColor: appColors.white, paddingVertical:scale(15)}}
        renderLabel={() => null}
        renderIcon={({route, focused, color}) => { 
        return  (
          <View style={[{paddingHorizontal:scale(10), }, focused && styles.tabActive  ]} > 
            <Icon
              label={route?.title}
              img={route?.img }
              imgStyle={{height:scale(35), width:scale(35) }}
              labelStyle={{fontSize:scale( 17), fontFamily: "Barlow-Medium", color: appColors.black , opacity:  focused ? 1:  0.45  }}
            />
          </View>
        )}}
      />
    )};
  


  return (
    <TabView
    navigationState={{index, routes}}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{width: layout.width}}
    renderTabBar={renderTabBar}
  />
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
  