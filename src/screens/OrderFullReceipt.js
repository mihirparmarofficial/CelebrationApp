import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import BTab from './BTab';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const OrderFullReceipt = ({ navigation }) => {
  let [count, setCount] = useState(1);
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
              marginLeft: '35%',
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
            }}
          >
            Orders
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            // borderColor: COLORS.Green,
            // borderWidth: 1,
            marginBottom: -30,
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image style={{ height: 45, width: 45 }} source={ICONS.Delivered} />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '85%',
                // borderColor: COLORS.Red,
                // borderWidth: 1,
                alignItems: 'center',
              }}
            >
              <View style={{ marginStart: 10 }}>
                <Text style={{ color: COLORS.Black, fontFamily: FONTS.Medium }}>
                  Delivered
                </Text>
                <Text style={{ color: COLORS.Grey, fontSize: 11 }}>
                  On Sat, 06 Jan
                </Text>
              </View>
              <Text style={{ fontFamily: FONTS.Regular, color: COLORS.Black }}>
                Order ID : #84569
              </Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator>
            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 15,
                // height: '100%',
              }}
            >
              <Image
                source={IMAGES.OD_GBtheme}
                style={{ width: '100%', height: '85%' }}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.White,
                marginTop: -30,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.Medium,
                      fontSize: 18,
                      color: COLORS.Black,
                    }}
                  >
                    Golden - Blue Theme
                  </Text>
                  <Text style={{ color: COLORS.Grey, fontSize: 13 }}>
                    Qty : 1{' '}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    color: COLORS.ThemeColor,
                    color: COLORS.Black,
                  }}
                >
                  ₹ 2000.00
                </Text>
              </View>

              <View
                style={{
                  // borderColor:COLORS.Blue,
                  // borderWidth: 2,
                  paddingTop: 10,
                  paddingLeft: 15,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    fontSize: 16,
                    color: COLORS.Black,
                  }}
                >
                  Description
                </Text>
              </View>

              <View
                style={{
                  // borderColor:COLORS.Blue,
                  // borderWidth: 2,
                  paddingTop: 5,
                  paddingStart: 15,
                  paddingEnd: 15,
                }}
              >
                <Text
                  style={{
                    color: COLORS.Grey,
                    textAlign: 'justify',
                    fontSize: 13,
                  }}
                >
                  Best birthday decoration ideas involve use of lights.
                  Attractive party lights not only heighten the overall
                  atmosphere but also set the mood. From savvy lantern fairy
                  lights to smart mood lights, there are many options, when it
                  comes to using lights as birthday decorations ideas. One can
                  hang lanterns on the corner of the wall or keep them on the
                  table.
                </Text>
              </View>

              <View
                style={{
                  paddingTop: 15,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    fontSize: 16,
                    color: COLORS.Black,
                  }}
                >
                  Customize Details
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  paddingTop: 5,
                  paddingStart: 15,
                }}
              >
                <Text style={{ fontSize: 11, color: COLORS.Grey }}>
                  Name: Mihir Parmar
                </Text>
                <Text style={{ fontSize: 11, color: COLORS.Grey }}>
                  Number: 2
                </Text>
                <Text style={{ fontSize: 11, color: COLORS.Grey }}>
                  Requirement: Blue balloon
                </Text>
              </View>
              <View
                style={{
                  paddingTop: 15,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    fontSize: 16,
                    color: COLORS.Black,
                  }}
                >
                  Delivery Info
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  paddingTop: 5,
                  paddingStart: 15,
                }}
              >
                <Text style={{ fontSize: 11, color: COLORS.Grey }}>
                  Mehul Parmar | +91 70438 62036
                </Text>
                {/* <Text style={{fontSize: 11, color: COLORS.Grey}}> </Text> */}
                <Text style={{ fontSize: 11, color: COLORS.Grey }}>
                  D-501, Royal heaven, Surat.
                </Text>
              </View>
              <View
                style={{
                  paddingTop: 15,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    fontSize: 16,
                    color: COLORS.Black,
                  }}
                >
                  Payment Details
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  paddingTop: 5,
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 11, color: COLORS.Grey }}>
                  Pre Payment{' '}
                </Text>
                {/* <Text style={{fontSize: 11, color: COLORS.Grey}}> </Text> */}
                <Text style={{ fontSize: 14, color: COLORS.Grey }}>
                  ₹ 500.00{' '}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderFullReceipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
  },
  submitButton: {
    paddingVertical: 13,
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
    marginBottom: 10,
    marginHorizontal: 15,
  },
});
