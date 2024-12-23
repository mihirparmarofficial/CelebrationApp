import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const Profile = ({ navigation, route }) => {
  // const params = route.params;
  // console.log('routed data ============>', route.params);

  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const curr = auth().currentUser;
    if (curr?.displayName) {
      setName(curr?.displayName);
    } else {
      setName('User Name');
    }
    if (curr?.email) {
      setEmail(curr?.email);
    } else {
      setEmail('User Email');
    }
    if (curr?.photoURL) {
      setProfileImage(curr?.photoURL);
    }
  }, []);

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // console.log('current user ===========> ', auth().currentUser);

  // const handleLogout = () => {
  //   auth()
  //     .signOut()
  //     .then(() => {
  //       console.log('User signed out!');
  //       navigation.replace('LogIn');
  //     })
  //     .catch(error => {
  //       console.error('Error logging out: ', error);
  //     });
  // };

  const handleLogout = async () => {
    try {
      await auth().signOut();
      // const isGoogleSignedIn = await GoogleSignin.isSignedIn();
      // if (isGoogleSignedIn) {
      // await GoogleSignin.revokeAccess();
      // await GoogleSignin.signOut();
      // }
      console.log('User signed out!');
      navigation.replace('LogIn');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: FONTS.Bold,
              color: COLORS.ThemeColor,
              marginTop: -5,
              justifyContent: 'flex-start',
            }}
          >
            Logo
          </Text>
          <Text
            style={{
              marginRight: 'auto',
              marginLeft: '23%',
              fontSize: 20,
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
            }}
          >
            Profile
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.Notification)}
          >
            <Image
              source={ICONS.Notification}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            paddingRight: 15,
            paddingLeft: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View>
              <Image
                style={{ height: 60, width: 60, borderRadius: 100 }}
                // source={ICONS.UserProfile}
                source={
                  profileImage ? { uri: profileImage } : ICONS.UserProfile
                }
                // auth().currentUser.photoURL
              />
            </View>
            <View style={{ marginStart: 15 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: FONTS.Medium,
                  color: COLORS.Black,
                }}
              >
                {/* Mihir Parmar */}
                {name}
                {/* auth().currentUser.displayName */}
              </Text>
              <Text style={{ fontSize: 13, color: COLORS.Grey, marginTop: 2 }}>
                {email}
                {/* auth().currentUser.email */}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.EditProfile)}
          >
            <Image style={{ height: 20, width: 20 }} source={ICONS.Edit} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 30,
            paddingRight: 15,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: COLORS.Red,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Image style={styles.icon} source={ICONS.Notification2} />
              <Text style={styles.text}>Notification</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: COLORS.DarkGrey, true: COLORS.ThemeColor }}
                thumbColor={isEnabled ? COLORS.White : COLORS.White}
                ios_backgroundColor="grey"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }] }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(SCREENS.OrderReceipt)}
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: COLORS.Green,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Image style={styles.icon} source={ICONS.Orders} />
              <Text style={styles.text}>Orders</Text>
            </View>
            <View>
              <Image style={styles.icon} source={ICONS.GoNext} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(SCREENS.ChangeAddress2)}
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: COLORS.Green,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Image style={styles.icon} source={ICONS.Location} />
              <Text style={styles.text}>Change Address</Text>
            </View>
            <View>
              <Image style={styles.icon} source={ICONS.GoNext} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: COLORS.Green,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Image style={styles.icon} source={ICONS.Terms} />
              <Text style={styles.text}>Term and Condition</Text>
            </View>
            <View>
              <Image style={styles.icon} source={ICONS.GoNext} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: COLORS.Green,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Image style={styles.icon} source={ICONS.Help} />
              <Text style={styles.text}>Help</Text>
            </View>
            <View>
              <Image style={styles.icon} source={ICONS.GoNext} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleLogout}
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: COLORS.Green,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Image style={styles.icon} source={ICONS.Logout} />
              <Text style={{ ...styles.text, color: COLORS.Red }}>Logout</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
  },
});
