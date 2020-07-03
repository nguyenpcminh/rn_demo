import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

const DetailScreen = ({route}) => {
  const {content, itemId} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Item id : {JSON.stringify(itemId)}</Text>
        <Text>{JSON.stringify(content)}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailScreen;
