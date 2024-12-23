import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';
// const btnHeight = RFValue(40);

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Mihir Parmar');
  const [email, setEmail] = useState('mihirparmar.0511@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [process, setProcess] = useState(false);
  const db = firestore();

  const onGoogleSignUp = async () => {
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

      // console.log('User data to save: ', userData);

      // await firestore().collection('Users').doc(response.user.uid).set(userData);
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
        navigation.dispatch(StackActions.replace('BTab'));
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
      setMessage('Google SignIn canceled with this error : ' + error.message);
    } finally {
      setProcess(false);
    }
  };

  // Function to validate password
  const validatePassword = () => {
    const isValid = password.length >= 8;
    setIsValidPassword(isValid);
    return isValid;
  };

  // PushNotification - Start;
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    // console.log('This is my FcmToken: ', fcmToken);
  }, [fcmToken]);

  const checkFcm = async () => {
    try {
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

  const handleSignup = async () => {
    try {
      if (email.length > 0 && password.length > 0 && name.length > 0) {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password
        );
        setMessage('');

        const userData = {
          id: response.user.uid,
          name: name,
          email: email,
          fcm: fcmToken,
        };

        console.log('User data to save: ', userData);
        await firestore()
          .collection('Users')
          .doc(response.user.uid)
          .set(userData);
        console.log('User data saved successfully');

        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        Alert.alert('Please verify your Email');
        navigation.navigate(SCREENS.LogIn);
      } else {
        Alert.alert('Please add Data');
      }
    } catch (err) {
      console.log('Error saving user data to Firestore:', err);
      setMessage(err.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Logo</Text>
          <Text style={styles.textStyle}>Create your account</Text>
          <Text style={styles.inputText}>Name</Text>
          <View style={styles.inputStyle}>
            <Image source={ICONS.Name} style={styles.searchIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.inputText}>Email</Text>
          <View style={styles.inputStyle}>
            <Image
              source={ICONS.Email}
              style={{ ...styles.searchIcon, tintColor: COLORS.IconTintColor }}
            />
            <TextInput
              style={styles.textInput}
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
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              onBlur={validatePassword}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginLeft: 'auto', marginStart: 15 }}
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
          {message != '' ? (
            <View style={{ marginTop: 20, marginBottom: -15 }}>
              <Text style={{ color: COLORS.Red }}>{message}</Text>
            </View>
          ) : null}

          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.submitButton}
              onPress={handleSignup}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.White,
                  fontFamily: FONTS.Bold,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              // backgroundColor:COLORS.Blue,
              justifyContent: 'center',
              alignItems: 'center',
              height: RFValue(70),
              // marginBottom: 'auto',
            }}
          >
            <TouchableOpacity activeOpacity={0.7} onPress={onGoogleSignUp}>
              {process ? (
                <ActivityIndicator size="small" color="black" />
              ) : (
                <Image
                  style={{
                    width: RFValue(220),
                    height: RFValue(40),
                    backgroundColor: COLORS.White,
                    // width: btnHeight * 4.5,
                    // height: btnHeight,
                  }}
                  source={ICONS.Google_SignUp}
                  // resizeMode="contain"
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
            flex: 1,
            // backgroundColor: COLORS.Red,
          }}
        >
          <Text
            style={{
              color: COLORS.Grey,
            }}
          >
            Already have an Account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.LogIn)}
          >
            <Text
              style={{
                color: COLORS.ThemeColor,
                fontFamily: FONTS.Bold,
                marginStart: 5,
              }}
            >
              Sign in
            </Text>
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
    paddingHorizontal: 15,
    // backgroundColor: COLORS.White,
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
    marginTop: Platform.OS === 'ios' ? '20%' : '35%',
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
  textInput: { flex: 1, color: COLORS.Black },
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
