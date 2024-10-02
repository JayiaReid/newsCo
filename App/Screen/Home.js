import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Slider from '../Components/Home/Slider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Headline from '../Components/Home/Headline';
import List from '../Components/Home/List';
import { useTheme } from '../context/ThemeContext'; 
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
  const [active, setActive] = React.useState('latest');
  const { theme, toggleTheme, isLightTheme } = useTheme();
  const [headlines, setHeadlines] = React.useState([]);
  const [everything, setEverything] = React.useState([])

  React.useEffect(() => {
    
    getCategoryApi(active)
  }, [active]);

  React.useEffect(()=>{
    getHeadlineApi();
  }, [])

  const getHeadlineApi = async () => {
    const res = (await GlobalApi.getHeadline()).data;
    setHeadlines(res.articles);
  };

  const getCategoryApi = async (category) => {
    const res = (await GlobalApi.getByCategory(category)).data;
    setEverything(res.articles);
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
      <Text style={{fontSize: 20, fontWeight: "bold", color: theme.text}}>Headlines</Text>
      <Headline headlines={headlines}/>
      <Slider active={active} setActive={setActive}/>
      <List headlines={everything}/>
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
