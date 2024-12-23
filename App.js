import React, { useEffect } from 'react';
import { LogBox, StatusBar, PermissionsAndroid, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import {
  requestAndroidNotificationPermission,
  requestIosNotificationPermission,
  subscribeTopic,
} from './Notifications';
import { notificationHandler } from './NotificationHandler';
import firebase from '@react-native-firebase/app';
import PushNotification from 'react-native-push-notification';
import 'react-native-gesture-handler';
import { SCREENS } from './src/common/Utils/Screens';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import LogIn from './src/screens/LogIn';
import PlaceOrder from './src/screens/PlaceOrder';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import OTP from './src/screens/OTP';
import ResetPassword from './src/screens/ResetPassword';
import HomeScreen from './src/screens/HomeScreen';
import AllCategory from './src/screens/AllCategory';
import BTab from './src/screens/BTab';
import MyOrder from './src/screens/MyOrder';
import Profile from './src/screens/Profile';
import SubCategory from './src/screens/SubCategory';
import SignOTP from './src/screens/SignOTP';
import OrderDetails from './src/screens/OrderDetails';
import CustomDecoration from './src/screens/CustomDecoration';
import CustomOrder from './src/screens/CustomOrder';
import Notification from './src/screens/Notification';
import ContactDetails from './src/screens/ContactDetails';
import EditProfile from './src/screens/EditProfile';
import CancelOrder from './src/screens/CancelOrder';
import TrackOrder from './src/screens/TrackOrder';
import Payment from './src/screens/Payment';
import OrderReceipt from './src/screens/OrderReceipt';
import OrderFullReceipt from './src/screens/OrderFullReceipt';
import ChangeAddress from './src/screens/ChangeAddress';
import ChangeAddress2 from './src/screens/ChangeAddress2';
import SplashScreen from './src/screens/SplashScreen';
import ContactDetails2 from './src/screens/ContactDetails2';

const Stack = createStackNavigator();

const App = () => {
  LogBox.ignoreAllLogs();

  useEffect(() => {
    createChannels();
    requestNotificationPermission();
    getDeviceToken();
    notificationHandler();
    subscribeTopic('General');
    requestLocationPermission();
  }, []);
console.log()
  const createChannels = () => {
    // PushNotification.createChannel({
    //   channelId: 'fcm_fallback_notification_channel',
    //   channelName: 'Notification',
    // });
  };

  const getDeviceToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      await messaging()
        .getToken()
        .then((token) => {
          console.log("Device's FCM token is : ", token);
        });
    } catch (e) {
      console.log('ERORRFCM==>', e);
    }
  };

  // const $a = '';
  const requestNotificationPermission = async () => {
    if (Platform.OS === 'ios') {
      requestIosNotificationPermission();
    } else {
      requestAndroidNotificationPermission();
    }
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          // Proceed with accessing location
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      try {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (result === RESULTS.GRANTED) {
          console.log('Location permission granted');
          // Proceed with accessing location
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />

        <Stack.Navigator
          initialRouteName={SCREENS.SplashScreen}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={SCREENS.SplashScreen} component={SplashScreen} />
          <Stack.Screen name={SCREENS.BTab} component={BTab} />
          <Stack.Screen name={SCREENS.LogIn} component={LogIn} />
          <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
          <Stack.Screen name={SCREENS.PlaceOrder} component={PlaceOrder} />
          <Stack.Screen
            name={SCREENS.ForgotPassword}
            component={ForgotPassword}
          />
          <Stack.Screen name={SCREENS.OTP} component={OTP} />
          <Stack.Screen name={SCREENS.SignOTP} component={SignOTP} />
          <Stack.Screen
            name={SCREENS.ResetPassword}
            component={ResetPassword}
          />
          <Stack.Screen name={SCREENS.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={SCREENS.AllCategory} component={AllCategory} />
          <Stack.Screen name={SCREENS.MyOrder} component={MyOrder} />
          <Stack.Screen name={SCREENS.Profile} component={Profile} />
          <Stack.Screen name={SCREENS.SubCategory} component={SubCategory} />
          <Stack.Screen name={SCREENS.OrderDetails} component={OrderDetails} />
          <Stack.Screen
            name={SCREENS.CustomDecoration}
            component={CustomDecoration}
          />
          <Stack.Screen name={SCREENS.CustomOrder} component={CustomOrder} />
          <Stack.Screen name={SCREENS.Notification} component={Notification} />
          <Stack.Screen
            name={SCREENS.ContactDetails}
            component={ContactDetails}
          />
          <Stack.Screen
            name={SCREENS.ContactDetails2}
            component={ContactDetails2}
          />
          <Stack.Screen name={SCREENS.EditProfile} component={EditProfile} />
          <Stack.Screen name={SCREENS.CancelOrder} component={CancelOrder} />
          <Stack.Screen name={SCREENS.TrackOrder} component={TrackOrder} />
          <Stack.Screen name={SCREENS.Payment} component={Payment} />
          <Stack.Screen name={SCREENS.OrderReceipt} component={OrderReceipt} />
          <Stack.Screen
            name={SCREENS.OrderFullReceipt}
            component={OrderFullReceipt}
          />
          <Stack.Screen
            name={SCREENS.ChangeAddress}
            component={ChangeAddress}
          />
          <Stack.Screen
            name={SCREENS.ChangeAddress2}
            component={ChangeAddress2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
