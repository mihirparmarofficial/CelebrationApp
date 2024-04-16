import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';

const CustomDecoration = ({navigation}) => {
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
              marginLeft: '26%',
              fontWeight: '600',
            }}>
            Order Details
          </Text>
        </View>
        <View
          style={{
            height: '45%',
            width: '100%',
            // borderColor: 'red',
            // borderWidth: 2,
            marginTop: 12,
          }}>
          <Image
            source={require('../common/image/OD-BTparty.png')}
            style={{width: '100%', flex: 1}}
          />
        </View>
        <View
          style={{
            // borderColor: 'red',
            // borderWidth: 2,
            flex: 1,
            marginTop: -35,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#f9f9f9',
          }}>
          <View
            style={{
              // borderColor: 'red',
              // borderWidth: 2,
              paddingTop: 20,
              paddingLeft: 15,
            }}>
            <Text style={{fontWeight: '500', fontSize: 18}}>
              Blue Theme Party
            </Text>
          </View>

          <View
            style={{
              // borderColor: 'red',
              // borderWidth: 2,
              paddingTop: 8,
              paddingStart: 15,
              paddingEnd: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '500', color: '#ffb605'}}>₹ 500.00</Text>
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

          <View
            style={{
              // borderColor: 'blue',
              // borderWidth: 2,
              paddingTop: 10,
              paddingLeft: 15,
            }}>
            <Text style={{fontWeight: '500', fontSize: 16}}>Description</Text>
          </View>

          <View
            style={{
              // borderColor: 'blue',
              // borderWidth: 2,
              paddingTop: 5,
              paddingStart: 15,
              paddingEnd: 15,
            }}>
            <Text style={{color: 'grey', textAlign: 'justify', fontSize: 13}}>
              Best birthday decoration ideas involve use of lights. Attractive
              party lights not only heighten the overall atmosphere but also set
              the mood. From savvy lantern fairy lights to smart mood lights,
              there are many options, when it comes to using lights as birthday
              decorations ideas. One can hang lanterns on the corner of the wall
              or keep them on the table as they make up for simple birthday
              decorations. Fairy lights, the small white or multi-coloured light
              strings can be used artistically to add a glowing touch to your
              party décor. Glittering fairy lights can be draped around curtains
              or balconies, plants, or simply weave strands of lights throughout
              the floral centrepieces.
            </Text>
          </View>

          <View
            style={{
              // borderColor: 'blue',
              // borderWidth: 2,
              paddingTop: 15,
              paddingLeft: 15,
            }}>
            <Text style={{fontWeight: '500', fontSize: 16}}>
              Delivery & Service
            </Text>
          </View>

          <View
            style={{
              // borderWidth: 1,
              // borderColor: 'blue',
              flex: 1,
              paddingTop: 5,
              paddingStart: 15,
            }}>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <Image
                source={require('../common/image/Truck.png')}
                style={{height: 14, width: 16}}
              />
              <Text style={{marginLeft: 7, fontSize: 11, color: 'grey'}}>
                Get it between Sun, 15 Jan - Wed,18 Jan
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: -2,
              }}>
              <Image
                source={require('../common/image/Pay.png')}
                style={{width: 18, height: 15}}
              />
              <Text style={{marginLeft: 7, fontSize: 11, color: 'grey'}}>
                Pay on delivery available
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // borderColor: 'cyan',
            // borderWidth: 2,
            marginBottom: -20,
            marginTop: 'auto',
          }}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('CustomOrder')}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Customize Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDecoration;

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
