import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const Notification = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    num: '',
    info: '',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={ICONS.GoBack}
              style={{ height: 20, width: 20, alignItems: 'flex-start' }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: '27%',
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
            }}
          >
            Notifications
          </Text>
        </View>

        <View
          style={{
            padding: 15,
            flex: 1,
            alignItems: 'center',
          }}
        >
          {/* <TouchableOpacity 
          onPress={() => navigation.navigate('Notification')}
          style={styles.box}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{textAlign: 'left'}}>Package from your order</Text>
              <Text
                style={{
                  marginHorizontal: 4,
                  color: COLORS.ThemeColor,
                 fontFamily: FONTS.Bold,
                 color: COLORS.Black,
                }}>
                #1985462
              </Text>
              <Text> has arrived.</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.BTab)}
            style={styles.box}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  textAlign: 'left',
                  color: COLORS.Black,
                  fontFamily: FONTS.Regular,
                }}
              >
                Make Your First Order with
              </Text>
              <Text
                style={{
                  marginHorizontal: 4,
                  color: COLORS.ThemeColor,
                  fontFamily: FONTS.Bold,
                }}
              >
                50%
              </Text>
              <Text
                style={{
                  color: COLORS.Black,
                  fontFamily: FONTS.Regular,
                }}
              >
                Flat Discount.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.BTab)}
            style={styles.box}
          >
            <Text
              style={{
                textAlign: 'left',
                color: COLORS.Black,
                fontFamily: FONTS.Regular,
              }}
            >
              Account Created Successfully.
            </Text>
            <Text
              style={{
                color: COLORS.Grey,
                fontSize: 11,
                textAlign: 'left',
                fontFamily: FONTS.Regular,
              }}
            >
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
    //     borderColor: COLORS.Red,
    //     borderWidth: 2,
    flex: 1,
    // padding: 15,

    // justifyContent: 'space-between',
  },
  submitButton: {
    paddingVertical: 13,
    backgroundColor: COLORS.ThemeColor,
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
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
    flexDirection: 'row',
  },
  inputText: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
  },
  box: {
    width: '100%',
    padding: 10,
    minHeight: 55,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    borderLeftColor: COLORS.ThemeColor,
    borderLeftWidth: 3,
    fontFamily: FONTS.Regular,
    justifyContent: 'center',
    marginTop: 10,
  },
});
