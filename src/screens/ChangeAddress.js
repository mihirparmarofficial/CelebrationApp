import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';
const ChangeAddress = ({ navigation }) => {
  const [selectedRadio, setselectedRadio] = useState(1);
  //   const {formData} = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            width: '100%',
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
            Select Address
          </Text>
        </View>
        <View style={{ height: '35%', marginTop: 20 }}>
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setselectedRadio(1)}
            >
              {selectedRadio == 1 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: COLORS.BorderColor,
                    borderWidth: 1,
                    height: 100,
                    marginVertical: 10,
                    borderRadius: 10,
                    backgroundColor: COLORS.LightYellow,
                  }}
                >
                  {selectedRadio == 1 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 1 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 1 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <View
                    style={{
                      justifyContent: 'space-between',
                      height: 70,
                      marginLeft: 15,
                    }}
                  >
                    <View>
                      <Text style={styles.radioFont}>Mihir Parmar</Text>
                      <Text style={styles.radioFont}>+91 70438 62036</Text>
                    </View>
                    <View>
                      <Text style={styles.radioFont}>
                        D-501, Royal Heaven apartment
                      </Text>
                      <Text style={styles.radioFont}>Surat</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: '100%',
                      flexDirection: 'row',
                      paddingTop: 10,
                      paddingRight: 10,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={ICONS.Edit}
                        style={{ height: 20, width: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={ICONS.Trash}
                        style={{ height: 20, width: 20, marginLeft: 15 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: COLORS.BorderColor,
                    borderWidth: 1,
                    height: 100,
                    marginVertical: 10,
                    borderRadius: 10,
                  }}
                >
                  {selectedRadio == 1 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 1 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 1 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <View
                    style={{
                      justifyContent: 'space-between',
                      height: 70,
                      marginLeft: 15,
                    }}
                  >
                    <View>
                      <Text style={styles.radioFont}>Mihir Parmar</Text>
                      <Text style={styles.radioFont}>+91 70438 62036</Text>
                    </View>
                    <View>
                      <Text style={styles.radioFont}>
                        D-501, Royal Heaven apartment
                      </Text>
                      <Text style={styles.radioFont}>Surat</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: '100%',
                      flexDirection: 'row',
                      paddingTop: 10,
                      paddingRight: 10,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={ICONS.Edit}
                        style={{ height: 20, width: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={ICONS.Trash}
                        style={{ height: 20, width: 20, marginLeft: 15 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setselectedRadio(2)}
            >
              {selectedRadio == 2 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: COLORS.BorderColor,
                    borderWidth: 1,
                    height: 100,
                    marginBottom: 10,
                    borderRadius: 10,
                    backgroundColor: COLORS.LightYellow,
                  }}
                >
                  {selectedRadio == 2 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 2 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 2 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <View
                    style={{
                      justifyContent: 'space-between',
                      height: 70,
                      marginLeft: 15,
                    }}
                  >
                    <View>
                      <Text style={styles.radioFont}>Mehul Parmar</Text>
                      <Text style={styles.radioFont}>+91 98268 62036</Text>
                    </View>
                    <View>
                      <Text style={styles.radioFont}>
                        401, Dream Luxuriya apartment
                      </Text>
                      <Text style={styles.radioFont}>Surat</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: '100%',
                      flexDirection: 'row',
                      paddingTop: 10,
                      paddingRight: 10,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={ICONS.Edit}
                        style={{ height: 20, width: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={ICONS.Trash}
                        style={{ height: 20, width: 20, marginLeft: 15 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: COLORS.BorderColor,
                    borderWidth: 1,
                    height: 100,
                    marginBottom: 10,
                    borderRadius: 10,
                  }}
                >
                  {selectedRadio == 2 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 2 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 2 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <View
                    style={{
                      justifyContent: 'space-between',
                      height: 70,
                      marginLeft: 15,
                    }}
                  >
                    <View>
                      <Text style={styles.radioFont}>Mehul Parmar</Text>
                      <Text style={styles.radioFont}>+91 98268 62036</Text>
                    </View>
                    <View>
                      <Text style={styles.radioFont}>
                        401, Dream Luxuriya apartment
                      </Text>
                      <Text style={styles.radioFont}>Surat</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: '100%',
                      flexDirection: 'row',
                      paddingTop: 10,
                      paddingRight: 10,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={ICONS.Edit}
                        style={{ height: 20, width: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={ICONS.Trash}
                        style={{ height: 20, width: 20, marginLeft: 15 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginBottom: 'auto',
            marginTop: -5,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.ContactDetails)}
            style={{
              borderWidth: 1,
              borderColor: COLORS.ThemeColor,
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              marginBottom: 'auto',
              marginHorizontal: 15,
            }}
          >
            <Text
              style={{ color: COLORS.ThemeColor, fontFamily: FONTS.Medium }}
            >
              Add New Address
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.submitButton}
          onPress={() => navigation.navigate(SCREENS.Payment)}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.White,
              fontFamily: FONTS.Bold,
            }}
          >
            Ship to this address
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangeAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submitButton: {
    paddingVertical: 13,
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
    width: '90%',
  },
  radioBtn: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderColor: COLORS.BorderColor,
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioPressed: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderColor: COLORS.ThemeColor,
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioFont: {
    fontSize: 13,
    color: COLORS.Grey,
    // marginVertical: 4,
  },
  radioFill: {
    backgroundColor: COLORS.ThemeColor,
    width: 9,
    height: 9,
    borderRadius: 10,
  },
});
