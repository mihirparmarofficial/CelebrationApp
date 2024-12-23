/*

import Auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    let unsubscribe;
    setTimeout(async () => {
      unsubscribe = await Auth().onAuthStateChanged(user => {
        const routeName = user !== null ? 'BTab' : 'LogIn';
        // navigation.replace(routeName);
        navigation.dispatch(StackActions.replace(routeName));
        // navigation.navigate(routeName);
      });
    });
    return () => unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      //  <StatusBar barStyle={'dark-content'} /> 
      <Image
        source={IMAGES.CelebAppIcon}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    // height: 150,
    resizeMode: 'contain',
    width: '40%',
    // backgroundColor: COLORS.White,
  },
});

export default SplashScreen;

*/

import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const currentUser = Auth().currentUser;
      if (currentUser) {
        navigation.dispatch(StackActions.replace('BTab'));
      } else {
        const unsubscribe = Auth().onAuthStateChanged((user) => {
          const routeName = user ? SCREENS.BTab : SCREENS.LogIn;
          navigation.dispatch(StackActions.replace(routeName));
        });
        return () => {
          if (unsubscribe) unsubscribe();
        };
      }
    };

    checkAuthStatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={IMAGES.CelebAppIcon} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: '40%',
  },
});

export default SplashScreen;
