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
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';

const SignUp = ({navigation, focused}) => {
  const [formData, setFormData] = useState({
    name: 'Mihir Parmar',
    mobile: '7043862036',
    password: 'Parmar1234',
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Logo</Text>
        <Text style={styles.textStyle}>Create your account</Text>
        <Text style={styles.inputText}>Name</Text>
        <View style={styles.inputStyle}>
          <Image
            source={require('../common/image/name.png')}
            // source={{
            //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmazNmTmT_G-oruF16bwcsEqf__9ZM9cKX1V2AF7r_sQ&s',
            // }}
            style={styles.searchIcon}
          />
          <TextInput
            style={{width: '92%'}}
            value={formData.name}
            onChangeText={txt => setFormData({...formData, name: txt})}
            placeholder={'Name'}
          />
        </View>
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
              source={
                focused
                  ? require('../common/image/eye.png')
                  : require('../common/image/closeEye.png')
              }
              style={{...styles.searchIcon}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() =>
              navigation.navigate('SignOTP', {
                formData,
              })
            }>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Sign up
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
            Already have an Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={{color: '#ffb605', fontWeight: 'bold'}}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
    paddingTop: 0,
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
