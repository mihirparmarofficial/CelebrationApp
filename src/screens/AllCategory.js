import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { AllCategoryData, CategoryData } from '../common/Utils/Data';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.45;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;

const AllCategory = ({ navigation }) => {
  const [select, setSelect] = useState(1);

  const renderItem1 = ({ item }) => {
    const isSelected = item.id === select;
    const backgroundColor = isSelected ? COLORS.ThemeColor : COLORS.White;
    const textColor = isSelected ? COLORS.White : COLORS.Grey;
    const borderColor = isSelected ? COLORS.ThemeColor : COLORS.Grey;
    const fontFamily = isSelected ? FONTS.SemiBold : FONTS.Regular;

    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => setSelect(item.id)}>
        <View style={[styles.categoryItem, { backgroundColor, borderColor }]}>
          <Text style={[styles.categoryText, { color: textColor, fontFamily }]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem2 = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.cardContainer}
      onPress={() => {
        if (item.id == 5) {
          navigation.navigate(SCREENS.SubCategory);
        }
      }}
    >
      <Image style={styles.cardImage} source={item.img} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
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

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image source={ICONS.GoBack} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Category</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        <View style={styles.horizontalList}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={CategoryData}
            renderItem={renderItem1}
            keyExtractor={(item) => item.id}
            horizontal
            contentContainerStyle={styles.horizontalContent}
          />
        </View>

        <FlatList
          contentContainerStyle={styles.gridContent}
          showsVerticalScrollIndicator={false}
          data={AllCategoryData}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={{ marginTop: 10 }}
        />
      </View>
    </View>
  );
};

export default AllCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  headerTitle: {
    fontFamily: FONTS.SemiBold,
    fontSize: RFValue(18),
    color: COLORS.Black,
  },
  headerPlaceholder: {
    width: 20, // Placeholder to align the header title
  },
  horizontalList: {
    marginTop: 8,
  },
  horizontalContent: {
    paddingLeft: 17,
  },
  categoryItem: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 8,
    marginEnd: 10,
  },
  categoryText: {
    fontSize: RFValue(11),
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
    height: ITEM_HEIGHT * 0.8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardTitle: {
    color: COLORS.Black,
    fontSize: RFValue(12),
    fontFamily: FONTS.Medium,
  },
});
