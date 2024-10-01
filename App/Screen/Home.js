import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Slider from '../Components/Home/Slider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Headline from '../Components/Home/Headline';
import List from '../Components/Home/List';
import { useTheme } from '../context/ThemeContext'; 
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
  const { theme, toggleTheme, isLightTheme } = useTheme();
  const [headlines, setHeadlines] = React.useState([]);

  React.useEffect(() => {
    getHeadlineApi();
  }, []);

  const getHeadlineApi = async () => {
    const res = (await GlobalApi.getHeadline()).data;
    setHeadlines(res.articles);
  };

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
      <Slider />
      <Headline headlines={headlines}/>
      <List headlines={headlines}/>
    </ScrollView>
  );
};

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

export default Home;
