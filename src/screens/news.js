import React from 'react';
import {View, StyleSheet} from 'react-native';
import News from '../widget/news_component';
import {ScrollView} from 'react-native-gesture-handler';

const DATA_NEWS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3a3abb28ba',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3ac68afc-c605-48d3-f8-fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1571e29d72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: 'bd7acbea-c1b1-46-aed5-3ad53abb28ba',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3ac68afc-c48d3-a4f8-fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58694a0f-3da1-471f--145571e29d72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: 'bd7acbea-c1b1-46d53abb28ba',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3ac68af-48d3-a4f8-fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14552',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: 'bd-46c2-aed5-3ad53abb28ba',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3ac68a4f8-fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58694a0f-3dad72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: 'bd7acbead5-3ad53abb28ba',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3acd3-a4f8-fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58694a0f-5571e29d72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: 'bd7acbea-d53abb28ba',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3ac68af-a4f8-fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58s-bd96-145571e29d72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
];

const NewsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <News data={DATA_NEWS} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsScreen;
