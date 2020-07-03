import React from 'react';
import LogInScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import DetailScreen from './src/screens/detail';
import TabView from './src/screens/tab_view';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NewsScreen from './src/screens/news';

const LogInStack = createStackNavigator();
const TabViewStack = createStackNavigator();
const DetailStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

// eslint-disable-next-line no-unused-vars
const LogInStackScreen = ({navigation}) => (
  <LogInStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <LogInStack.Screen name="LogIn" component={LogInScreen} />
  </LogInStack.Navigator>
);

// eslint-disable-next-line no-unused-vars
const TabViewStackScreen = ({navigation}) => (
  <TabViewStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <TabViewStack.Screen name="TabView" component={TabView} />
  </TabViewStack.Navigator>
);

// eslint-disable-next-line no-unused-vars
const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <DetailStack.Screen name="Detail" component={DetailScreen} />
  </DetailStack.Navigator>
);

// eslint-disable-next-line no-unused-vars
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LogIn">
        <Drawer.Screen name="LogIn" component={LogInScreen} />
        <Drawer.Screen name="TabView" component={TabView} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
