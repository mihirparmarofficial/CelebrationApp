import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from './sources/screens/LogIn';
import PlaceOrder from './sources/screens/PlaceOrder';
import SignUp from './sources/screens/SignUp';
import ForgotPassword from './sources/screens/ForgotPassword';
import OTP from './sources/screens/OTP';
import ResetPassword from './sources/screens/ResetPassword';
import HomeScreen from './sources/screens/HomeScreen';
import AllCategory from './sources/screens/AllCategory';
import BTab from './sources/screens/BTab';
import MyOrder from './sources/screens/MyOrder';
import Profile from './sources/screens/Profile';
import SubCategory from './sources/screens/SubCategory';
import SignOTP from './sources/screens/SignOTP';
import OrderDetails from './sources/screens/OrderDetails';
import CustomDecoration from './sources/screens/CustomDecoration';
import CustomOrder from './sources/screens/CustomOrder';
import Notification from './sources/screens/Notification';
import ContactDetails from './sources/screens/ContactDetails';
import EditProfile from './sources/screens/EditProfile';
import CancelOrder from './sources/screens/CancelOrder';
import TrackOrder from './sources/screens/TrackOrder';
import Payment from './sources/screens/Payment';
import OrderReceipt from './sources/screens/OrderReceipt';
import OrderFullReceipt from './sources/screens/OrderFullReceipt';
import ChangeAddress from './sources/screens/ChangeAddress';
import ChangeAddress2 from './sources/screens/ChangeAddress2';

const Stack = createStackNavigator();

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BTab" component={BTab} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="SignOTP" component={SignOTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AllCategory" component={AllCategory} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SubCategory" component={SubCategory} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="CustomDecoration" component={CustomDecoration} />
        <Stack.Screen name="CustomOrder" component={CustomOrder} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CancelOrder" component={CancelOrder} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="OrderReceipt" component={OrderReceipt} />
        <Stack.Screen name="OrderFullReceipt" component={OrderFullReceipt} />
        <Stack.Screen name="ChangeAddress" component={ChangeAddress} />
        <Stack.Screen name="ChangeAddress2" component={ChangeAddress2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
