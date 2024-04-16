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

const MyOrder = ({navigation}) => {
  const [selectedScreen, setselectedScreen] = useState(true);
  let [count, setCount] = useState(1);
  const [select, setSelect] = useState('clicked');
  // const backgroundColor = setSelect ? '#ffb605' : null;
  // const backgroundColor = setSelect ? '#ffb605' : null;

  let DATA = [
    {
      id: '1',
      title: 'Golden - Blue Theme',
      text: 'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',
      img: require('../common/image/GBbirthday.png'),
      price: '₹ 2000.00',
      btn: 'Order Now',
    },
  ];

  const renderItem1 = ({item}) => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          borderWidth: 2,
          borderRadius: 15,
          borderColor: '#EEEEEE',
          padding: 8,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            height: 95,
            width: 95,
            alignItems: 'flex-start',
            borderRadius: 5,
          }}
          source={item.img}
        />
        <View
          style={{
            // borderWidth: 3,
            // borderColor: 'red',
            width: '73.5%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              // borderColor: 'green',
              // borderWidth: 3,
              width: '65%',
            }}>
            <Text
              style={{
                color: 'black',
                padding: 8,
                textAlign: 'left',
                fontSize: 13,
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
                fontSize: 9,
                fontFamily: FONTS.Regular,
              }}>
              {item.text}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                fontWeight: 500,
                fontFamily: FONTS.Regular,
                paddingTop: 15,
                paddingHorizontal: 8,
              }}>
              {item.price}
            </Text>
          </View>
          <View
            style={{
              // borderColor: 'yellow',
              // borderWidth: 3,
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginStart: '10%',
              // alignItems: 'flex-end',
            }}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  setData([]);
                }}>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../common/image/trash.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // paddingVertical: 10,
                width: 70,
                marginStart: -15,
                // padding: 10,
                // borderColor: 'red',
                // borderWidth: 2,
              }}>
              <View
                style={{
                  // borderColor: 'green',
                  // borderWidth: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => setCount(Math.max(count - 1, 1))}>
                  <Image
                    source={require('../common/image/Minus.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
                <Text style={{fontWeight: '500', marginHorizontal: 10}}>
                  {count}
                </Text>
                <TouchableOpacity
                  onPress={() => setCount(Math.min(count + 1, 5))}>
                  <Image
                    source={require('../common/image/Add.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderItem2 = ({item}) => {
    return (
      <View
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
              height: 95,
              width: 95,
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
                  marginBottom: 5,
                  // borderWidth: 1,
                  // borderColor: 'black',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 10,
                    fontFamily: FONTS.Regular,
                  }}>
                  {item.text}
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
              <TouchableOpacity>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../common/image/arrow-right.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // borderColor: 'green',
            // borderWidth: 1,
            height: 40,
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CancelOrder')}
            style={{
              width: '49%',
              borderColor: '#ffb605',
              borderWidth: 1.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#ffb605', fontSize: 15, fontWeight: '500'}}>
              Cancel Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackOrder')}
            style={{
              width: '49%',
              borderColor: '#ffb605',
              borderWidth: 1.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#ffb605', fontSize: 15, fontWeight: '500'}}>
              Track Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
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
              marginLeft: '19.5%',
              fontFamily: FONTS.Regular,
              fontSize: 20,
              fontWeight: '600',
            }}>
            My Order
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              source={require('../common/image/notification.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 17,
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#ffb605',
              borderWidth: 1.4,
              height: 50,
              borderRadius: 12,
            }}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', height: 48}}>
                <TouchableOpacity
                  onPress={() => setSelect('clicked')}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    width: '50%',
                    alignItems: 'center',
                    backgroundColor: select === 'clicked' ? '#ffb605' : null,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: select === 'clicked' ? '#f9f9f9' : 'black',
                      fontSize: 17,
                      fontWeight: select === 'clicked' ? '700' : '500',
                    }}>
                    New Order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelect('checked')}
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    backgroundColor: select === 'checked' ? '#ffb605' : null,
                    justifyContent: 'center',
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: select === 'checked' ? '#f9f9f9' : 'black',
                      fontSize: 17,
                      fontWeight: select === 'checked' ? '700' : '500',
                    }}>
                    Ongoing Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {select === 'clicked' ? (
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                // borderColor: 'green',
                // borderWidth: 4,
              }}>
              <View style={{paddingHorizontal: 15}}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={DATA}
                  renderItem={renderItem1}
                  keyExtractor={item => item.id}
                  contentContainerStyle={{paddingTop: 13, paddingBottom: 10}}
                />
              </View>
            </View>
            <View
              style={{
                borderTopColor: '#EEEEEE',
                borderTopWidth: 2,
                marginBottom: 20,
                // borderColor: 'red',
                // borderWidth: 4,
              }}>
              <View style={{padding: 15}}>
                <Text style={{fontWeight: '500', fontSize: 16}}>
                  Price Details
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{marginVertical: 8, fontSize: 11, color: 'grey'}}>
                    Subtotal
                  </Text>
                  <Text style={{marginVertical: 8, fontSize: 11}}>
                    ₹ 2000.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 11, color: 'grey'}}>Discount</Text>
                  <Text style={{fontSize: 11}}>₹ 0.00</Text>
                </View>

                <View
                  style={{
                    marginTop: 10,
                  }}>
                  <Image
                    source={require('../common/image/Line.png')}
                    style={{width: '100%', height: 1}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{marginVertical: 8, fontSize: 14}}>Total</Text>
                  <Text style={{marginVertical: 8, fontSize: 11}}>
                    ₹ 2000.00
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => navigation.navigate('ContactDetails')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Save Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {select === 'checked' ? (
          <View>
            <View>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 45, width: 45}}
                  source={require('../common/image/ConfirmOrder.png')}
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
                    <Text style={{color: '#55ad52', fontWeight: '500'}}>
                      Confirmed
                    </Text>
                    <Text style={{color: 'grey', fontSize: 11}}>
                      Arriving by Sat, 06 Jan
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
        ) : null}
        {/* {selectedScreen == 2 ? (
          <View>
            <View
              style={{
                marginHorizontal: 15,
                marginTop: 17,
                marginBottom: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: '#ffb605',
                  borderWidth: 1.4,
                  height: 50,
                  borderRadius: 12,
                }}>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row', height: 48}}>
                    <TouchableOpacity
                      onPress={() => setselectedScreen(2)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        width: '50%',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 17,
                          fontWeight: '500',
                        }}>
                        New Order
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        borderWidth: 1,
                        borderColor: '#ffb605',
                        borderRadius: 10,
                        backgroundColor: '#ffb605',
                        justifyContent: 'center',
                        width: '50%',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#f9f9f9',
                          fontSize: 17,
                          fontWeight: '600',
                        }}>
                        Ongoing Order
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 45, width: 45}}
                  source={require('../common/image/ConfirmOrder.png')}
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
                    <Text style={{color: '#55ad52', fontWeight: '500'}}>
                      Confirmed
                    </Text>
                    <Text style={{color: 'grey', fontSize: 11}}>
                      Arriving by Fri, 12 April
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
        ) : null} */}

        {/* {true ? null : null} */}
      </View>
    </SafeAreaView>
  );
};

export default MyOrder;

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
