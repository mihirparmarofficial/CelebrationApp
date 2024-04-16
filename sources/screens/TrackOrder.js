import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';

const CancelOrder = ({navigation}) => {
  const [formData, setFormData] = useState({
    info: '',
  });
  const [selectedRadio, setselectedRadio] = useState(1);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
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
            Track Order
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            // alignItems: 'flex-start',
            marginTop: '7%',
            margin: 20,
            // borderColor: 'red',
            // borderWidth: 1,
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{height: 383, width: 350}}
            source={require('../common/image/Track.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CancelOrder;

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
    marginHorizontal: 15,
  },
  radioBtn: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderColor: '#CFCFCF',
    // borderColor: '#FFB605',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioPressed: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderColor: '#FFB605',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioFont: {
    fontSize: 14,
    margin: 10,
  },
  radioFill: {
    backgroundColor: '#FFB605',
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
