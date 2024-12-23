import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const OrderReceipt = ({ navigation }) => {
  const [selectedScreen, setselectedScreen] = useState(true);
  let [count, setCount] = useState(1);
  const [select, setSelect] = useState(false);
  // let [data, setData] = useState([
  //   {
  //     id: '1',
  //     title: 'Golden - Blue Theme',
  //     text: 'Best birthday decoration ideas involve use of lights. Attractive.',
  //     img: IMAGES.GBbirthday,
  //     price: '₹ 2000.00',
  //     btn: 'Order Now',
  //   },
  // ]);

  let DATA = [
    {
      id: '1',
      title: 'Golden - Blue Theme',
      text1: 'Name: Ahan',
      text2: 'Number: 2',
      text3: 'Requirement: Pink balloon and white ribbon..',
      img: IMAGES.GBbirthday,
      price: '₹ 2000.00',
      btn: 'Order Now',
    },
  ];

  const renderItem2 = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(SCREENS.OrderReceipt)}
        style={{
          width: '100%',
          height: '100%',
          borderWidth: 2,
          borderRadius: 15,
          borderColor: COLORS.LightBorderColor,
          padding: 8,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              height: 100,
              width: 100,
              alignItems: 'flex-start',
              borderRadius: 5,
            }}
            source={item.img}
          />
          <View
            style={{
              // borderWidth: 1,
              // borderColor: COLORS.Red,
              width: '73.5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                // borderColor: COLORS.Green,
                // borderWidth: 3,
                width: '85%',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    color: COLORS.Black,
                    paddingTop: 8,
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 13,
                    fontFamily: FONTS.Medium,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.Black,
                    fontSize: 12,
                    fontFamily: FONTS.Medium,
                    marginTop: 5,
                    paddingHorizontal: 8,
                  }}
                >
                  {item.price}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: COLORS.Grey,
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 10,
                    fontFamily: FONTS.Regular,
                  }}
                >
                  {item.text1}
                </Text>
                <Text
                  style={{
                    color: COLORS.Grey,
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 10,
                    fontFamily: FONTS.Regular,
                  }}
                >
                  {item.text2}
                </Text>
                <Text
                  style={{
                    color: COLORS.Grey,
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 10,
                    fontFamily: FONTS.Regular,
                  }}
                >
                  {item.text3}
                </Text>
              </View>
            </View>
            <View
              style={{
                // borderColor: 'yellow',
                // borderWidth: 3,
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                marginLeft: 10,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate(SCREENS.OrderFullReceipt)}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={ICONS.GoNext}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
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
              marginLeft: '35%',
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
            }}
          >
            Orders
          </Text>
        </View>

        <View>
          <View>
            <View
              style={{
                paddingHorizontal: 15,
                paddingTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ height: 45, width: 45 }}
                source={ICONS.Delivered}
              />
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
                  <Text
                    style={{ color: COLORS.Black, fontFamily: FONTS.Medium }}
                  >
                    Delivered
                  </Text>
                  <Text style={{ color: COLORS.Grey, fontSize: 11 }}>
                    On Sat, 06 Jan
                  </Text>
                </View>
                <Text style={{ color: COLORS.Black }}>Order ID : #84569</Text>
              </View>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingTop: 13, paddingBottom: 10 }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderReceipt;

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
});
