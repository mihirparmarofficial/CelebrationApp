import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ToastAndroid,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../redux/CartReducer';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const MyOrder = ({ navigation }) => {
  // const cart = useSelector((state) => state.cart.cart);
  const cart = useSelector((state) => state.cart?.cart || []);
  console.log('cart -->', cart);
  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
    showToast();
  };

  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Item Removed from Cart!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [selectedScreen, setselectedScreen] = useState(true);
  let [count, setCount] = useState(1);
  // let [data, setData] = useState();
  const [select, setSelect] = useState('clicked');

  const renderItem1 = ({ item }) => {
    return (
      <View
        style={{
          width: '100%',
          // height: '100%',
          marginBottom: 5,
          borderWidth: 2,
          borderRadius: 15,
          borderColor: COLORS.LightBorderColor,
          padding: 8,
          flexDirection: 'row',
        }}
      >
        <Image
          style={{
            height: 95,
            width: 95,
            alignItems: 'flex-start',
            borderRadius: 5,
          }}
          source={item.img}
        />
        <View
          style={{
            // borderWidth: 3,
            // borderColor: COLORS.Red,
            width: '73.5%',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              width: '65%',
              paddingHorizontal: 8,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  color: COLORS.Black,
                  paddingTop: 8,
                  paddingBottom: 0,
                  textAlign: 'left',
                  fontSize: 13,
                  fontFamily: FONTS.Medium,
                }}
              >
                {item.title}
              </Text>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{
                  color: COLORS.Grey,
                  textAlign: 'left',
                  fontSize: 9,
                  fontFamily: FONTS.Regular,
                }}
              >
                {item.description}
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.Black,
                fontSize: 12,
                fontFamily: FONTS.Medium,
              }}
            >
              ₹ {item.price}.00
            </Text>
          </View>
          <View
            style={{
              // borderColor: 'yellow',
              // borderWidth: 3,
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginStart: '10%',
              // alignItems: 'flex-end',
            }}
          >
            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => removeItemFromCart(item)}
              >
                <Image style={{ height: 20, width: 20 }} source={ICONS.Trash} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // paddingVertical: 10,
                width: 70,
                marginStart: -15,
                // padding: 10,
                // borderColor: COLORS.Red,
                // borderWidth: 2,
              }}
            >
              <View
                style={{
                  // borderColor: COLORS.Green,
                  // borderWidth: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => decreaseQuantity(item)}
                >
                  <Image
                    source={ICONS.Minus}
                    style={{ height: 20, width: 20 }}
                  />
                </TouchableOpacity>
                <Text
                  style={{ fontFamily: FONTS.Medium, marginHorizontal: 10 }}
                >
                  {item.quantity}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => increaseQuantity(item)}
                >
                  <Image source={ICONS.Add} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderItem2 = ({ item }) => {
    return (
      <View
        style={{
          width: '100%',
          // height: '100%',
          marginBottom: 5,
          borderWidth: 2,
          borderRadius: 15,
          borderColor: COLORS.LightBorderColor,
          padding: 8,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              height: 95,
              width: 95,
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
                  ₹ {item.price}.00
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.Grey,
                    paddingHorizontal: 8,
                    textAlign: 'left',
                    fontSize: 10,
                    fontFamily: FONTS.Regular,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate(SCREENS.OrderReceipt)}
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                marginLeft: 10,
              }}
            >
              <Image style={{ height: 20, width: 20 }} source={ICONS.GoNext} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // borderColor: COLORS.Green,
            // borderWidth: 1,
            height: 40,
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.CancelOrder)}
            style={{
              width: '49%',
              borderColor: COLORS.ThemeColor,
              borderWidth: 1.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: COLORS.ThemeColor,
                fontSize: 15,
                fontFamily: FONTS.Medium,
              }}
            >
              Cancel Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(SCREENS.TrackOrder)}
            style={{
              width: '49%',
              borderColor: COLORS.ThemeColor,
              borderWidth: 1.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: COLORS.ThemeColor,
                fontSize: 15,
                fontFamily: FONTS.Medium,
              }}
            >
              Track Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View
          style={{ flexDirection: 'row', paddingRight: 15, paddingLeft: 15 }}
        >
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
              marginLeft: '19.5%',
              fontFamily: FONTS.SemiBold,
              fontSize: 20,
              color: COLORS.Black,
            }}
          >
            My Order
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
            marginHorizontal: 15,
            marginTop: 17,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              borderColor: COLORS.ThemeColor,
              borderWidth: 1.4,
              height: 45,
              borderRadius: 12,
            }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', height: 43 }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setSelect('clicked')}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    width: '50%',
                    alignItems: 'center',
                    backgroundColor:
                      select === 'clicked' ? COLORS.ThemeColor : null,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: select === 'clicked' ? COLORS.White : COLORS.Black,
                      fontSize: 17,
                      fontFamily:
                        select === 'clicked' ? FONTS.Bold : FONTS.SemiBold,
                    }}
                  >
                    New Order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setSelect('checked')}
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    backgroundColor:
                      select === 'checked' ? COLORS.ThemeColor : null,
                    justifyContent: 'center',
                    width: '50%',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: select === 'checked' ? COLORS.White : COLORS.Black,
                      fontSize: 17,
                      fontFamily:
                        select === 'checked' ? FONTS.Bold : FONTS.SemiBold,
                    }}
                  >
                    Ongoing Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {select === 'clicked' ? (
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                // borderColor: COLORS.Green,
                // borderWidth: 4,
              }}
            >
              <View style={{ paddingHorizontal: 15, flex: 1 }}>
                {cart.length === 0 ? (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(18),
                        fontFamily: FONTS.SemiBold,
                      }}
                    >
                      Your cart is empty !!
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                        padding: 8,
                        borderWidth: 1.5,
                        borderColor: COLORS.ThemeColor,
                        borderRadius: 12,
                        marginVertical: 8,
                        backgroundColor: COLORS.ThemeColor,
                      }}
                      onPress={() => {
                        navigation.navigate(SCREENS.SubCategory);
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.White,
                          fontSize: RFValue(13),
                          fontFamily: FONTS.SemiBold,
                        }}
                      >
                        Go to Products
                      </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                      <Text>First child</Text>
                      <Text>Second child</Text>
                      <Text>Third child</Text>
                    </View>
                  </View>
                ) : (
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cart}
                    renderItem={renderItem1}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                      paddingTop: 13,
                      paddingBottom: 10,
                    }}
                  />
                )}
              </View>
            </View>
            <View
              style={{
                borderTopColor: COLORS.LightBorderColor,
                borderTopWidth: 2,
                marginBottom: 20,
                // backgroundColor: COLORS.Red,
                // borderWidth: 4,
              }}
            >
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
                    marginVertical: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: COLORS.Grey,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    Subtotal
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: COLORS.Black,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    ₹ {totalPrice()}.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: COLORS.Grey,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    Custom Charge
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: COLORS.Black,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    ₹ 0.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // marginVertical: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: COLORS.Grey,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    Discount
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: COLORS.Black,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    ₹ 0.00
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={ICONS.Line}
                    style={{ width: '100%', height: 1 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      marginVertical: 8,
                      fontSize: 14,
                      color: COLORS.Black,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    Total
                  </Text>
                  <Text
                    style={{
                      marginVertical: 8,
                      fontSize: 11,
                      color: COLORS.Black,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    ₹ {totalPrice()}.00
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
                  onPress={() => navigation.navigate(SCREENS.ContactDetails)}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.White,
                      fontFamily: FONTS.Bold,
                    }}
                  >
                    Submit Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {select === 'checked' ? (
          <View>
            <View>
              {cart.length === 0 ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '95%',
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(18),
                      fontFamily: FONTS.SemiBold,
                    }}
                  >
                    Your cart is empty !!
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      padding: 8,
                      borderWidth: 1.5,
                      borderColor: COLORS.ThemeColor,
                      borderRadius: 12,
                      marginVertical: 8,
                      backgroundColor: COLORS.ThemeColor,
                    }}
                    onPress={() => {
                      navigation.navigate(SCREENS.SubCategory);
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.White,
                        fontSize: RFValue(13),
                        fontFamily: FONTS.SemiBold,
                      }}
                    >
                      Go to Products
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      paddingTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      style={{ height: 45, width: 45 }}
                      source={ICONS.ConfirmOrder}
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
                          style={{
                            color: COLORS.LightGreen,
                            fontFamily: FONTS.Medium,
                          }}
                        >
                          Confirmed
                        </Text>
                        <Text
                          style={{
                            color: COLORS.Grey,
                            fontSize: 11,
                            fontFamily: FONTS.Regular,
                          }}
                        >
                          Arriving by Sat, 06 Jan
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: COLORS.Black,
                          fontFamily: FONTS.Regular,
                        }}
                      >
                        Order ID : #84569
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      marginTop: 10,
                    }}
                  >
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      data={cart}
                      renderItem={renderItem2}
                      keyExtractor={(item) => item.id}
                      contentContainerStyle={{ paddingBottom: 300 }}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default MyOrder;

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
