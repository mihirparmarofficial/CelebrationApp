import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  Keyboard,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { BackHandler, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  AllCategoryData,
  AllData,
  CategoryData,
  SubCategoryData,
  TrendingData,
} from '../common/Utils/Data';
import { SCREENS } from '../common/Utils/Screens';

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.37;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;
const TextInputHeight = height * 0.048;

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  // const [filteredData, setFilteredData] = useState([]);
  // const handleSearch = useCallback(
  //   (text) => {
  //     setSearchQuery(text);
  //     setIsSearching(false);
  //     setTimeout(() => {
  //       setIsSearching(true);
  //       if (text?.length > 0) {
  //         const filtered = SubCategoryData.filter((item) =>
  //           item.title.toLowerCase().includes(text.toLowerCase())
  //         );
  //         setFilteredData(filtered);
  //         setModalVisible(filtered.length > 0);
  //       } else {
  //         setFilteredData([]);
  //         setModalVisible(false);
  //       }
  //       setIsSearching(false);
  //     }, 500);
  //   },
  //   [setFilteredData, setModalVisible]
  // );

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = SubCategoryData.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const [formData, setFormData] = useState({
    search: '',
  });
  const [select, setSelect] = useState(1);

  const renderItem1 = ({ item }) => {
    const backgroundColor = item.id === select ? COLORS.ThemeColor : null;
    const color = item.id === select ? COLORS.White : COLORS.Grey;
    const borderColor = item.id === select ? COLORS.ThemeColor : COLORS.Grey;
    const fontFamily = item.id === select ? FONTS.SemiBold : null;
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => setSelect(item.id)}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderWidth: 1,
            borderRadius: 8,
            borderColor,
            marginEnd: 10,
            backgroundColor,
          }}
        >
          <Text style={{ color, fontFamily, fontSize: RFValue(11) }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem2 = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={item.onPress}
        onPress={() => {
          if (item.id == 5) {
            navigation.navigate(SCREENS.SubCategory);
          }
        }}
        style={{
          borderWidth: 1,
          borderBottomWidth: 3,
          borderBottomColor: COLORS.LightBorderColor,
          borderRadius: 15,
          borderColor: COLORS.BorderColor,
          marginEnd: 10,
          alignItems: 'center',
          backgroundColor: COLORS.White,
          marginTop: 5,
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
        }}
      >
        <Image
          style={{
            // height: 120,
            // width: 130,
            width: ITEM_WIDTH * 1,
            height: ITEM_HEIGHT * 0.78,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
          source={item.img}
        />
        {/* <Text
          style={{
            color: COLORS.Black,
            padding: 8,
            fontFamily: FONTS.Medium,
            fontSize: RFValue(11),
          }}>
          {item.title}
        </Text> */}
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
          }}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem3 = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          // marginStart: 2,
          // marginEnd: 13,
          marginBottom: 10,
          paddingHorizontal: 12,
          // backgroundColor: COLORS.Green,
          // width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{
            height: ITEM_HEIGHT * 0.6,
            width: ITEM_WIDTH * 0.73,
            // height: 105,
            // width: 105,
            alignItems: 'flex-start',
            borderRadius: 10,
          }}
          source={item.img}
        />
        <View
          style={{
            flex: 1,
            height: ITEM_HEIGHT * 0.5,
            // height: '85.5%',
            borderWidth: 1,
            marginTop: 'auto',
            marginBottom: 'auto',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeftWidth: 0,
            borderRadius: 15,
            borderColor: COLORS.LightBorderColor,
            // borderColor: COLORS.Black,
            // borderColor: COLORS.BorderColor,
            flexDirection: 'row',
            // alignItems: 'center',
            // paddingTop: 2,
          }}
        >
          <View
            style={{
              // borderBlockColor: COLORS.Red,
              // borderColor: COLORS.Red,
              // borderWidth: 3,
              // width: '65%',
              flex: 3,
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingVertical: '4%',
              paddingLeft: '3%',
              // marginTop: -2,
              // backgroundColor: COLORS.Red,
              // justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: COLORS.Black,
                // padding: 8,
                // textAlign: 'left',
                // fontSize: 14,
                fontSize: RFValue(10.5),
                fontFamily: FONTS.Medium,
                // backgroundColor: COLORS.Red,
              }}
            >
              {item.title}
            </Text>
            <View style={{ width: '93%' }}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{
                  color: COLORS.Grey,
                  // paddingHorizontal: 8,
                  // marginTop: -3,
                  // textAlign: 'left',
                  fontSize: RFValue(8.5),
                  fontFamily: FONTS.Regular,
                }}
              >
                {item.text}
              </Text>
            </View>
          </View>
          <View
            style={{
              // borderBlockColor: 'yellow',
              // borderColor: 'yellow',
              // borderWidth: 3,
              flexDirection: 'column',
              justifyContent: 'space-between',
              // marginStart: 'auto',
              // marginEnd: '4%',
              alignItems: 'flex-end',
              // marginTop: -8,
              // width: 90,
              flex: 1.2,
              // backgroundColor: COLORS.Green,
              paddingVertical: '4%',
              // marginVertical: -10,
              paddingRight: '4%',
            }}
          >
            <Text
              style={{
                color: COLORS.Black,
                // textAlign: 'left',
                fontSize: RFValue(9.5),
                fontFamily: FONTS.Medium,
                // borderColor: COLORS.Green,
                // borderWidth: 1,
                // paddingVertical: 15,
              }}
            >
              {item.price}
            </Text>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  borderColor: COLORS.ThemeColor,
                  borderWidth: 1,
                  borderRadius: 5,
                  // backgroundColor:COLORS.Blue,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                }}
              >
                <Text
                  style={{
                    color: COLORS.ThemeColor,
                    // textAlign: 'center',
                    fontSize: RFValue(8),
                    fontFamily: FONTS.SemiBold,
                  }}
                >
                  {item.btn}
                </Text>
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
            alignItems: 'center',
            justifyContent: 'space-between',
            // backgroundColor: COLORS.Red,
          }}
        >
          <View style={{ width: 70 }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: FONTS.Bold,
                color: COLORS.ThemeColor,
                // marginTop: -5,
                // alignItems: 'center',
                // justifyContent: 'center',
              }}
            >
              Logo
            </Text>
          </View>
          <View style={{ width: 70, alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: FONTS.SemiBold,
                color: COLORS.Black,
                fontSize: 20,
              }}
            >
              Home
            </Text>
          </View>
          <View
            style={{
              width: 70,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              // backgroundColor:COLORS.Blue,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate(SCREENS.Notification)}
            >
              <Image
                source={ICONS.Notification}
                style={{
                  height: 20,
                  width: 20,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ zIndex: 1, width: width * 1 }}>
          <View style={{ paddingHorizontal: 12 }}>
            <View style={styles.inputStyle}>
              <Image source={ICONS.Search} style={styles.searchIcon} />
              <TextInput
                style={{
                  flex: 1,
                  paddingEnd: 10,
                  color: COLORS.Black,
                  zIndex: 2,
                }}
                // value={searchQuery}
                // onChangeText={(text) => {
                //   if (!isSearching) {
                //     handleSearch(text);
                //   }
                // }}
                value={searchText}
                onChangeText={handleSearch}
                placeholder={'Search decoration'}
                // onFocus={() => setModalVisible(false)}
              />
            </View>
          </View>
          {filteredData.length > 0 && (
            <View style={{ alignItems: 'center', paddingHorizontal: 12 }}>
              <View style={styles.resultsContainer}>
                {/* <View style={[styles.modalContent]}> */}
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={filteredData}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[styles.productItem]}
                      activeOpacity={0.7}
                      onPress={() => {
                        setModalVisible(false);
                        navigation.navigate(SCREENS.CustomDecoration, {
                          product: item,
                        });
                      }}
                    >
                      <Image source={item.img} style={styles.productImage} />
                      <Text style={[styles.productName]}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          )}
        </View>
        {/* <Modal
          transparent
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback
            style={{ backgroundColor: COLORS.Red }}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={[styles.modalContent]}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filteredData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[styles.productItem]}
                        activeOpacity={0.7}
                        onPress={() => {
                          setModalVisible(false);
                          navigation.navigate(SCREENS.CustomDecoration, {
                            product: item,
                          });
                        }}
                      >
                        <Image source={item.img} style={styles.productImage} />
                        <Text style={[styles.productName]}>{item.title}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal> */}
        {/* <Modal
          transparent
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={[styles.contentOfModel]}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filteredData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[styles.productItem]}
                        activeOpacity={0.7}
                        onPress={() => {
                          setModalVisible(false);
                          navigation.navigate(SCREENS.CustomDecoration, {
                            product: item,
                          });
                        }}
                      >
                        <Image source={item.img} style={styles.productImage} />
                        <Text style={[styles.productName]}>{item.title}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal> */}
        {filteredData.length > 0 ? (
          <ScrollView
            contentContainerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            showsVerticalScrollIndicator={false}
            // scrollEventThrottle={16}
          >
            <View
              style={{
                flexDirection: 'row',
                marginTop: 12,
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: FONTS.Medium,
                  color: COLORS.Black,
                }}
              >
                Category
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  textAlign: 'right',
                  color: COLORS.ThemeColor,
                  marginLeft: 'auto',
                }}
                onPress={() =>
                  navigation.navigate(SCREENS.AllCategory, {
                    formData,
                  })
                }
              >
                <Text
                  style={{
                    color: COLORS.ThemeColor,
                    marginTop: 5,
                    fontFamily: FONTS.Medium,
                  }}
                >
                  View All ›
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 8 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={CategoryData}
                renderItem={renderItem1}
                horizontal={true}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingLeft: 13 }}
              />
            </View>
            <View style={{ marginTop: 8 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={AllCategoryData}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingLeft: 13 }}
                horizontal={true}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: FONTS.Medium,
                  color: COLORS.Black,
                }}
              >
                Trending
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  textAlign: 'right',
                  color: COLORS.ThemeColor,
                  marginLeft: 'auto',
                }}
                onPress={() =>
                  navigation.navigate(SCREENS.AllCategory, {
                    formData,
                  })
                }
              >
                <Text
                  style={{
                    color: COLORS.ThemeColor,
                    marginTop: 5,
                    fontFamily: FONTS.Medium,
                  }}
                >
                  View All ›
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={TrendingData}
              renderItem={renderItem3}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingTop: 13, paddingBottom: 10 }}
              scrollEnabled={false}
            />
          </ScrollView>
        ) : (
          <ScrollView
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            // scrollEventThrottle={16}
          >
            <View
              style={{
                flexDirection: 'row',
                marginTop: 12,
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: FONTS.Medium,
                  color: COLORS.Black,
                }}
              >
                Category
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  textAlign: 'right',
                  color: COLORS.ThemeColor,
                  marginLeft: 'auto',
                }}
                onPress={() =>
                  navigation.navigate(SCREENS.AllCategory, {
                    formData,
                  })
                }
              >
                <Text
                  style={{
                    color: COLORS.ThemeColor,
                    marginTop: 5,
                    fontFamily: FONTS.Medium,
                  }}
                >
                  View All ›
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 8 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={CategoryData}
                renderItem={renderItem1}
                horizontal={true}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingLeft: 13 }}
              />
            </View>
            <View style={{ marginTop: 8 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={AllCategoryData}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingLeft: 13 }}
                horizontal={true}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: FONTS.Medium,
                  color: COLORS.Black,
                }}
              >
                Trending
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  textAlign: 'right',
                  color: COLORS.ThemeColor,
                  marginLeft: 'auto',
                }}
                onPress={() =>
                  navigation.navigate(SCREENS.AllCategory, {
                    formData,
                  })
                }
              >
                <Text
                  style={{
                    color: COLORS.ThemeColor,
                    marginTop: 5,
                    fontFamily: FONTS.Medium,
                  }}
                >
                  View All ›
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={TrendingData}
              renderItem={renderItem3}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingTop: 13, paddingBottom: 10 }}
              scrollEnabled={false}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
  },
  searchIcon: {
    height: 18,
    width: 18,
    marginRight: 10,
    marginLeft: 10,
  },
  inputStyle: {
    height: TextInputHeight,
    alignItems: 'center',
    marginTop: 15,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.2,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
    flexDirection: 'row',
  },
  cardTitle: {
    color: COLORS.Black,
    fontSize: RFValue(11),
    fontFamily: FONTS.Medium,
  },
  modalOverlay: {
    flex: 1,
    top: Platform.OS === 'ios' ? '17%' : '12%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    maxHeight: height / 2,
    backgroundColor: COLORS.White,
    padding: '2.5%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 12,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2.5%',
    backgroundColor: COLORS.ProductBGColor,
    marginBottom: '1.5%',
    borderRadius: 8,
  },
  productImage: {
    width: '13%',
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  productName: {
    fontSize: RFValue(12),
    color: COLORS.Black,
  },
  // modalContainer: {
  //   position: 'absolute',
  //   top: Platform.OS == 'android' ? height * 0.11 : height * 0.17, // Adjust this to position the modal below the search input
  //   left: 0,
  //   right: 0,
  //   zIndex: 1, // Ensure it appears above other content
  //   // backgroundColor: 'rgba(0, 0, 0, 0.3)',
  // },
  // contentOfModel: {
  //   maxHeight: height / 2,
  //   backgroundColor: COLORS.White,
  //   padding: '2.5%',
  //   borderBottomLeftRadius: 15,
  //   borderBottomRightRadius: 15,
  //   paddingHorizontal: 12,
  //   marginHorizontal: 12,
  // elevation: 5, // Adds shadow on Android
  // shadowColor: COLORS.Black, // Adds shadow on iOS
  // shadowOffset: { width: 0, height: 2 },
  // shadowOpacity: 0.25,
  // shadowRadius: 3.84,
  // },
  resultsContainer: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.White,
    maxHeight: height / 2,
    paddingVertical: '2.5%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 12,
    elevation: 15, // Adds shadow on Android
    shadowColor: COLORS.Black, // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ExtraLightGrey,
  },
});
