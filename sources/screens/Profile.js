import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';

const Profile = ({navigation}) => {
  // const [selected, setSelected] = useState();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingRight: 15, paddingLeft: 15}}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: FONTS.Regular,
              fontWeight: 'bold',
              color: '#ffb605',
              marginTop: -5,
              justifyContent: 'flex-start',
            }}>
            Logo
          </Text>
          <Text
            style={{
              marginRight: 'auto',
              marginLeft: '23%',
              fontFamily: FONTS.Regular,
              fontSize: 20,
              fontWeight: '600',
            }}>
            Profile
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              source={require('../common/image/notification.png')}
              style={{height: 20, width: 20}}
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
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{height: 60, width: 60}}
                source={require('../common/image/ProfilePic.png')}
              />
            </View>
            <View style={{marginStart: 15}}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>
                Mihir Parmar
              </Text>
              <Text style={{fontSize: 13, color: 'grey', marginTop: 2}}>
                +91 70438 62036
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../common/image/edit.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 30,
            paddingRight: 15,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icon}
                source={require('../common/image/notification2.png')}
              />
              <Text style={styles.text}>Notification</Text>
            </View>
            <View>
              <Switch
                trackColor={{false: '#767577', true: '#FFB605'}}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="grey"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{transform: [{scaleX: 0.75}, {scaleY: 0.75}]}}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyOrder')}
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: 'green',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icon}
                source={require('../common/image/orders.png')}
              />
              <Text style={styles.text}>Orders</Text>
            </View>
            <View>
              <Image
                style={styles.icon}
                source={require('../common/image/arrow-right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChangeAddress2')}
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: 'green',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icon}
                source={require('../common/image/location2.png')}
              />
              <Text style={styles.text}>Change Address</Text>
            </View>
            <View>
              <Image
                style={styles.icon}
                source={require('../common/image/arrow-right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: 'green',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icon}
                source={require('../common/image/terms.png')}
              />
              <Text style={styles.text}>Term and Condition</Text>
            </View>
            <View>
              <Image
                style={styles.icon}
                source={require('../common/image/arrow-right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: 'green',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icon}
                source={require('../common/image/help.png')}
              />
              <Text style={styles.text}>Help</Text>
            </View>
            <View>
              <Image
                style={styles.icon}
                source={require('../common/image/arrow-right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LogIn')}
          style={{
            marginTop: 20,
            paddingRight: 10,
            paddingLeft: 15,
            // borderWidth: 2,
            // borderColor: 'green',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icon}
                source={require('../common/image/logout.png')}
              />
              <Text style={{...styles.text, color: 'red'}}>Logout</Text>
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
    fontFamily: FONTS.Regular,
    fontSize: 16,
    marginVertical: 5,
    fontWeight: '500',
    color: 'black',
  },
});
