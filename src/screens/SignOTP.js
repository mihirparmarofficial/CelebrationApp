import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { OtpInput } from 'react-native-otp-entry';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';

const SignOTP = ({ navigation, route }) => {
  const { formData } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Logo</Text>
        <Text style={styles.textStyle}>OTP Verification</Text>
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontFamily: FONTS.Regular,
            color: COLORS.Grey,
            marginBottom: 20,
          }}
        >
          Enter OTP sent to +91 {formData.mobile}
        </Text>
        <OtpInput
          numberOfDigits={4}
          focusColor="black"
          focusStickBlinkingDuration={500}
          //   onTextChange={text => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          theme={{
            containerStyle: {
              paddingHorizontal: 10,
            },
            // inputsContainerStyle: {
            //   backgroundColor: COLORS.Red,
            // },
            pinCodeContainerStyle: {
              height: 50,
              width: 70,
            },
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: 30,
            fontFamily: FONTS.Regular,
            color: COLORS.Grey,
            marginBottom: 20,
          }}
        >
          Didn't receive the OTP?
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate(SCREENS.ForgotPassword, {
              formData,
            })
          }
        >
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.ThemeColor,
              fontFamily: FONTS.Bold,
              marginVertical: -15,
            }}
          >
            Resend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.submitButton}
          onPress={() =>
            navigation.navigate(SCREENS.BTab, {
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
            Verify OTP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    lineHeight: 41.15,
    fontSize: 34,
    textAlign: 'center',
    fontFamily: FONTS.Bold,
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
    padding: 10,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
  },
  inputText: {
    textAlign: 'left',
    fontFamily: FONTS.Regular,
    fontSize: 14,

    marginTop: 20,
    marginBottom: 5,
  },
  submitButton: {
    paddingVertical: 13,
    marginTop: 30,
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
  },
});
