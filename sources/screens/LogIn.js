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
  KeyboardAvoidingView,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts'; // Example using React Native Elements

const LogIn = ({navigation}) => {
  const [formData, setFormData] = useState({
    mobile: '7043862036',
    password: 'Parmar1234',
  });

  //  useEffect(() => {
  //   console.log('userName ===> ', userName)
  //  }, [userName])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Logo</Text>
        <Text style={styles.textStyle}>Login to your account</Text>
        <Text style={styles.inputText}>Mobile Number</Text>
        <View style={styles.inputStyle}>
          <Image
            source={require('../common/image/call.png')}
            // source={{
            //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmazNmTmT_G-oruF16bwcsEqf__9ZM9cKX1V2AF7r_sQ&s',
            // }}
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
        <Text style={styles.inputText}>Password</Text>
        <View style={styles.inputStyle}>
          <Image
            source={require('../common/image/lock.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={{width: '80%'}}
            value={formData.password}
            onChangeText={txt => setFormData({...formData, password: txt})}
            placeholder={'Password'}
          />
          <TouchableOpacity style={{marginLeft: 'auto'}}>
            <Image
              source={require('../common/image/eye.png')}
              style={{...styles.searchIcon}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{textAlign: 'right', color: '#ffb605', marginTop: 5}}
          onPress={() =>
            navigation.navigate('ForgotPassword', {
              formData,
            })
          }>
          <Text
            style={{
              textAlign: 'right',
              color: '#ffb605',
              marginTop: 5,
              fontWeight: 'bold',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() =>
              navigation.navigate('BTab', {
                formData,
              })
            }>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 'auto',
          }}>
          <Text
            style={{
              color: '#A0A0A0',
            }}>
            Don't have account?
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignUp', {
                formData,
              })
            }>
            <Text style={{color: '#ffb605', fontWeight: 'bold'}}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
    // paddingTop: 0,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  heading: {
    // lineHeight: '41.15',
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
  submitButton: {
    paddingVertical: 13,
    marginTop: 80,
    backgroundColor: '#ffb605',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
  },
});
