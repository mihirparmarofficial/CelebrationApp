import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';
import BTab from './BTab';

const OrderFullReceipt = ({navigation}) => {
  let [count, setCount] = useState(1);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15,
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

        <View
          style={{
            flex: 1,
            // borderColor: 'green',
            // borderWidth: 1,
            marginBottom: -30,
          }}>
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 15,
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
          <View
            style={{
              height: '35%',
              width: '100%',
              // borderColor: 'red',
              // borderWidth: 2,
              marginTop: 8,
              paddingHorizontal: 15,
            }}>
            <Image
              source={require('../common/image/OD-GBtheme.png')}
              style={{width: '100%', flex: 1}}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator="false">
            <View
              style={{
                // borderColor: 'red',
                // borderWidth: 2,
                flex: 1,
                backgroundColor: '#f9f9f9',
                paddingBottom: 0,
              }}>
              <View
                style={{
                  // borderColor: 'red',
                  // borderWidth: 2,
                  paddingTop: 20,
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{fontWeight: '500', fontSize: 18}}>
                    Golden - Blue Theme
                  </Text>
                  <Text style={{color: 'grey', fontSize: 13}}>Qty : 1 </Text>
                </View>
                <Text style={{fontWeight: '500', color: '#ffb605'}}>
                  ₹ 2000.00
                </Text>
              </View>

              <View
                style={{
                  // borderColor: 'blue',
                  // borderWidth: 2,
                  paddingTop: 10,
                  paddingLeft: 15,
                }}>
                <Text style={{fontWeight: '500', fontSize: 16}}>
                  Description
                </Text>
              </View>

              <View
                style={{
                  // borderColor: 'blue',
                  // borderWidth: 2,
                  paddingTop: 5,
                  paddingStart: 15,
                  paddingEnd: 15,
                }}>
                <Text
                  style={{color: 'grey', textAlign: 'justify', fontSize: 13}}>
                  Best birthday decoration ideas involve use of lights.
                  Attractive party lights not only heighten the overall
                  atmosphere but also set the mood. From savvy lantern fairy
                  lights to smart mood lights, there are many options, when it
                  comes to using lights as birthday decorations ideas. One can
                  hang lanterns on the corner of the wall or keep them on the
                  table.
                </Text>
              </View>

              <View
                style={{
                  paddingTop: 15,
                  paddingHorizontal: 15,
                }}>
                <Text style={{fontWeight: '500', fontSize: 16}}>
                  Customize Details
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  paddingTop: 5,
                  paddingStart: 15,
                }}>
                <Text style={{fontSize: 11, color: 'grey'}}>
                  Name: Mihir Parmar
                </Text>
                <Text style={{fontSize: 11, color: 'grey'}}>Number: 2</Text>
                <Text style={{fontSize: 11, color: 'grey'}}>
                  Requirement: Blue balloon
                </Text>
              </View>
              <View
                style={{
                  paddingTop: 15,
                  paddingHorizontal: 15,
                }}>
                <Text style={{fontWeight: '500', fontSize: 16}}>
                  Delivery Info
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  paddingTop: 5,
                  paddingStart: 15,
                }}>
                <Text style={{fontSize: 11, color: 'grey'}}>
                  Mehul Parmar | +91 70438 62036
                </Text>
                {/* <Text style={{fontSize: 11, color: 'grey'}}> </Text> */}
                <Text style={{fontSize: 11, color: 'grey'}}>
                  D-501, Royal heaven, Surat.
                </Text>
              </View>
              <View
                style={{
                  paddingTop: 15,
                  paddingHorizontal: 15,
                }}>
                <Text style={{fontWeight: '500', fontSize: 16}}>
                  Payment Details
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  paddingTop: 5,
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 11, color: 'grey'}}>Pre Payment </Text>
                {/* <Text style={{fontSize: 11, color: 'grey'}}> </Text> */}
                <Text style={{fontSize: 14, color: 'grey'}}>₹ 500.00 </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderFullReceipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
  },
  submitButton: {
    paddingVertical: 13,
    backgroundColor: '#ffb605',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
    marginBottom: 10,
    marginHorizontal: 15,
  },
});
