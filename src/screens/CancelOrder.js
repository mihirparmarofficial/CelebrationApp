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

const CancelOrder = ({ navigation }) => {
  const [formData, setFormData] = useState({
    info: '',
  });
  const [selectedRadio, setselectedRadio] = useState(1);

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
              marginLeft: '26%',
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
            }}
          >
            Cancel Order
          </Text>
        </View>

        <View
          style={{
            padding: 15,
            alignItems: 'center',
            alignItems: 'flex-start',
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: FONTS.Medium,
              color: COLORS.Black,
            }}
          >
            Reason for cancellation
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.Grey, marginTop: 5 }}>
            Please tell us correct reason for cancellation. This information is
            only used to improved our service
          </Text>
        </View>

        <View
          style={{
            padding: 15,

            alignItems: 'center',
            alignItems: 'flex-start',
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: FONTS.Medium,
                marginBottom: 8,
                color: COLORS.Black,
              }}
            >
              Select Reason :
            </Text>
            <View style={{ marginStart: 10 }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setselectedRadio(1)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
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
                  <Text style={styles.radioFont}>
                    Product not required anymore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setselectedRadio(2)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                  <Text style={styles.radioFont}>Order by mistake</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setselectedRadio(3)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {selectedRadio == 3 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 3 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 3 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <Text style={styles.radioFont}>Want to change color</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setselectedRadio(4)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {selectedRadio == 4 ? (
                    <View style={styles.radioPressed}>
                      {selectedRadio == 4 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  ) : (
                    <View style={styles.radioBtn}>
                      {selectedRadio == 4 ? (
                        <View style={styles.radioFill}></View>
                      ) : null}
                    </View>
                  )}
                  <Text style={styles.radioFont}>Duplicate Order</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              padding: 10,
              height: 100,
              borderColor: COLORS.BorderColor,
              borderWidth: 1.3,
              borderRadius: 10,
              color: COLORS.Black,
              fontFamily: FONTS.Regular,
              marginHorizontal: 15,
            }}
          >
            <TextInput
              style={{ flex: 1 }}
              multiline
              value={formData.info}
              onChangeText={(txt) => setFormData({ ...formData, info: txt })}
              placeholder={'Additional Comment'}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 'auto',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.submitButton}
            onPress={() => navigation.navigate(SCREENS.Cart)}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.White,
                fontFamily: FONTS.Bold,
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CancelOrder;

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
    marginHorizontal: 15,
  },
  radioBtn: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderColor: COLORS.Grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioPressed: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderColor: COLORS.ThemeColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioFont: {
    fontSize: 14,
    margin: 10,
    color: COLORS.Black,
  },
  radioFill: {
    backgroundColor: COLORS.ThemeColor,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
