import React, { useState, useRef } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import RBSheet from 'react-native-raw-bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { SubCategoryData } from '../common/Utils/Data';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.45;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;

const SubCategory = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log('cart ->', cart);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    showToast();
  };

  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Item Added to Cart!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  const refRBSheet = useRef();
  const [selectedRadio, setselectedRadio] = useState(false);
  const [filter, setFilter] = useState(1);
  const [filteredData, setFilteredData] = useState(SubCategoryData);

  const sortProduct = (value) => {
    setFilter(value);
    let sortedProducts = [...SubCategoryData];
    if (value === 1) {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredData(sortedProducts);
    refRBSheet.current.close();
  };
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      // onPress={item.onPress}
      onPress={() =>
        navigation.navigate(SCREENS.OrderDetails, { product: item })
      }
      style={styles.cardContainer}
    >
      <Image style={styles.cardImage} source={item.img} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: COLORS.Red,
          flex: 1,
          width: '100%',
          borderRadius: 15,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 4, flexDirection: 'column' }}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardPrice}>₹ {item.price}.00</Text>
        </View>
        <View
          style={{
            // backgroundColor: 'yellow',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            // onPress={() => navigation.navigate(SCREENS.Cart)}
            onPress={() => addItemToCart(item)}
          >
            <Image
              source={ICONS.Purchase}
              style={{
                height: 23,
                width: 23,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ backgroundColor: COLORS.White, flex: 1 }}>
      <SafeAreaView />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
          // backgroundColor: COLORS.Red,
        }}
      >
        <View
          style={{
            flex: 1,
            // backgroundColor:COLORS.Blue,
            alignItems: 'flex-start',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={ICONS.GoBack}
              style={{
                // flex: 1,
                height: 20,
                width: 20,
                alignItems: 'flex-start',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3, alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
              fontSize: 20,
              // marginLeft: '26%',
              // flex: 1,
            }}
          >
            Kids Birthday
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor:COLORS.Blue,
            alignItems: 'flex-end',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => refRBSheet.current.open()}
          >
            <Image
              source={ICONS.Setting}
              style={{ height: 20, width: 20, alignItems: 'flex-end' }}
            />
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={true}
          height={200}
          customStyles={{
            wrapper: {
              backgroundColor: COLORS.Transparent,
            },
            draggableIcon: {
              backgroundColor: COLORS.ThemeColor,
            },
            container: {
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            },
          }}
        >
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.SemiBold,
                fontSize: RFValue(17),
                color: COLORS.Black,
              }}
            >
              Price
            </Text>
            <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => refRBSheet.current.close()}
              >
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    fontSize: RFValue(15),
                    color: COLORS.ThemeColor,
                  }}
                >
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setselectedRadio(1);
                  sortProduct(1);
                }}
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
                  <Text style={styles.radioFont}>Low - High</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setselectedRadio(2);
                  sortProduct(2);
                }}
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
                  <Text style={styles.radioFont}>High - Low</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
      <FlatList
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  radioBtn: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderColor: COLORS.LightBorderColor,
    // borderColor:COLORS.ThemeColor,
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioPressed: {
    width: 25,
    height: 25,
    borderRadius: 20,
    // borderColor: COLORS.Grey,
    borderColor: COLORS.ThemeColor,
    borderWidth: 2,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioFont: {
    fontSize: RFValue(13),
    fontFamily: FONTS.Regular,
    margin: 10,
    color: COLORS.Black,
  },
  radioFill: {
    backgroundColor: COLORS.ThemeColor,
    // backgroundColor: COLORS.Grey,
    width: 14,
    height: 14,
    borderRadius: 20,
    // borderColor: COLORS.Black,
    // borderWidth: 10,
  },
  gridContent: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: COLORS.BorderColor,
    alignItems: 'center',
    backgroundColor: COLORS.White,
    marginVertical: 7,
    marginHorizontal: 6,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  cardImage: {
    width: ITEM_WIDTH * 1,
    height: ITEM_HEIGHT * 0.78,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardTitle: {
    color: COLORS.Grey,
    fontSize: RFValue(10),
    fontFamily: FONTS.Medium,
  },
  cardPrice: {
    color: COLORS.Black,
    fontSize: RFValue(10),
    fontFamily: FONTS.Medium,
    // marginTop: 1,
  },
});
