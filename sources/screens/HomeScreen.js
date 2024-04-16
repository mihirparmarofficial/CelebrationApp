import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';

const HomeScreen = ({navigation}) => {
  const DATA1 = [
    {
      id: '1',
      title: 'Decoration Item',
    },
    {
      id: '2',
      title: 'Custom Decoration',
    },
    {
      id: '3',
      title: 'Room special',
    },
    {
      id: '4',
      title: 'Venue Decoration',
    },
  ];
  const DATA2 = [
    {
      id: '1',
      title: 'Kids Birthday',
      img: require('../common/image/kid.png'),
      onPress: () => {
        navigation.navigate('SubCategory');
      },
    },
    {
      id: '2',
      title: 'Classic Birthday',
      img: require('../common/image/classic.png'),
    },
    {id: '3', title: 'Love Theme', img: require('../common/image/love.png')},
    {id: '4', title: 'Baby Shower', img: require('../common/image/baby.png')},
    {
      id: '5',
      title: 'Welcome Baby',
      img: require('../common/image/welcome.png'),
    },
    {id: '6', title: 'Temple', img: require('../common/image/temple.png')},
    {
      id: '7',
      title: 'Golden Party',
      img: require('../common/image/golden.png'),
    },
    {id: '8', title: 'Red Party', img: require('../common/image/red.png')},
  ];
  const DATA3 = [
    {
      id: '1',
      title: 'Baby Shower Decoration',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      img: require('../common/image/BabyShower.png'),
      price: '₹ 2000.00',
      btn: 'Order Now',
    },
    {
      id: '2',
      title: 'Marriage Decoration',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      img: require('../common/image/Marriage.png'),
      price: '₹ 80000.00',
      btn: 'Order Now',
    },
    {
      id: '3',
      title: 'Valentine Room Decoration',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      img: require('../common/image/Valentine.png'),
      price: '₹ 7000.00',
      btn: 'Order Now',
    },
    {
      id: '4',
      title: 'Birthday Decoration',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      img: require('../common/image/GBbirthday.png'),
      price: '₹ 3000.00',
      btn: 'Order Now',
    },
  ];
  const [formData, setFormData] = useState({
    search: '',
  });
  const [select, setSelect] = useState();
  const renderItem1 = ({item}) => {
    const backgroundColor = item.id === select ? '#ffb605' : null;
    const color = item.id === select ? 'white' : '#A0A0A0';
    const borderColor = item.id === select ? '#ffb605' : '#A0A0A0';
    const fontWeight = item.id === select ? '600' : null;

    return (
      <TouchableOpacity onPress={() => setSelect(item.id)}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderWidth: 1,
            borderRadius: 8,
            borderColor,
            marginEnd: 10,
            backgroundColor,
          }}>
          <Text style={{color, fontWeight}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem2 = ({item}) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        // onPress={() => navigation.navigate('SubCategory')}
        style={{
          borderWidth: 1,
          borderBottomWidth: 3,
          borderBottomColor: '#D5D5D5',
          borderRadius: 13,
          borderColor: '#C5C5C5',
          marginEnd: 10,
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop: 5,
        }}>
        <Image style={{height: 120, width: 130}} source={item.img} />
        <Text
          style={{
            color: 'black',
            padding: 8,
            fontFamily: FONTS.Regular,
            fontWeight: 500,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderItem3 = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          // marginStart: 2,
          // marginEnd: 13,
          marginBottom: 10,
          paddingRight: 15,
          paddingLeft: 12,
        }}>
        <Image
          style={{
            height: 95,
            width: 95,
            alignItems: 'flex-start',
            borderRadius: 10,
          }}
          source={item.img}
        />
        <View
          style={{
            width: '73.5%',
            height: 80,
            borderWidth: 1,
            marginTop: 'auto',
            marginBottom: 'auto',
            borderEndStartRadius: 0,
            borderStartStartRadius: 0,
            borderRadius: 15,
            borderColor: '#EEEEEE',
            backgroundColor: '#fff',
            flexDirection: 'row',
          }}>
          <View
            style={{
              // borderBlockColor: 'red',
              // borderColor: 'red',
              // borderWidth: 3,
              width: '65%',
            }}>
            <Text
              style={{
                color: 'black',
                padding: 8,
                textAlign: 'left',
                fontSize: 11,
                fontFamily: FONTS.Regular,
                fontWeight: 500,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: 'grey',
                paddingHorizontal: 8,
                marginTop: -3,
                textAlign: 'left',
                fontSize: 8,
                fontFamily: FONTS.Regular,
              }}>
              {item.text}
            </Text>
          </View>
          <View
            style={{
              // borderBlockColor: 'yellow',
              // borderColor: 'yellow',
              // borderWidth: 3,
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginStart: '10%',
              // alignItems: 'flex-end',
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'left',
                fontSize: 10,
                fontWeight: 500,
                fontFamily: FONTS.Regular,
                // borderColor: 'green',
                // borderWidth: 1,
                paddingVertical: 15,
              }}>
              {item.price}
            </Text>
            <View
              style={{
                paddingVertical: 10,
                width: 50,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#ffb605',
                    textAlign: 'center',
                    fontSize: 8,
                    padding: 2,
                    fontFamily: FONTS.Regular,
                    borderColor: '#ffb605',
                    borderWidth: 1,
                    borderRadius: 3,
                  }}>
                  {item.btn}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingRight: 15, paddingLeft: 15}}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: FONTS.Regular,
              fontWeight: 'bold',
              color: '#ffb605',
              marginTop: -5,
              justifyContent: 'flex-start',
            }}>
            Logo
          </Text>
          <Text
            style={{
              marginRight: 'auto',
              marginLeft: '23%',
              fontFamily: FONTS.Regular,
              fontSize: 20,
              fontWeight: '600',
            }}>
            Home
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              source={require('../common/image/notification.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft: 12}}>
          <View style={styles.inputStyle}>
            <Image
              source={require('../common/image/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              style={{width: '88%'}}
              value={formData.search}
              onChangeText={username =>
                setFormData({...formData, search: username})
              }
              placeholder={'Search decoration'}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
            paddingRight: 15,
            paddingLeft: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: 500}}>Category</Text>
          <TouchableOpacity
            style={{textAlign: 'right', color: '#ffb605', marginLeft: 'auto'}}
            onPress={() =>
              navigation.navigate('AllCategory', {
                formData,
              })
            }>
            <Text
              style={{
                color: '#ffb605',
                marginTop: 5,
                fontWeight: 500,
              }}>
              View All ›
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 8}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA1}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={{paddingLeft: 13}}
          />
        </View>
        <View style={{marginTop: 8}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA2}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={{paddingLeft: 13}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            paddingRight: 15,
            paddingLeft: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: 500}}>Trending</Text>
          <TouchableOpacity
            style={{textAlign: 'right', color: '#ffb605', marginLeft: 'auto'}}
            onPress={() =>
              navigation.navigate('AllCategory', {
                formData,
              })
            }>
            <Text
              style={{
                color: '#ffb605',
                marginTop: 5,
                fontWeight: 500,
              }}>
              View All ›
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA3}
          renderItem={renderItem3}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingTop: 13, paddingBottom: 10}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 3,
  },
  searchIcon: {
    height: 18,
    width: 18,
    marginRight: 10,
    marginLeft: 10,
  },

  inputStyle: {
    height: 44,
    alignItems: 'center',
    marginTop: 15,
    borderColor: '#C5C5C5',
    borderWidth: 1.2,
    borderRadius: 10,
    color: 'black',
    fontFamily: FONTS.Regular,
    flexDirection: 'row',
    width: '96.5%',
  },
  inputText: {
    textAlign: 'left',
    fontFamily: FONTS.Regular,
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: '500',
  },
});
