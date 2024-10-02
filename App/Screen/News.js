import React from 'react'
import { Dimensions, Image, Linking, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, useRoute } from '@react-navigation/native';

const OpenURLButton = ({ url, children }) => {
  const {theme} = useTheme();
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return <TouchableOpacity title={children} onPress={handlePress}><Text style={{ color: theme.border, marginTop: 10, fontSize: 18, fontWeight: "bold" }}>Read More</Text></TouchableOpacity>;
};

const News = () => {

  const news = useRoute().params.news
  // const [show, setShow]=React.useState(false)

  React.useEffect(()=>{
    // console.log(news)
  })

  const shareNews = () =>{
    Share.share({
      message: news.title+"\nRead More: "+ news.description
    })
  }

    const { theme, toggleTheme, isLightTheme } = useTheme();
    const nav = useNavigation()

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            {/* <View style={styles.h_container}>
                <Text style={[{ color: theme.primary }, styles.header]}>NewsCo.</Text>
                <MaterialIcons
                    onPress={toggleTheme}
                    name={isLightTheme ? "dark-mode" : "light-mode"}
                    size={30}
                    color={theme.primary}
                />
            </View> */}
            <View style={{marginVertical: 15, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <TouchableOpacity onPress={()=>nav.navigate('home')}><Ionicons name="chevron-back" size={30} color={theme.secondaryText} /></TouchableOpacity>
              <TouchableOpacity onPress={()=>shareNews()}><Feather name="share" size={30} color={theme.secondaryText} /></TouchableOpacity>

            </View>
            
            <View style={{backgroundColor: theme.background}}>
            <Image
              source={{ uri: news.urlToImage }}
              style={{ width: "100%", height: Dimensions.get('screen').height * 0.50, borderRadius: 10 }}
            />
             <Text style={{ color: theme.border, marginTop: 10, fontSize: 15 }}>
              {news.source.name}
            </Text>
            <Text
              numberOfLines={3}
              style={{ color: theme.text, marginTop: 10, fontSize: 22, fontWeight: 'bold' }}
            >
              {news.title}
            </Text>
            
            <Text style={{ color: theme.secondaryText, marginTop: 10, fontSize: 18, lineHeight: 30 }}>
              {news.description}
            </Text>
            <OpenURLButton url={news.url}></OpenURLButton>
            </View>
            
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
      // paddingVertical: 20,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

export default News