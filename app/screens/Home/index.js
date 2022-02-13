import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View, 
  FlatList,
  Image, 
  Pressable,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import {appColors, shadow} from '../../utils/appColors';
import Label from '../../components/Label';
import Divider from '../../components/Divider';
import {   SceneMap} from 'react-native-tab-view';

import {scale} from 'react-native-size-matters';
import ReduxWrapper from '../../redux/ReduxWrapper';
import Container from '../../components/Container';
import AvatarImage from '../../components/AvatarImage';
 
import MyDashboard from './MyDashboard'
import MyPosts  from './UserPosts'
import TabList  from './TabList'

function Home() {
   

  const UserPosts = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}} >
      {_renderPosts()}
    </View>
  ); 
  const renderScene = SceneMap({
    uploads: UserPosts,
    exhibitions: UserPosts,
    revenue: UserPosts,
  });

  const Icon = ({img, imgStyle, label, labelStyle}) => {
    return (
      <View style={styles.center}>
        <Image
          resizeMode="contain"
          style={[{height: scale(30), width: scale(33)}, imgStyle]}
          source={img}
        />
        <Label
          text={label}
          style={[
            {color: appColors.link, paddingVertical: scale(5)},
            labelStyle,
          ]}
        />
      </View>
    );
  };
  const AchivmentCard = ({count, label}) => {
    return (
      <View style={styles.center}>
        <Label text={count} style={{fontSize: scale(24)}} />
        <Label text={label} style={{fontSize: scale(14)}} />
      </View>
    );
  };

  const AwardCard = ({img, label}) => {
    return (
      <View style={[styles.center, {flexDirection: 'row'}]}>
        <Image
          resizeMode="contain"
          style={[{height: scale(19), width: scale(19)}]}
          source={img}
        />
        <Label
          bElight
          text={label}
          style={{paddingHorizontal: scale(5), fontSize: scale(18)}}
        />
      </View>
    );
  };
  const _renderAvatar = () => {
    return (
      <React.Fragment>
        <View
          style={[
            styles.center,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <Icon
            label="Upload"
            img={require(`../../assets/profile/upload-blue.png`)}
          />
          <View style={styles.center}>
            <AvatarImage size={scale(127)}  source={require("../../assets/profile/profile.png")} />
            <Label
              text={'john.doe'}
              style={{fontSize: scale(30), paddingVertical: scale(10)}}
              elight
            />
          </View>
          <Icon label="Edit" img={require(`../../assets/profile/edit.png`)} />
        </View> 
        <MyDashboard />
        <Divider isDark />
        <View
          style={[styles.center, {paddingHorizontal: scale(35)}, styles.rowSb]}>
          <AchivmentCard count={'2.3K'} label={'Followers'} />
          <AchivmentCard count={'50'} label={'Artworks'} />
          <AchivmentCard count={'21'} label={'Exhibitions'} />
        </View>
        <Divider isDark />

        <View
          style={[styles.center, {paddingHorizontal: scale(35)}, styles.rowSb]}>
          <AwardCard
            img={require(`../../assets/profile/heart.png`)}
            count={'2.3K'}
            label={'120'}
          />
          <AwardCard
            img={require(`../../assets/profile/dm.png`)}
            count={'50'}
            label={'43K'}
          />
          <AwardCard
            img={require(`../../assets/profile/share.png`)}
            count={'21'}
            label={'2.3K'}
          />
        </View>
      </React.Fragment>
    );
  };

  const ColorCard = ({color, label}) => {
    return (
      <View
        style={[
          styles.center,
          {backgroundColor: color, height: scale(42), minWidth: scale(65)},
        ]}>
        {label && (
          <Label
            text={label}
            style={{fontSize: scale(14), color: appColors.white}}
            medium
          />
        )}
      </View>
    );
  };
  const _renderPalate = () => {
    return (
      <View style={styles.center}>
        <FlatList
          horizontal
          data={appColors.pallate}
          renderItem={({item, index}) => (
            <ColorCard color={item} label={index == 0 && 'pallate'} />
          )}
        />
      </View>
    );
  };
 
  const _renderPosts = () => {
    return (
      <View> 
        <MyPosts />
      </View>
    );
  };
 

  const _renderTabs = () => {
    return (
      <View> 
        <TabList  renderScene={renderScene} Icon={Icon} />
      </View>
    );
  };

  const _renderHeader  =()=>{
    return <View style={[styles.rowSb,{alignItems:'center',paddingVertical: scale(0),}] } >
         <Image source={require("../../assets/profile/logo.png")} />
        <View style={[styles.rowSb,{alignItems:'center', flex:0.5}] }>
          <Pressable  style={{backgroundColor:'rgb(217,0,52)', padding:scale(10), borderRadius:scale(30)}}>
              <Image style={{height:scale(18), width:scale(18)}}  source={require("../../assets/profile/user.png")} />
          </Pressable> 
          <Image style={{height:scale(18), width:scale(18)}}  source={require("../../assets/profile/plus.png")} />
          <Image style={{height:scale(18), width:scale(18)}}  source={require("../../assets/profile/menu.png")} />
        </View>
    </View>
  }
  return (
    <Container innerViewStyle={styles.scrollContainer} isScrollable>
       {_renderHeader()} 
      {_renderAvatar()}
      {_renderPalate()} 
      {_renderTabs()}
      {_renderPosts()}
    </Container>
  );
}

export default ReduxWrapper(Home);
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
