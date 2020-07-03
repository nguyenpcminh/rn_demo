import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  FlatList,
  View,
} from 'react-native';

const News = ({data, navigation}) => {
  return (
    <FlatList
      style={styles.news}
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.newsItem}
          onPress={() => {
            navigation.navigate('Detail', {
              itemId: item.id,
              content: item.content,
            });
          }}>
          <Image style={styles.newsItemUrl} source={{uri: item.imgUrl}} />
          <View>
            <Text style={styles.newsItemTitle}>{item.title}</Text>
            <Text syle={styles.newsItemDate}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  news: {
    width: Dimensions.get('window').width,
    marginTop: 20,
  },
  newsItem: {
    flexDirection: 'row',
    margin: 10,
  },
  newsItemUrl: {
    width: 120,
    height: 100,
    marginRight: 10,
  },
  newsItemTitle: {
    fontSize: 24,
  },
  newsItemDate: {
    color: 'grey',
  },
});

export default News;
