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

const Notification = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    num: '',
    info: '',
  });

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
              marginLeft: '27%',
              fontWeight: '600',
            }}>
            Notifications
          </Text>
        </View>

        <View
          style={{
            padding: 15,
            flex: 1,
            alignItems: 'center',
          }}>
          {/* <TouchableOpacity 
          onPress={() => navigation.navigate('Notification')}
          style={styles.box}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{textAlign: 'left'}}>Package from your order</Text>
              <Text
                style={{
                  marginHorizontal: 4,
                  color: '#FFB605',
                  fontWeight: 'bold',
                }}>
                #1985462
              </Text>
              <Text> has arrived.</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('BTab')}
            style={styles.box}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{textAlign: 'left'}}>
                Make Your First Order with
              </Text>
              <Text
                style={{
                  marginHorizontal: 4,
                  color: '#FFB605',
                  fontWeight: 'bold',
                }}>
                50%
              </Text>
              <Text>Flat Discount.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('BTab')}
            style={styles.box}>
            <Text style={{textAlign: 'left'}}>
              Account Created Successfully.
            </Text>
            <Text style={{color: 'grey', fontSize: 11, textAlign: 'left'}}>
              You've created account successfully.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

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
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  inputStyle: {
    width: '100%',
    height: 44,
    padding: 10,
    // marginVertical: 10,
    borderColor: '#C5C5C5',
    borderWidth: 1.3,
    borderRadius: 10,
    color: 'black',
    fontFamily: FONTS.Regular,
    flexDirection: 'row',
  },
  inputText: {
    textAlign: 'left',
    fontFamily: FONTS.Regular,
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: '500',
  },
  box: {
    width: '100%',
    padding: 10,
    minHeight: 55,
    borderColor: '#C5C5C5',
    borderWidth: 1.3,
    borderRadius: 10,
    color: 'black',
    borderLeftColor: '#ffb605',
    borderLeftWidth: 3,
    fontFamily: FONTS.Regular,
    justifyContent: 'center',
    marginTop: 10,
  },
});
