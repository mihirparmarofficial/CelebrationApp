import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import MyOrder from './MyOrder';
import { Image, Platform, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const Tab = createBottomTabNavigator();

const BTab = ({ route }) => {
  // console.log(route.params);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.White,
        marginTop: 'auto',
        // marginTop: 20,
        // alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderWidth: 1,
            borderColor: COLORS.Grey,
            borderTopColor: COLORS.Grey,
            borderTopWidth: 1,
            backgroundColor: COLORS.White,
            paddingTop: Platform.OS === 'android' ? RFValue(10) : RFValue(20),
            // paddingTop: Platform.OS === 'android' ? 15 : 30,
            marginTop: -10,
            height: Platform.OS === 'android' ? RFValue(48) : RFValue(60),
            // height: Platform.OS === 'android' ? 60 : 79,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={SCREENS.HomeScreen}
          component={HomeScreen}
          // tabBarStyle={{borderColor: COLORS.Green, borderWidth: 100}}
          options={{
            title: '',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? ICONS.HomeFocused : ICONS.Home}
                style={{
                  height: focused ? 28 : 25,
                  width: focused ? 28 : 25,
                  tintColor: focused ? null : COLORS.Grey,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={SCREENS.Cart}
          component={MyOrder}
          options={{
            title: '',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? ICONS.ShopBagFocus : ICONS.ShopBag}
                style={{
                  height: focused ? 28 : 25,
                  width: focused ? 28 : 25,
                  tintColor: focused ? null : COLORS.Grey,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={SCREENS.Profile}
          initialParams={route.params}
          component={Profile}
          options={{
            title: '',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? ICONS.ProfileFocus : ICONS.Profile}
                style={{
                  height: focused ? 28 : 25,
                  width: focused ? 28 : 25,
                  tintColor: focused ? null : COLORS.Grey,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BTab;
