import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import News from '../widget/news_component';

const DATA_NEWHOT2 = [
  {
    id: 1,
    imgUrl: 'https://picsum.photos/id/200/500/500',
    title:
      ' Quyết định khó tin nhất lịch sử Sony: không bán cảm biến camera nữa mà chuyển sang thu phí định kỳ với người dùng smartphone',
    content:
      'Có một sự thật như thế này: Những trận động đất lớn có thể gây ảnh hưởng tới chuyển động quanh trục của Trái Đất, giảm độ dài ngày, làm biến dạng bề mặt hành tinh hay thậm chí khiến cả Bắc Cực xê dịch chút đỉnh. Tuy nhiên, tất cả những biến đổi trên đều vô cùng nhỏ, không đủ để ta cảm nhận thấy nhưng khoa học vẫn có cách để tính ra những thay đổi trên, dù con số có tí hon tới mức nào.Bất cứ hành động nào có liên quan tới chuyển động của một khối lượng vật chất lớn đều ảnh hưởng tới vòng quay Trái Đất, từ thời tiết theo mùa cho tới xe đi lại trên mặt đấ',
  },
  {
    id: 2,
    imgUrl: 'https://picsum.photos/id/201/500/500',
    title:
      ' Quyết định khó tin nhất lịch sử Sony: không bán cảm biến camera nữa mà chuyển sang thu phí định kỳ với người dùng smartphone',
    content:
      'Bên cạnh các mẫu smartphone Lux và Max Pro sắp ra mắt, hãng điện thoại Việt Vsmart còn sắp thực hiện một bước đi chiến lược tiếp theo: đặt chân tới thị trường Mỹ. Chủ tịch VinGroup, ông Phạm Nhật Vượng đã không ngần ngại tuyên bố lý do tiến đánh thị trường được coi là khó tính nhất thế giới này: ',
  },
  {
    id: 3,
    imgUrl: 'https://picsum.photos/id/202/500/500',
    title:
      ' Quyết định khó tin nhất lịch sử Sony: không bán cảm biến camera nữa mà chuyển sang thu phí định kỳ với người dùng smartphone',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2001 đến 2011.',
  },
  {
    id: 4,
    imgUrl: 'https://picsum.photos/id/203/500/500',
    title:
      ' Quyết định khó tin nhất lịch sử Sony: không bán cảm biến camera nữa mà chuyển sang thu phí định kỳ với người dùng smartphone',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
];

const DATA_NEWS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: 'bd7acbea-c1-46c2-aed5-3ad53abb28ba',
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
    id: '58694a0f-3da1-1f-bd96-145571e29d72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2a',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3ac68afc-c605-44f8-fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58694a0f1f-bd96-e29d72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: 'bd7acbea-c1b1-428ba',
    imgUrl: 'https://picsum.photos/id/302/500/500',
    title: 'First Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '3ac68afc-c605--fbd91aa97f63',
    imgUrl: 'https://picsum.photos/id/304/500/500',
    title: 'Second Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
  {
    id: '58694a0f-3da1-145571e29d72',
    imgUrl: 'https://picsum.photos/id/305/500/500',
    title: 'Third Item',
    date: '23/09/2017',
    content:
      'Nằm cách Trái Đất khoảng 75 triệu năm ánh sáng trong Thiên hà lùn Kinman, đây là một ngôi sao thuộc loại Sao biến quang xanh siêu khổng lồ (LBV), với độ sáng ước tính gấp 2,5 triệu lần Mặt Trời. Sao biến quang xanh rất hiếm gặp trong vũ trụ và chỉ có một số ít được biết đến hiện nay. Được biết, ngôi sao kỳ lạ nói trên được các nhà thiên văn học quan sát nghiên cứu trong khoảng thời gian từ 2019 đến 2020.',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.content}>
      <ScrollView>
        <View style={styles.newsHot}>
          <TouchableOpacity>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://picsum.photos/id/200/500/500',
              }}
            />
            <Text style={styles.subNewsHot}>
              Quyết định khó tin nhất lịch sử Sony: không bán cảm biến camera
              nữa mà chuyển sang thu phí định kỳ với người dùng smartphone
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newsHot2}>
          {DATA_NEWHOT2.map((element) => (
            <TouchableOpacity
              style={styles.itemNewsHot2}
              key={element.id}
              onPress={() => {
                navigation.navigate('Detail', {
                  content: element.content,
                  itemId: element.id,
                });
              }}>
              <Image
                style={styles.imgNewHot2}
                source={{
                  uri: element.imgUrl,
                }}
              />
              <Text style={styles.subNewHot2}>{element.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <News data={DATA_NEWS} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  newsHot: {
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    height: 250,
    marginTop: 10,
  },
  subNewsHot: {
    fontSize: 20,
    color: 'white',
    padding: 6,
  },
  tinyLogo: {
    width: Dimensions.get('window').width,
    height: 160,
  },
  newsHot2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    width: Dimensions.get('window').width,
  },
  itemNewsHot2: {
    width: Dimensions.get('window').width / 2,
    height: 250,
    paddingTop: 10,
  },
  imgNewHot2: {
    width: Dimensions.get('window').width / 2 - 10,
    height: 150,
  },
  subNewHot2: {
    fontSize: 15,
  },
});

export default HomeScreen;
