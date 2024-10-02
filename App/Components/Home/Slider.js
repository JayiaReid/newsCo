import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';  

const Slider = ({active, setActive}) => {
  // const [active, setActive] = React.useState(1);
  const { theme } = useTheme();  

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
      <FlatList style={{marginVertical: 20}}
        horizontal
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setActive(item.name)}>
            <Text
              style={[
                {
                  color: theme.text,  
                  textDecorationLine: active === item.name ? 'underline' : 'none',
                  textDecorationStyle: 'dotted',
                  textDecorationColor: theme.border, 
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
