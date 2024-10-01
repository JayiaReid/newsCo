import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './App/Screen/Home';
import Color from './App/Shared/Color';

const App = () => {
  const [theme, setTheme] = React.useState(true);

  return (
    <View 
      style={[
        styles.container, 
        { backgroundColor: theme ? Color.light.background : Color.dark.background }
      ]}
    >
      <Home theme={theme} setTheme={setTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    // justifyContent: "center",
    // alignItems: "center"
  }
});

export default App;
