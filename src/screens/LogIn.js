import React, { useState, useEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import auth from '@react-native-firebase/auth';
import messaging, { firebase } from '@react-native-firebase/messaging';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { ActivityIndicator } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';
const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('mihirparmar.0511@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [process, setProcess] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const db = firestore();

  GoogleSignin.configure({
    webClientId:
      '370331788490-do6uq5n03g4r7nclmau3algpo4qcp7re.apps.googleusercontent.com',
  });

  const onGoogleSignIn = async () => {
    setProcess(true);

    try {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('Google User Info:', userInfo);
      const idToken = userInfo.data.idToken;

      const userData = {
        id: userInfo.data.user.id,
        name: userInfo.data.user.name,
        email: userInfo.data.user.email,
        fcm: fcmToken,
        isGogole: true,
      };

      await firestore()
        .collection('Users')
        .doc(userInfo.data.user.id)
        .set(userData);
      console.log('User data saved successfully');

      if (idToken) {
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const firebaseUser =
          await auth().signInWithCredential(googleCredential);
        console.log('Firebase User:', firebaseUser);
        // navigation.dispatch(
        //   StackActions.replace(
        //     'BTab',
        //     //   {
        //     //   userName: userInfo.data.user.name,
        //     //   userPhoto: userInfo.data.user.photo,
        //     //   userEmail: userInfo.data.user.email,
        //     // }
        //   ),
        // );
        navigation.navigate(SCREENS.BTab);
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
      setMessage('Google SignIn canceled with this error : ' + error.message);
    } finally {
      setProcess(false);
    }
  };

  // PushNotification - Start;
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    // console.log('This is my FcmToken: ', fcmToken);
  }, [fcmToken]);

  const checkFcm = async () => {
    try {
      // await notifee.requestPermission();
      // await messaging().registerDeviceForRemoteMessages();
      const fcm = await messaging().getToken();
      setFcmToken(fcm);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkFcm();
  }, []);
  // PushNotification - End;

  const validatePassword = () => {
    const isValid = password.length >= 8;
    return isValid;
  };

  const handleSignin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const user = await auth().signInWithEmailAndPassword(email, password);
        console.log(user);
        if (user.user.emailVerified) {
          alert('Your Email is verified');
          navigation.navigate(SCREENS.BTab);
        } else {
          alert('Please verify your Email');
          await auth().currentUser.sendEmailVerification();
          await auth().signOut();
        }
      } else {
        alert('Please add Data');
      }
    } catch (err) {
      console.log(err);
      setMessage(err.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Logo</Text>
          <Text style={styles.textStyle}>Login to your account</Text>

          <Text style={styles.inputText}>Email</Text>
          <View style={styles.inputStyle}>
            <Image
              source={ICONS.Email}
              style={{ ...styles.searchIcon, tintColor: COLORS.IconTintColor }}
            />
            <TextInput
              style={{ flex: 1, color: COLORS.Black }}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.inputText}>Password</Text>
          <View
            style={[styles.inputStyle, !isValidPassword && styles.errorBorder]}
          >
            <Image source={ICONS.Lock} style={styles.searchIcon} />
            <TextInput
              style={{ flex: 1, color: COLORS.Black }}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              onBlur={validatePassword}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginLeft: 'auto', marginStart: 10 }}
              onPressIn={() => setShowPassword(true)}
              onPressOut={() => setShowPassword(false)}
            >
              <Image
                source={showPassword ? ICONS.CloseEye : ICONS.OpenEye}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>

          {!isValidPassword && (
            <Text style={styles.errorText}>
              Password must be at least 8 characters long.
            </Text>
          )}

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              textAlign: 'right',
              color: COLORS.ThemeColor,
              marginTop: 5,
            }}
            onPress={() => navigation.navigate(SCREENS.ForgotPassword)}
          >
            <Text
              style={{
                textAlign: 'right',
                color: COLORS.ThemeColor,
                marginTop: 5,
                fontFamily: FONTS.Bold,
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          {message != '' ? (
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: COLORS.Red }}>{message}</Text>
            </View>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.submitButton}
            onPress={handleSignin}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.White,
                fontFamily: FONTS.Bold,
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>

          <View
            style={{
              // backgroundColor:COLORS.Blue,
              justifyContent: 'center',
              alignItems: 'center',
              height: RFValue(70),
            }}
          >
            <TouchableOpacity activeOpacity={0.7} onPress={onGoogleSignIn}>
              {process ? (
                <ActivityIndicator size="small" color="black" />
              ) : (
                <Image
                  style={{
                    width: RFValue(190),
                    height: RFValue(45),
                    backgroundColor: COLORS.White,
                  }}
                  source={ICONS.Google_SignIn}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // marginTop: 'auto',
            marginBottom: '2%',
            // backgroundColor: COLORS.Red,
            flex: 1,
            gap: 5,
          }}
        >
          <Text
            style={{
              color: COLORS.Grey,
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.SignUp)}
          >
            <Text style={{ color: COLORS.ThemeColor, fontFamily: FONTS.Bold }}>
              Sign Up
            </Text>
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
    paddingHorizontal: 15,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 34,
    fontFamily: FONTS.Bold,
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? '25%' : '40%',
    marginBottom: '8%',
    color: COLORS.ThemeColor,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: FONTS.Bold,
    fontSize: 20,
    lineHeight: 24,
    marginBottom: '4%',
    color: COLORS.Black,
  },
  inputStyle: {
    width: '100%',
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
    fontFamily: FONTS.Medium,
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    color: COLORS.Black,
  },
  submitButton: {
    paddingVertical: 13,
    marginTop: '10%',
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
  },
  errorBorder: {
    borderColor: COLORS.Red,
  },
  errorText: {
    color: COLORS.Red,
    fontSize: 12,
    marginTop: 5,
  },
});
