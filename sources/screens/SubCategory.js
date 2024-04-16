import React, {useState, useRef} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';
import RBSheet from 'react-native-raw-bottom-sheet';

const SubCategory = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      title: 'Blue Theme Party',
      img: require('../common/image/SB1.png'),
      price: '₹ 500.00',
      onPress: () => {
        navigation.navigate('CustomDecoration');
      },
    },
    {
      id: '2',
      title: 'Pink Theme Party',
      img: require('../common/image/SB2.png'),
      price: '₹ 1500.00',
    },
    {
      id: '3',
      title: 'Red Theme Party',
      img: require('../common/image/SB3.png'),
      price: '₹ 1000.00',
    },
    {
      id: '4',
      title: 'Golden-Blue Theme',
      img: require('../common/image/SB4.png'),
      price: '₹ 2000.00',
      onPress: () => {
        navigation.navigate('OrderDetails');
      },
    },
    {
      id: '5',
      title: 'Mickey mouse Theme',
      img: require('../common/image/SB5.png'),
      price: '₹ 2500.00',
    },
    {
      id: '6',
      title: 'Pink Theme Party',
      img: require('../common/image/SB6.png'),
      price: '₹ 1600.00',
    },
    {
      id: '7',
      title: 'Baloon Party',
      img: require('../common/image/classic.png'),
      price: '₹ 2100.00',
    },
    {
      id: '8',
      title: 'Golden-Blue Theme',
      img: require('../common/image/welcome.png'),
      price: '₹ 1200.00',
    },
  ];
  const refRBSheet = useRef();
  const [selectedRadio, setselectedRadio] = useState(1);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        style={{
          borderWidth: 1,
          borderRadius: 15,
          borderColor: '#C5C5C5',
          alignItems: 'center',
          backgroundColor: '#fff',
          marginVertical: 7,
          marginStart: 2,
          marginEnd: 13,
        }}>
        <Image style={{height: 155, width: 168}} source={item.img} />
        <View
          style={{
            width: '95%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
              paddingLeft: 6,
              padding: 2,
            }}>
            <Text
              style={{
                color: 'grey',
                paddingTop: 5,
                paddingBottom: 5,
                fontSize: 11,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                paddingBottom: 5,
                fontWeight: 400,
              }}>
              {item.price}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              padding: 7,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: 10,
            }}>
            <TouchableOpacity
            // onPress={() => goBack()}
            >
              <Image
                source={require('../common/image/Purchase.png')}
                style={{
                  height: 23,
                  width: 23,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#f9f9f9'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../common/image/arrow-left.png')}
              style={{
                flex: 1,
                height: 20,
                width: 20,
                alignItems: 'flex-start',
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: FONTS.Regular,
              fontSize: 20,
              marginLeft: '26%',
              fontWeight: '600',
              flex: 1,
            }}>
            Kids Birthday
          </Text>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image
              source={require('../common/image/Setting.png')}
              style={{flex: 1, height: 20, width: 20, alignItems: 'flex-end'}}
            />
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheet}
            closeOnPressMask={true}
            height={200}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0,0,0,0.5)',
              },
              draggableIcon: {
                backgroundColor: '#FFB60F',
              },
              container: {
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
              },
            }}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text style={{fontWeight: 500, fontSize: 24}}>Price</Text>
              <View style={{justifyContent: 'flex-end'}}>
                <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: '#ffb605',
                    }}>
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 1, paddingLeft: 10}}>
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
                    <Text style={styles.radioFont}>Low - High</Text>
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
                    <Text style={styles.radioFont}>High - Low</Text>
                  </View>
                </TouchableOpacity>
                {/* <RadioButton.Group
                  onValueChange={newValue => setChecked(newValue)}
                  value={checked}>
                  <RadioButton.Item label="First" value="first" />
                  <RadioButton.Item label="Second" value="second" />
                </RadioButton.Group> */}
              </View>
            </View>
          </RBSheet>
        </View>

        <View style={{marginTop: 10, paddingLeft: 15, paddingRight: 15}}>
          <FlatList
            contentContainerStyle={{paddingBottom: 60}}
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  radioBtn: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderColor: '#cfcfcf',
    // borderColor: '#FFB605',
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioPressed: {
    width: 25,
    height: 25,
    borderRadius: 20,
    // borderColor: '#A0A0A0',
    borderColor: '#FFB605',
    borderWidth: 2,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioFont: {
    fontSize: 18,
    fontWeight: '400',
    margin: 10,
  },
  radioFill: {
    backgroundColor: '#FFB605',
    // backgroundColor: '#A0A0A0',
    width: 14,
    height: 14,
    borderRadius: 20,
    // borderColor: 'black',
    // borderWidth: 10,
  },
});
