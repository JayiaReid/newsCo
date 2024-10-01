import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

import React from 'react'
import Home from "../Screen/Home";
import News from "../Screen/News";

const HomeNav = () => {
  return (
    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="news" component={News} />
        </Stack.Navigator>
    
  )
}

export default HomeNav