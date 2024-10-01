import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../../Shared/Color';

const Slider = ({ theme }) => {
  const [active, setActive] = React.useState(1);

  const list = [
    { id: 1, name: 'Latest' },
    { id: 2, name: 'World' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Movie' },
    { id: 5, name: 'Music' },
    { id: 6, name: 'Tech' },
    { id: 7, name: 'Sports' },
  ];

  
  return (
    <View>
      <FlatList
        horizontal
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setActive(item.id)}>
            <Text
              style={[
                {
                  color: theme ? Color.light.text : Color.dark.text,
                  textDecorationLine: active === item.id ? 'underline' : 'none', 
                  textDecorationStyle: 'dotted',
                  textDecorationColor: theme ? Color.light.border : Color.dark.border,
                },
                styles.text,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Slider;
