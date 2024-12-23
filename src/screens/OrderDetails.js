// import React, { useState } from 'react';
// import {
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { FONTS } from '../common/Utils/Fonts';
// import BTab from './BTab';
// import { SCREENS } from '../common/Utils/Screens';
// import { COLORS } from '../common/Utils/Colors';

// const OrderDetails = ({ navigation }) => {
//   let [count, setCount] = useState(1);
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
//       <View style={styles.container}>
//         <View
//           style={{
//             flexDirection: 'row',
//             paddingLeft: 15,
//             paddingRight: 15,
//           }}
//         >
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() => navigation.goBack()}
//           >
//             <Image
//               source={ICONS.GoBack}
//               style={{ height: 20, width: 20, alignItems: 'flex-start' }}
//             />
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontFamily: FONTS.SemiBold,
//               color: COLORS.Black,
//               fontSize: 20,
//               marginLeft: '26%',
//             }}
//           >
//             Order Details
//           </Text>
//         </View>
//         <View
//           style={{
//             height: '45%',
//             width: '100%',
//             // borderColor: COLORS.Red,
//             // borderWidth: 2,
//             marginTop: 12,
//           }}
//         >
//           <Image
//             source={IMAGES.OD_GBtheme}
//             style={{ width: '100%', flex: 1 }}
//           />
//         </View>
//         <View
//           style={{
//             // borderColor: COLORS.Red,
//             // borderWidth: 2,
//             flex: 1,
//             marginTop: -60,
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//             backgroundColor: COLORS.White,
//           }}
//         >
//           <View
//             style={{
//               // borderColor: COLORS.Red,
//               // borderWidth: 2,
//               paddingTop: 20,
//               paddingLeft: 15,
//             }}
//           >
//             <Text
//               style={{
//                 fontFamily: FONTS.Medium,
//                 color: COLORS.Black,
//                 fontSize: 18,
//               }}
//             >
//               Golden - Blue Theme
//             </Text>
//           </View>

//           <View
//             style={{
//               // borderColor: COLORS.Red,
//               // borderWidth: 2,
//               paddingTop: 8,
//               paddingStart: 15,
//               paddingEnd: 15,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}
//           >
//             <Text
//               style={{ fontFamily: FONTS.Medium, color: COLORS.ThemeColor }}
//             >
//               ₹ 2000.00
//             </Text>
//             <View
//               style={{
//                 // borderColor: COLORS.Green,
//                 // borderWidth: 2,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}
//             >
//               <TouchableOpacity
//                 activeOpacity={0.7}
//                 onPress={() => setCount(Math.max(count - 1, 1))}
//               >
//                 <Image
//                   source={ICONS.Minus}
//                   style={{ height: 20, width: 20 }}
//                 />
//               </TouchableOpacity>
//               <Text
//                 style={{
//                   fontFamily: FONTS.Medium,
//                   marginHorizontal: 10,
//                   color: COLORS.Black,
//                 }}
//               >
//                 {count}
//               </Text>
//               <TouchableOpacity
//                 activeOpacity={0.7}
//                 onPress={() => setCount(Math.min(count + 1, 5))}
//               >
//                 <Image
//                   source={ICONS.Add}
//                   style={{ height: 20, width: 20 }}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View
//             style={{
//               // borderColor:COLORS.Blue,
//               // borderWidth: 2,
//               paddingTop: 10,
//               paddingLeft: 15,
//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 16,
//                 fontFamily: FONTS.Medium,
//                 color: COLORS.Black,
//               }}
//             >
//               Description
//             </Text>
//           </View>

//           <View
//             style={{
//               // borderColor:COLORS.Blue,
//               // borderWidth: 2,
//               paddingTop: 5,
//               paddingStart: 15,
//               paddingEnd: 15,
//             }}
//           >
//             <Text
//               style={{ color: COLORS.Grey, textAlign: 'justify', fontSize: 13 }}
//             >
//               Best birthday decoration ideas involve use of lights. Attractive
//               party lights not only heighten the overall atmosphere but also set
//               the mood. From savvy lantern fairy lights to smart mood lights,
//               there are many options, when it comes to using lights as birthday
//               decorations ideas. One can hang lanterns on the corner of the wall
//               or keep them on the table as they make up for simple birthday
//               decorations. Fairy lights, the small white or multi-coloured light
//               strings can be used artistically to add a glowing touch to your
//               party décor. Glittering fairy lights can be draped around curtains
//               or balconies, plants, or simply weave strands of lights throughout
//               the floral centrepieces.
//             </Text>
//           </View>

//           <View
//             style={{
//               // borderColor:COLORS.Blue,
//               // borderWidth: 2,
//               paddingTop: 15,
//               paddingLeft: 15,
//             }}
//           >
//             <Text
//               style={{
//                 fontFamily: FONTS.Medium,
//                 color: COLORS.Black,
//                 fontSize: 16,
//               }}
//             >
//               Delivery & Service
//             </Text>
//           </View>

