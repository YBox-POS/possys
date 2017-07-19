import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';
import { List, ListItem, Button} from 'react-native-elements';


const ExListImages = ({ imagesa, followImage, unfollowImage }) => (
  <View>
    {Object.values(imagesa).map(({ id, path, price, name, desc}) => (
      <ListItem
        title={name}
        avatar={{uri:path}}
        key={`user-${id}`}
        onPress={() => {console.log('你点击的是列表'+id)}}
      />
))}
</View>
)



export default ExListImages;
