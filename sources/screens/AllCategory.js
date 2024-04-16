import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {FONTS} from '../common/Utils/Fonts';

const AllCategory = ({navigation}) => {
  const [select, setSelect] = useState();
  const DATA1 = [
    {id: '1', title: 'Decoration Item'},
    {id: '2', title: 'Custom Decoration'},
    {id: '3', title: 'Room special'},
    {id: '4', title: 'Venue Decoration'},
  ];
  const DATA2 = [
    {
      id: '1',
      title: 'Kids Birthday',
      img: require('../common/image/kid.png'),
      onPress: () => {
        navigation.navigate('SubCategory');
      },
    },
    {
      id: '2',
      title: 'Classic Birthday',
      img: require('../common/image/classic.png'),
    },
    {id: '3', title: 'Love Theme', img: require('../common/image/love.png')},
    {id: '4', title: 'Baby Shower', img: require('../common/image/baby.png')},
    {
      id: '5',
      title: 'Welcome Baby',
      img: require('../common/image/welcome.png'),
    },
    {id: '6', title: 'Temple', img: require('../common/image/temple.png')},
    {
      id: '7',
      title: 'Golden Party',
      img: require('../common/image/golden.png'),
    },
    {id: '8', title: 'Red Party', img: require('../common/image/red.png')},
  ];
  const renderItem1 = ({item}) => {
    const backgroundColor = item.id === select ? '#ffb605' : null;
    const color = item.id === select ? 'white' : '#A0A0A0';
    const borderColor = item.id === select ? '#ffb605' : '#A0A0A0';
    const fontWeight = item.id === select ? '600' : null;
    return (
      <TouchableOpacity onPress={() => setSelect(item.id)}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderWidth: 1,
            borderRadius: 8,
            borderColor,
            marginEnd: 10,
            backgroundColor,
          }}>
          <Text style={{color, fontWeight}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem2 = ({item}) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        // onPress={() => navigation.navigate('SubCategory')}
        style={{
          borderWidth: 1,
          borderRadius: 15,
          borderColor: '#C5C5C5',
          alignItems: 'center',
          backgroundColor: '#fff',
          marginVertical: 7,
          marginStart: 2,
          marginEnd: 13,
        }}>
        <Image style={{height: 155, width: 168}} source={item.img} />
        <Text style={{color: 'black', padding: 8}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../common/image/arrow-left.png')}
              style={{height: 20, width: 20, alignItems: 'flex-start'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: FONTS.Regular,
              fontSize: 20,
              marginLeft: '33%',
              fontWeight: '600',
            }}>
            Category
          </Text>
        </View>

        <View style={{marginTop: 8}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA1}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={{paddingLeft: 13, paddingRight: 13}}
          />
        </View>
        <View style={{marginTop: 10, paddingLeft: 15, paddingRight: 15}}>
          <FlatList
            contentContainerStyle={{paddingBottom: 60}}
            showsVerticalScrollIndicator={false}
            data={DATA2}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AllCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
});
