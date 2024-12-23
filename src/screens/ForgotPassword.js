import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const ForgotPassword = ({ navigation }) => {
  const [formData, setFormData] = useState({
    mobile: '7043862036',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Logo</Text>
        <Text style={styles.textStyle}>Forgot Password</Text>
        <Text style={styles.inputText}>Mobile Number</Text>
        <View style={styles.inputStyle}>
          <Image source={ICONS.Call} style={styles.searchIcon} />
          <TextInput
            style={{ flex: 1, color: COLORS.Black }}
            value={formData.mobile}
            onChangeText={(username) =>
              setFormData({ ...formData, mobile: username })
            }
            // onChangeText={txt => setFormData((val) => {
            //   return {...val,firstName: txt}
            // })}
            placeholder={'Mobile Number'}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.submitButton}
          onPress={() =>
            navigation.navigate(SCREENS.OTP, {
              formData,
            })
          }
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.White,
              fontFamily: FONTS.Bold,
            }}
          >
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    lineHeight: 41.15,
    fontSize: 34,
    fontFamily: FONTS.Bold,
    textAlign: 'center',
    marginVertical: 50,
    color: COLORS.ThemeColor,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    marginVertical: 10,
    fontFamily: FONTS.Bold,
    color: COLORS.Black,
  },
  inputStyle: {
    height: 44,
    paddingHorizontal: 10,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: FONTS.Medium,
    marginTop: 20,
    marginBottom: 5,
    color: COLORS.Black,
  },
  submitButton: {
    paddingVertical: 13,
    marginTop: 70,
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
  },
});
