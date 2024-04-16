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
const PlaceOrder = ({navigation}) => {
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
              marginLeft: '20%',
              fontWeight: '600',
            }}>
            Pay with My Code
          </Text>
        </View>
        <View
          style={{
            // borderColor: 'red',
            // borderWidth: 1,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 170, width: 170}}
            source={require('../common/image/QR.png')}
          />
          <View
            style={{
              width: 220,
              //   borderColor: 'red',
              //   borderWidth: 1,
            }}>
            <Text
              style={{
                color: 'grey',
                fontSize: 20,
                marginTop: 20,
                textAlign: 'center',
                // fontWeight: '900',
              }}>
              Scan this QR code to send payment
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 'auto',
          }}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('MyOrder')}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Download
            </Text>
          </TouchableOpacity>
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
