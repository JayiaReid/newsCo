import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Home from './App/Screen/Home';
import { ThemeProvider } from './App/context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import HomeNav from './App/Navs/HomeNav';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <HomeNav/>
        </NavigationContainer>
        {/* <Home /> */}
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 30,
    // backgroundColor: "#000"
  }
});

export default App;
