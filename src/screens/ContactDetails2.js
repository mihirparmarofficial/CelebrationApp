import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const ContactDetails2 = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: 'Mihir Parmar',
    num: '7043862036',
    address: 'D-501, Royal Heaven Apartment',
    city: 'Surat',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={ICONS.GoBack}
              style={{ height: 20, width: 20, alignItems: 'flex-start' }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: '23.5%',
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
            }}
          >
            Contact Details
          </Text>
        </View>

        <View style={{ padding: 15, paddingTop: -10 }}>
          <View>
            <Text style={styles.inputText}>Name</Text>
            <View style={styles.inputStyle}>
              <Image source={ICONS.Name} style={styles.searchIcon} />
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                value={formData.name}
                onChangeText={(txt) => setFormData({ ...formData, name: txt })}
                placeholder={'Mihir Parmar'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Mobile Number</Text>
            <View style={styles.inputStyle}>
              <Image source={ICONS.Call} style={styles.searchIcon} />
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                value={formData.num}
                onChangeText={(txt) => setFormData({ ...formData, num: txt })}
                placeholder={'7043862036'}
              />
            </View>
          </View>
          <View>
            <Text style={styles.inputText}>Address</Text>
            <View style={styles.inputStyle}>
              <Image
                source={ICONS.Location}
                style={{
                  ...styles.searchIcon,
                  tintColor: COLORS.LightGrey,
                }}
              />
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                value={formData.address}
                onChangeText={(txt) =>
                  setFormData({ ...formData, address: txt })
                }
                placeholder={'D-501, Royal Heaven Apartment'}
              />
            </View>
          </View>
          <View>
            <Text style={styles.inputText}>City</Text>
            <View style={styles.inputStyle}>
              <Image
                source={ICONS.Location}
                style={{
                  ...styles.searchIcon,
                  tintColor: COLORS.LightGrey,
                }}
              />
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                value={formData.city}
                onChangeText={(txt) => setFormData({ ...formData, city: txt })}
                placeholder={'Surat'}
              />
            </View>
          </View>
          {/* <View>
            <Text style={styles.inputText}>Town</Text>
            <View style={styles.inputStyle}>
              <Image
                source={ICONS.Location}
                style={{
                  ...styles.searchIcon,
                  tintColor: COLORS.LightGrey,
                }}
              />
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                value={formData.town}
                onChangeText={(txt) => setFormData({ ...formData, town: txt })}
                placeholder={'Surat'}
              />
            </View>
          </View> */}
        </View>
        <View
          style={{
            // borderColor: 'cyan',
            // borderWidth: 2,
            marginTop: 'auto',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.submitButton}
            onPress={() =>
              navigation.navigate(SCREENS.ChangeAddress2, {
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
              Save Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactDetails2;

const styles = StyleSheet.create({
  container: {
    //     borderColor: COLORS.Red,
    //     borderWidth: 2,
    flex: 1,
    // padding: 15,

    // justifyContent: 'space-between',
  },
  submitButton: {
    paddingVertical: 13,
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  inputStyle: {
    width: '100%',
    height: 44,
    padding: 10,
    // marginVertical: 10,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
    flexDirection: 'row',
  },
  inputText: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
  },
});
