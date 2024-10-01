import React from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import GlobalApi from '../../Services/GlobalApi';
import { useTheme } from '../../context/ThemeContext'; 
import { useNavigation } from '@react-navigation/native';

const Headline = ({headlines}) => {
  
  const { theme } = useTheme();  
  const nav = useNavigation()

  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={headlines}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>nav.navigate('news')} style={{ width: Dimensions.get('screen').width * 0.80, marginRight: 15 }}>
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: Dimensions.get('screen').width * 0.77, borderRadius: 10 }}
            />
            <Text
              numberOfLines={3}
              style={{ color: theme.text, marginTop: 10, fontSize: 20, fontWeight: 'bold' }}
            >
              {item.title}
            </Text>
            <Text style={{ color: theme.border, marginTop: 5, fontSize: 15 }}>
              {item.source.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Headline;
