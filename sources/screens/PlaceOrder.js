import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';
const PlaceOrder = ({navigation, route}) => {
  const {formData} = route.params;

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
              marginLeft: '28%',
              fontWeight: '600',
            }}>
            Place Order
          </Text>
        </View>
        <View
          style={{
            marginTop: 25,
            paddingHorizontal: 15,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Delivery info</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#cfcfcf',
            borderRadius: 15,
            padding: 10,
            margin: 15,
            marginTop: 5,
          }}>
          <Text style={{color: 'grey'}}>
            {formData.name ?? 'YourName'}
            {'\n'}
            +91 {formData.num ?? 'YourNumber'}
            {'\n'}
            {formData.info + '\n'}
            {formData.town + '\n'}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangeAddress')}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#ffb605',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              marginTop: 5,
            }}>
            <Text style={{color: '#ffb605', fontWeight: '500'}}>
              Change or Add New Address
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // borderColor: 'red',
            // borderWidth: 1,
            borderTopColor: '#eeeeee',
            borderTopWidth: 2,
            marginBottom: 30,
            marginBottom: 0,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View style={{padding: 15}}>
            <Text style={{fontWeight: '500', fontSize: 16}}>Price Details</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{marginVertical: 8, fontSize: 11, color: 'grey'}}>
                Subtotal
              </Text>
              <Text style={{marginVertical: 8, fontSize: 11}}>₹ 2000.00</Text>
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
              <Text style={{marginVertical: 8, fontSize: 11}}>₹ 2000.00</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => navigation.navigate('Payment')}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
