import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';

const News = () => {

    const { theme, toggleTheme, isLightTheme } = useTheme();
    const nav = useNavigation()

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.h_container}>
                <Text style={[{ color: theme.primary }, styles.header]}>NewsCo.</Text>
                <MaterialIcons
                    onPress={toggleTheme}
                    name={isLightTheme ? "dark-mode" : "light-mode"}
                    size={30}
                    color={theme.primary}
                />
            </View>
            <TouchableOpacity onPress={()=>nav.navigate('home')}><Text style={{color: theme.border, fontWeight: "bold"}}>Go back</Text></TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingHorizontal: 10,
      padding: 30
    },
    h_container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 20,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

export default News