import {View, Text, Image, StyleSheet, FlatList,Dimensions} from 'react-native';
import React from 'react';
import Container from 'Components/Container';
import Label from 'Components/Label';
import CustomButton from 'Components/CustomButton';
import {scale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {appColors} from '../../utils/appColors';
import {featuresList} from '../../utils/MockData';
import Divider from '../../components/Divider';
const SCREEN =Dimensions.get('window')
export default function index({navigation}) {
    const onRegister = ()=>{
        navigation?.navigate("Home")
    }
  const _renderRegisterAction = () => {
    return (
      <React.Fragment>
        <View style={styles.actionWrapper}>
          <CustomButton
          onPress={onRegister}
            style={{width: scale(123)}}
            labelStyle={{fontSize: scale(20)}}
            label="Register"
            IconLeft={
              <MaterialIcons
                name="east"
                size={scale(20)}
                color={appColors.white}
              />
            }
          />
          <Label text="me as a collector" elight style={styles.actionText} />
        </View>
        <View style={[styles.actionWrapper, {paddingVertical: scale(40)}]}>
          <MaterialIcons name="east" size={scale(20)} color={appColors.link} />
          <Label
            text="track my application"
            elight
            style={[
              styles.actionText,
              {color: appColors.link, fontSize: scale(20)},
            ]}
          />
        </View>
      </React.Fragment>
    );
  };

  const FeatureCard = ({item}) => {
    const {img, desc, label} = item;
    return (
      <View style={{paddingBottom:scale(50)}} >
        <Image source={img} />
        <View style={{maxWidth: scale(150), paddingVertical: scale(25)}}>
          <Label text={label} elight style={{fontSize: scale(28)}} />
        </View>
        <Label
          text={desc}
          style={{color: appColors.black, opacity: scale(0.49)}}
        />
      </View>
    );
  };
  const _renderFeatures = () => {
    return (
      <View>
        <FlatList
          data={featuresList}
          ItemSeparatorComponent={() => <View style={{padding: scale(20)}} />}
          renderItem={({item, index}) => (
            <FeatureCard item={item} key={index} />
          )}
        />
      </View>
    );
  };

  const _renderSocialIcons = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/img/social/fb.png')}
          style={{
            width: scale(32),
            height: scale(32),
          }}
        />
        <Image
          source={require('../../assets/img/social/ig.png')}
          style={{
            width: scale(32),
            height: scale(32),
            marginLeft: scale(10),
          }}
        />
      </View>
    );
  };

  const _renderCopyRight = () => {
    return (
      <View style={[styles.actionWrapper, {paddingVertical: scale(50)}]}>
        <MaterialIcons
          name="copyright"
          size={scale(30)}
          color={appColors.black}
        />
        <Label
          text="Content Copyright reserved."
          elight
          style={[styles.actionText, {fontSize: scale(16)}]}
        />
      </View>
    );
  };
  const FooterLink = ({link1,link2}) => {
    return (
      <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical:scale(10)}} >
        <Label
          text={link1? link1: "About Us."}
          medium
          style={[styles.actionText, {fontSize: scale(16)}]}
        />
        <Label
          text={link2? link2: "About Us."}
          medium
          style={[styles.actionText, {fontSize: scale(16)}]}
        />
      </View>
    );
  };
  const _renderFooterLinks = () => {
    return <View style={{paddingHorizontal:scale(50), paddingBottom:scale(40)}} >
        <FooterLink link2={"Affiliations."}/> 
        <FooterLink link1={"Team."} link2="Disclaimers." />
        <FooterLink link1={"Reach us."} link2="Privacy Policy" />
    </View>;
  };
  return (
    <Container isScrollable>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={{
            width: scale(211),
            height: scale(77),
          }}
        />
      </View>

      <View style={{  justifyContent:'center', alignItems:'center'}}>
      <Image
        resizeMode='cover'
        source={require('../../assets/img/login-img.png')}
        style={{  
            height:scale(380) 
        }}
      />
      </View>
      
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.text}>
          <Label
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            style={{textAlign: 'center'}}
          />
        </View>
      </View>
      {_renderRegisterAction()}
      <View style={{paddingHorizontal: scale(20)}}>{_renderFeatures()}</View>
      <View style={{paddingVertical: scale(40), paddingTop: scale(50)}}>
        {_renderSocialIcons()}
      </View>
      <Divider isDark />
      <View style={styles.actionWrapper}>
        <Image
          source={require('../../assets/img/logo-1.png')}
          resizeMode="contain"
          style={{
            height: scale(60),
          }}
        />
      </View>

      
      {_renderFooterLinks()}
      <Divider isDark />
      {_renderCopyRight()}
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {paddingHorizontal: scale(24), paddingVertical: scale(31)},
  text: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: scale(289),
    paddingHorizontal: scale(24),
    paddingVertical: scale(31),
  },
  actionText: {paddingHorizontal: scale(5), fontSize: scale(24)},
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
