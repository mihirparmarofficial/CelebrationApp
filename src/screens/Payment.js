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
const PlaceOrder = ({ navigation }) => {
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
              marginLeft: '20%',
              fontFamily: FONTS.SemiBold,
            }}
          >
            Pay with My Code
          </Text>
        </View>
        <View
          style={{
            // borderColor: COLORS.Red,
            // borderWidth: 1,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image style={{ height: 170, width: 170 }} source={IMAGES.QR} />
          <View
            style={{
              width: 220,
              //   borderColor: COLORS.Red,
              //   borderWidth: 1,
            }}
          >
            <Text
              style={{
                color: COLORS.Grey,
                fontSize: 20,
                marginTop: 20,
                textAlign: 'center',
              }}
            >
              Scan this QR code to send payment
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 'auto',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.submitButton}
            onPress={() => navigation.navigate(SCREENS.OrderReceipt)}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.White,
                fontFamily: FONTS.Bold,
              }}
            >
              Download
            </Text>
          </TouchableOpacity>
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
