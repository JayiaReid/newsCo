import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../context/ThemeContext'

const List = ({headlines}) => {
  const {theme} = useTheme()

  return (
    <View>
      <FlatList

        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={headlines}
        renderItem={({ item }) => (
          <View>
            <View style={{height: 1, backgroundColor: theme.card, marginTop: 10}}/>
          <TouchableOpacity style={{ marginTop: 15, display: "flex", flexDirection: "row" }}>
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: 130, borderRadius: 10, width: 130 }}
            />
            <View style={{marginRight: 135, marginLeft: 10}}>
              <Text
              numberOfLines={4}
              style={{ color: theme.text, marginTop: 10, fontSize: 18, fontWeight: 'bold' }}
            >
              {item.title}
            </Text>
            <Text style={{ color: theme.border, marginTop: 6, fontSize: 10 }}>
              {item?.source.name}
            </Text>
            </View>
            
          </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export default List