//           <View
//             style={{
//               // borderWidth: 1,
//               // borderColor:COLORS.Blue,
//               flex: 1,
//               paddingTop: 5,
//               paddingStart: 15,
//             }}
//           >
//             <View style={{ flexDirection: 'row', marginVertical: 5 }}>
//               <Image
//                 source={ICONS.Truck}
//                 style={{ height: 14, width: 16 }}
//               />
//               <Text style={{ marginLeft: 7, fontSize: 11, color: COLORS.Grey }}>
//                 Get it between Sun, 15 Jan - Wed,18 Jan
//               </Text>
//             </View>

//             <View
//               style={{
//                 flexDirection: 'row',
//                 marginLeft: -2,
//               }}
//             >
//               <Image
//                 source={ICONS.Pay}
//                 style={{ width: 18, height: 15 }}
//               />
//               <Text style={{ marginLeft: 7, fontSize: 11, color: COLORS.Grey }}>
//                 Pay on delivery available
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View>
//           <TouchableOpacity
//             activeOpacity={0.7}
//             style={styles.submitButton}
//             onPress={() => navigation.navigate(SCREENS.Cart)}
//           >
//             <Text
//               style={{
//                 fontSize: 16,
//                 color: COLORS.White,
//                 fontFamily: FONTS.Bold,
//               }}
//             >
//               Add to Cart
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default OrderDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 15,
//   },
//   submitButton: {
//     paddingVertical: 13,
//     backgroundColor: COLORS.ThemeColor,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     fontFamily: FONTS.Regular,
//     marginBottom: 10,
//     marginHorizontal: 15,
//   },
// });

import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { ScrollView } from 'react-native-gesture-handler';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from '../redux/CartReducer';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const OrderDetails = ({ navigation, route }) => {
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

  const { product } = route.params;
  let [count, setCount] = useState(1);
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            Order Details
          </Text>
        </View>
        <View
          style={{
            height: '45%',
            width: '100%',
            // zIndex: -1,
            // borderColor: COLORS.Red,
            // borderWidth: 2,
            marginTop: 12,
          }}
        >
          <Image
            // source={IMAGES.OD_BTparty}
            source={product.img}
            style={{ width: '100%', flex: 1 }}
            resizeMode="cover"
          />
        </View>
        {/* <ScrollView style={{}}> */}
        <View
          style={{
            // borderColor: COLORS.Red,
            // borderWidth: 2,
            flex: 1,
            marginTop: -60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.White,
            // zIndex: 2s,
          }}
        >
          <View
            style={{
              // borderColor: COLORS.Red,
              // borderWidth: 2,
              paddingTop: 20,
              paddingLeft: 15,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Medium,
                color: COLORS.Black,
                fontSize: 18,
              }}
            >
              {/* Blue Theme Party */}
              {product.title}
            </Text>
          </View>

          <View
            style={{
              // borderColor: COLORS.Red,
              // borderWidth: 2,
              paddingTop: 8,
              paddingStart: 15,
              paddingEnd: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={{ fontFamily: FONTS.Medium, color: COLORS.ThemeColor }}
            >
              ₹ {product.price}.00
            </Text>
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
                onPress={() => setCount(Math.max(count - 1, 1))}
              >
                <Image source={ICONS.Minus} style={{ height: 20, width: 20 }} />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: FONTS.Medium,
                  color: COLORS.Black,
                  marginHorizontal: 10,
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCount(Math.min(count + 1))}
              >
                <Image source={ICONS.Add} style={{ height: 20, width: 20 }} />
              </TouchableOpacity>
            </View>
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
                color: COLORS.Black,
                fontSize: 16,
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
              style={{ color: COLORS.Grey, textAlign: 'justify', fontSize: 13 }}
            >
              Best birthday decoration ideas involve use of lights. Attractive
              party lights not only heighten the overall atmosphere but also set
              the mood. From savvy lantern fairy lights to smart mood lights,
              there are many options, when it comes to using lights as birthday
              decorations ideas. One can hang lanterns on the corner of the wall
              or keep them on the table as they make up for simple birthday
              decorations. Fairy lights, the small white or multi-coloured light
              strings can be used artistically to add a glowing touch to your
              party décor. Glittering fairy lights can be draped around curtains
              or balconies, plants, or simply weave strands of lights throughout
              the floral centrepieces.
            </Text>
          </View>

          <View
            style={{
              // borderColor:COLORS.Blue,
              // borderWidth: 2,
              paddingTop: 15,
              paddingLeft: 15,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Medium,
                color: COLORS.Black,
                fontSize: 16,
              }}
            >
              Delivery & Service
            </Text>
          </View>

          <View
            style={{
              // borderWidth: 1,
              // borderColor:COLORS.Blue,
              flex: 1,
              paddingTop: 5,
              paddingStart: 15,
            }}
          >
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <Image source={ICONS.Truck} style={{ height: 14, width: 16 }} />
              <Text style={{ marginLeft: 7, fontSize: 11, color: COLORS.Grey }}>
                Get it between Sun, 15 Jan - Wed,18 Jan
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: -2,
              }}
            >
              <Image source={ICONS.Pay} style={{ width: 18, height: 15 }} />
              <Text style={{ marginLeft: 7, fontSize: 11, color: COLORS.Grey }}>
                Pay on delivery available
              </Text>
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.submitButton}
            onPress={() => {
              addItemToCart(product);
              navigation.navigate(SCREENS.Cart);
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.White,
                fontFamily: FONTS.Bold,
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: COLORS.White,
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
