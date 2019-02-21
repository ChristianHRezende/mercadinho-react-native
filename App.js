import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ClientScreen from './src/screens/ClientScreen/ClientScreen';
import ProductsScreen from './src/screens/ProductsScreen/ProductsScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Client: { screen: ClientScreen },
  Products: { screen: ProductsScreen },
})
export default App = createAppContainer(MainNavigator);

