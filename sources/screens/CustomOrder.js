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

const CustomOrder = ({navigation}) => {
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
              marginLeft: '25.5%',
              fontWeight: '600',
            }}>
            Custom Order
          </Text>
        </View>

        <View style={{padding: 15}}>
          <View>
            <Text style={styles.inputText}>Custom Name</Text>
            <View style={styles.inputStyle}>
              <TextInput
                style={{width: '99%'}}
                value={formData.name}
                onChangeText={txt => setFormData({...formData, name: txt})}
                placeholder={'Mihir'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Custom Number</Text>
            <View style={styles.inputStyle}>
              <TextInput
                style={{width: '99%'}}
                value={formData.num}
                onChangeText={txt => setFormData({...formData, num: txt})}
                placeholder={'2'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Add Your Requirement</Text>
            <View
              style={{
                width: '100%',
                padding: 10,
                height: 100,
                borderColor: '#C5C5C5',
                borderWidth: 1.3,
                borderRadius: 10,
                color: 'black',

                fontFamily: FONTS.Regular,
              }}>
              <TextInput
                style={{width: '100%'}}
                multiline
                value={formData.info}
                onChangeText={txt => setFormData({...formData, info: txt})}
                placeholder={'Write here...'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Add Your Image</Text>
            <View
              style={{
                width: '100%',
                height: 44,
                padding: 10,
                height: 100,
                borderColor: '#C5C5C5',
                borderWidth: 1.3,
                borderRadius: 10,
                borderStyle: 'dashed',
                color: 'black',
                fontFamily: FONTS.Regular,
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Image
                  source={require('../common/image/Image.png')}
                  style={{height: 20, width: 20}}
                />
                <Text style={{fontSize: 12, marginTop: 5}}>
                  Choose file here ...
                </Text>
                <Text style={{fontSize: 9, color: 'grey'}}>
                  Supports: JPG, PNG
                </Text>
              </TouchableOpacity>
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
            onPress={() => navigation.navigate('MyOrder')}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomOrder;

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
