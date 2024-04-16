import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import MyOrder from './MyOrder';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();

const BTab = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderWidth: 1,
            borderColor: 'grey',
            // borderWidth: 0.5,
            borderTopColor: 'grey',
            borderTopWidth: 0.5,
            // backgroundColor: '#ECECEC',
            paddingTop: 40,
            marginTop: -10,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          tabBarStyle={{borderColor: 'green', borderWidth: 30}}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../common/image/HomeFocus.png')
                    : require('../common/image/Home.png')
                }
                style={{
                  height: focused ? 28 : 25,
                  width: focused ? 28 : 25,
                  marginTop: 'auto',
                  tintColor: focused ? null : '#A6A6A6',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyOrder"
          component={MyOrder}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../common/image/ShopBagFocus.png')
                    : require('../common/image/ShopBag.png')
                }
                style={{
                  height: focused ? 28 : 25,
                  width: focused ? 28 : 25,
                  marginTop: 'auto',
                  tintColor: focused ? null : '#A6A6A6',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../common/image/ProfileFocus.png')
                    : require('../common/image/Profile.png')
                }
                style={{
                  height: focused ? 28 : 25,
                  width: focused ? 28 : 25,
                  tintColor: focused ? null : '#A6A6A6',
                  marginTop: 'auto',
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
