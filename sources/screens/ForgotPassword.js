import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';

const ForgotPassword = ({navigation}) => {
  const [formData, setFormData] = useState({
    mobile: '7043862036',
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Logo</Text>
        <Text style={styles.textStyle}>Forgot Password</Text>
        <Text style={styles.inputText}>Mobile Number</Text>
        <View style={styles.inputStyle}>
          <Image
            source={require('../common/image/call.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={{width: '92%'}}
            value={formData.mobile}
            onChangeText={username =>
              setFormData({...formData, mobile: username})
            }
            // onChangeText={txt => setFormData((val) => {
            //   return {...val,firstName: txt}
            // })}
            placeholder={'Mobile Number'}
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            navigation.navigate('OTP', {
              formData,
            })
          }>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
            Send OTP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  heading: {
    lineHeight: 41.15,
    fontSize: 34,
    fontFamily: FONTS.Regular,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 50,
    color: '#ffb605',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: FONTS.Regular,
    fontSize: 20,
    lineHeight: 24,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  inputStyle: {
    height: 44,
    padding: 10,
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
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 5,
  },
  submitButton: {
    paddingVertical: 13,
    marginTop: 70,
    backgroundColor: '#ffb605',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
  },
});
