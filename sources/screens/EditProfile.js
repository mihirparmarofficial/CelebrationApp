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

const EditProfile = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: 'Mihir Parmar',
    num: '7043862036',
    info: 'D-501, Royal Heaven Apartment',
    town: 'Surat',
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
              marginLeft: '30.5%',
              fontWeight: '600',
            }}>
            Edit Profile
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 30}}>
          <Image
            style={{height: 130, width: 130}}
            source={require('../common/image/ProfilePic2.png')}
          />
        </View>

        <View style={{padding: 15, paddingTop: -10}}>
          <View>
            <Text style={styles.inputText}>Name</Text>
            <View style={styles.inputStyle}>
              <Image
                source={require('../common/image/name.png')}
                style={styles.searchIcon}
              />
              <TextInput
                style={{width: '99%'}}
                value={formData.name}
                onChangeText={txt => setFormData({...formData, name: txt})}
                placeholder={'Mihir Parmar'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Mobile Number</Text>
            <View style={styles.inputStyle}>
              <Image
                source={require('../common/image/call.png')}
                style={styles.searchIcon}
              />
              <TextInput
                style={{width: '99%'}}
                value={formData.num}
                onChangeText={txt => setFormData({...formData, num: txt})}
                placeholder={'7043862036'}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            // borderColor: 'cyan',
            // borderWidth: 2,
            marginTop: 'auto',
          }}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() =>
              navigation.navigate('Verification', {
                formData,
              })
            }>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Save Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

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
});
