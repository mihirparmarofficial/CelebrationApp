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
            Cancel Order
          </Text>
        </View>

        <View
          style={{
            padding: 15,
            alignItems: 'center',
            // borderColor: 'black',
            // borderWidth: 1,
            alignItems: 'flex-start',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 17, fontWeight: '500'}}>
            Reason for cancellation
          </Text>
          <Text style={{fontSize: 13, color: 'grey', marginTop: 5}}>
            Please tell us correct reason for cancellation. This information is
            only used to improved our service
          </Text>
        </View>

        <View
          style={{
            padding: 15,

            alignItems: 'center',
            // borderColor: 'black',
            // borderWidth: 1,
            alignItems: 'flex-start',
          }}>
          <View>
            <Text style={{fontSize: 17, fontWeight: '500', marginBottom: 8}}>
              Select Reason :
            </Text>
            <View style={{marginStart: 10}}>
              <TouchableOpacity onPress={() => setselectedRadio(1)}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  {selectedRadio == 1 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 1 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 1 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <Text style={styles.radioFont}>
                    Product not required anymore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setselectedRadio(2)}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {selectedRadio == 2 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 2 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 2 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <Text style={styles.radioFont}>Order by mistake</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setselectedRadio(3)}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {selectedRadio == 3 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 3 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 3 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <Text style={styles.radioFont}>Want to change color</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setselectedRadio(4)}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {selectedRadio == 4 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 4 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 4 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <Text style={styles.radioFont}>Duplicate Order</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              padding: 10,
              height: 100,
              borderColor: '#C5C5C5',
              borderWidth: 1.3,
              borderRadius: 10,
              color: 'black',
              fontFamily: FONTS.Regular,
              marginHorizontal: 15,
            }}>
            <TextInput
              style={{width: '100%'}}
              multiline
              value={formData.info}
              onChangeText={txt => setFormData({...formData, info: txt})}
              placeholder={'Additional Comment'}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 'auto',
          }}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('MyOrder')}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Cancel
            </Text>
          </TouchableOpacity>
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
