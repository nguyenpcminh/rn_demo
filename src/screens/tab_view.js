import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './home';
import LogInScreen from './login';
import NewsScreen from './news';

var ScrollableTabView = require('react-native-scrollable-tab-view');

const TabView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollableTabView
        // renderTabBar={() => (
        //   <CustomTabBar
        //     tabBarBackgroundColor="red"
        //     tabBarActiveTextColor="white"
        //     tabBarInactiveTextColor="grey"
        //     tabBarUnderlineStyle={styles.underline}
        //   />
        // )}
        initialPage={1}
        tabBarBackgroundColor="red"
        tabBarActiveTextColor="white"
        tabBarInactiveTextColor="grey"
        // scrollWithoutAnimation={false}
        tabBarTextStyle={styles.fontScrollable}
        tabBarUnderlineStyle={styles.underline}>
        <HomeScreen navigation={navigation} tabLabel="Home" />
        <NewsScreen navigation={navigation} tabLabel="News" />
        <LogInScreen tabLabel="Log In" />
      </ScrollableTabView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  underline: {
    backgroundColor: 'white',
    height: 3,
    borderRadius: 10,
  },
  fontScrollable: {
    fontSize: 20,
  },
});

export default TabView;
