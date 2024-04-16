import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';

const OrderReceipt = ({navigation}) => {
  const [selectedScreen, setselectedScreen] = useState(true);
  let [count, setCount] = useState(1);
  const [select, setSelect] = useState(false);
  // let [data, setData] = useState([
  //   {
  //     id: '1',
  //     title: 'Golden - Blue Theme',
  //     text: 'Best birthday decoration ideas involve use of lights. Attractive.',
  //     img: require('../common/image/GBbirthday.png'),
  //     price: '₹ 2000.00',
  //     btn: 'Order Now',
  //   },
  // ]);

  let DATA = [
    {
      id: '1',
      title: 'Golden - Blue Theme',
      text1: 'Name: Ahan',
      text2: 'Number: 2',
      text3: 'Requirement: Pink balloon and white ribbon..',
      img: require('../common/image/GBbirthday.png'),
      price: '₹ 2000.00',
      btn: 'Order Now',
    },
  ];

  const renderItem2 = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('OrderFullReceipt')}
        style={{
          width: '100%',
          height: '100%',
          borderWidth: 2,
          borderRadius: 15,
          borderColor: '#EEEEEE',
          padding: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              height: 100,
              width: 100,
              alignItems: 'flex-start',
              borderRadius: 5,
            }}
            source={item.img}
          />
          <View
            style={{
              // borderWidth: 1,
              // borderColor: 'red',
              width: '73.5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                // borderColor: 'green',
                // borderWidth: 3,
                width: '85%',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    paddingTop: 8,
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 13,
                    fontFamily: FONTS.Regular,
                    fontWeight: 500,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: FONTS.Regular,
                    marginTop: 5,
                    paddingHorizontal: 8,
                  }}>
                  {item.price}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: 'grey',
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 10,
                    fontFamily: FONTS.Regular,
                  }}>
                  {item.text1}
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 10,
                    fontFamily: FONTS.Regular,
                  }}>
                  {item.text2}
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 10,
                    fontFamily: FONTS.Regular,
                  }}>
                  {item.text3}
                </Text>
              </View>
            </View>
            <View
              style={{
                // borderColor: 'yellow',
                // borderWidth: 3,
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                marginLeft: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('OrderFullReceipt')}>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../common/image/arrow-right.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            // borderColor: 'red',
            // borderWidth: 1,
            width: '100%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../common/image/arrow-left.png')}
              style={{height: 20, width: 20, alignItems: 'flex-start'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: FONTS.Regular,
              fontSize: 20,
              marginLeft: '35%',
              fontWeight: '600',
            }}>
            Orders
          </Text>
        </View>

        <View>
          <View>
            <View
              style={{
                paddingHorizontal: 15,
                paddingTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 45, width: 45}}
                source={require('../common/image/delivered.png')}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '85%',
                  // borderColor: 'red',
                  // borderWidth: 1,
                  alignItems: 'center',
                }}>
                <View style={{marginStart: 10}}>
                  <Text style={{color: 'black', fontWeight: '500'}}>
                    Delivered
                  </Text>
                  <Text style={{color: 'grey', fontSize: 11}}>
                    On Sat, 06 Jan
                  </Text>
                </View>
                <Text>Order ID : #84569</Text>
              </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingTop: 13, paddingBottom: 10}}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderReceipt;

const styles = StyleSheet.create({
  container: {
    //     borderColor: 'red',
    //     borderWidth: 2,
    flex: 1,
    // padding: 15,

    // justifyContent: 'space-between',
  },
  submitButton: {
    paddingVertical: 13,
    backgroundColor: '#ffb605',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
    width: '90%',
  },
});
