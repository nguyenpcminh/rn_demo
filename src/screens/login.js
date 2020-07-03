import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, SafeAreaView} from 'react-native';
import Input from '../widget/input';
import {CommonActions} from '@react-navigation/native';

const LogInScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const LogIn = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'TabView'}],
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>LOG IN</Text>
        <Input
          placeholder="Please input your email"
          value={userEmail}
          keyboardType="email-address"
          onChangeText={(text) => setUserEmail(text)}
        />
        <Input
          placeholder="Please input your passwrod"
          value={userPassword}
          onChangeText={(text) => setUserPassword(text)}
        />
        <Button title="Login" onPress={LogIn} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: '#CF1218',
    marginBottom: 20,
  },
});

export default LogInScreen;
