import React from 'react';
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
const PlaceOrder = ({ navigation, route }) => {
  const { formData } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            // borderColor: COLORS.Red,
            // borderWidth: 1,
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
              marginLeft: '28%',
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
            }}
          >
            Place Order
          </Text>
        </View>
        <View
          style={{
            marginTop: 25,
            paddingHorizontal: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONTS.Medium,
              color: COLORS.Black,
            }}
          >
            Delivery info
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.LightBorderColor,
            borderRadius: 15,
            padding: 10,
            margin: 15,
            marginTop: 5,
          }}
        >
          <Text style={{ color: COLORS.Grey }}>
            {formData.name ?? 'YourName'}
            {'\n'}
            +91 {formData.num ?? 'YourNumber'}
            {'\n'}
            {formData.address + '\n'}
            {formData.city + '\n'}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.ChangeAddress)}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: COLORS.ThemeColor,
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              marginTop: 5,
            }}
          >
            <Text
              style={{ color: COLORS.ThemeColor, fontFamily: FONTS.Medium }}
            >
              Change or Add New Address
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 0,
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <View
            style={{
              borderTopColor: COLORS.LightBorderColor,
              borderTopWidth: 1.2,
            }}
          ></View>
          <View style={{ padding: 15 }}>
            <Text
              style={{
                fontFamily: FONTS.Medium,
                fontSize: 16,
                color: COLORS.Black,
              }}
            >
              Price Details
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{ marginVertical: 8, fontSize: 11, color: COLORS.Grey }}
              >
                Subtotal
              </Text>
              <Text
                style={{ marginVertical: 8, fontSize: 11, color: COLORS.Black }}
              >
                ₹ 2000.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 11, color: COLORS.Grey }}>Discount</Text>
              <Text style={{ fontSize: 11, color: COLORS.Black }}>₹ 0.00</Text>
            </View>

            <View
              style={{
                marginTop: 10,
              }}
            >
              <Image source={ICONS.Line} style={{ width: '100%', height: 1 }} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{ marginVertical: 8, fontSize: 14, color: COLORS.Black }}
              >
                Total
              </Text>
              <Text
                style={{ marginVertical: 8, fontSize: 11, color: COLORS.Black }}
              >
                ₹ 2000.00
              </Text>
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
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlaceOrder;

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
    marginBottom: 10,
  },
});
