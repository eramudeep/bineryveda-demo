import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { imgsList } from '../../utils/MockData'
import { scale } from 'react-native-size-matters';

export default function UserPosts() {


  const Post = ({item}) => {
    return (
      <View
        style={{ 
          height: scale(167),
          width: scale(155),
          margin: scale(3),
        }}> 
          <Image style={{ height: scale(167),
          width: scale(155),
           }} source={{uri: item} } />
        </View>
    );
  };

  return (
    <View>
    <FlatList
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      data={ imgsList}
      numColumns={2} 
      renderItem={({item, index}) => <Post item={item} key={index} />}
    />
  </View>
  )
}