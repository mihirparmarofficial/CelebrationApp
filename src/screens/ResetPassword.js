// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
//   Alert,
// } from 'react-native';
// import {Formik} from 'formik';
// import * as yup from 'yup';
// import {FONTS} from '../common/Utils/Fonts';

// const ResetPassword = ({navigation}) => {
//   const initialValues = {
//     password: '',
//     confirmPassword: '',
//   };

//   const passwordValidationSchema = yup.object().shape({
//     password: yup
//       .string()
//       .required('Password is required')
//       .min(8, 'Password must be at least 8 characters long'),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref('password'), null], 'Passwords must match'),
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleSubmit = values => {
//     navigation.navigate('BTab', {formData: values});
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Logo</Text>
//         <Text style={styles.textStyle}>Reset Password</Text>

//         <Formik
//           initialValues={initialValues}
//           validationSchema={passwordValidationSchema}
//           onSubmit={handleSubmit}>
//           {({
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             values,
//             errors,
//             touched,
//           }) => (
//             <View>
//               <Text style={styles.inputText}>New Password</Text>
//               <View style={styles.inputStyle}>
//                 <Image
//                   source={ICONS.Lock}
//                   style={styles.searchIcon}
//                 />
//                 <TextInput
//                   style={{width: '80%'}}
//                   onChangeText={handleChange('password')}
//                   onBlur={handleBlur('password')}
//                   value={values.password}
//                   placeholder={'Password'}
//                   secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setShowPassword(!showPassword)}>
//                   <Image
//                     source={
//                       showPassword
//                         ? ICONS.CloseEye
//                         : ICONS.OpenEye
//                     }
//                     style={styles.searchIcon}
//                   />
//                 </TouchableOpacity>
//               </View>
//               {errors.password && touched.password && (
//                 <Text style={{color: COLORS.Red}}>{errors.password}</Text>
//               )}

//               <Text style={styles.inputText}>Confirm Password</Text>
//               <View style={styles.inputStyle}>
//                 <Image
//                   source={ICONS.Lock}
//                   style={styles.searchIcon}
//                 />
//                 <TextInput
//                   style={{width: '80%'}}
//                   onChangeText={handleChange('confirmPassword')}
//                   onBlur={handleBlur('confirmPassword')}
//                   value={values.confirmPassword}
//                   placeholder={'Confirm Password'}
//                   secureTextEntry={!showConfirmPassword}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
//                   <Image
//                     source={
//                       showConfirmPassword
//                         ? ICONS.CloseEye
//                         : ICONS.OpenEye
//                     }
//                     style={styles.searchIcon}
//                   />
//                 </TouchableOpacity>
//               </View>
//               {errors.confirmPassword && touched.confirmPassword && (
//                 <Text style={{color: COLORS.Red}}>{errors.confirmPassword}</Text>
//               )}

//               <TouchableOpacity
//                 style={styles.submitButton}
//                 onPress={handleSubmit}>
//                 <Text
//                   style={{fontSize: 16, color: COLORS.White, fontFamily: FONTS.Bold,}}>
//                   Save Password
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </Formik>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ResetPassword;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   searchIcon: {
//     height: 20,
//     width: 20,
//     marginRight: 10,
//   },
//   heading: {
//     lineHeight: 41.15,
//     fontSize: 34,
//     textAlign: 'center',
// fontFamily: FONTS.Bold,
//     marginVertical: 50,
//     color: COLORS.ThemeColor,
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 20,
//     lineHeight: 24,
//     marginVertical: 10,
// fontFamily: FONTS.Bold,
//   },
//   inputStyle: {
//     height: 44,
//     padding: 10,
//     borderColor: COLORS.BorderColor,
//     borderWidth: 1.3,
//     borderRadius: 10,
//     color: COLORS.Black,
//     fontFamily: FONTS.Regular,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   inputText: {
//     textAlign: 'left',
//     fontSize: 14,
// fontFamily: FONTS.Medium,
//     marginTop: 20,
//     marginBottom: 5,
//   },
//   submitButton: {
//     paddingVertical: 13,
//     marginTop: 70,
//     backgroundColor: COLORS.ThemeColor,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     fontFamily: FONTS.Regular,
//   },
// });

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FONTS } from '../common/Utils/Fonts';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const ResetPassword = ({ navigation }) => {
  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const passwordValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (values) => {
    navigation.navigate(SCREENS.BTab, { formData: values });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Logo</Text>
        <Text style={styles.textStyle}>Reset Password</Text>

        <Formik
          initialValues={initialValues}
          validationSchema={passwordValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Text style={styles.inputText}>New Password</Text>
              <View style={styles.inputStyle}>
                <Image source={ICONS.Lock} style={styles.searchIcon} />
                <TextInput
                  style={{ flex: 1, color: COLORS.Black }}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder={'Password'}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ marginStart: 10 }}
                  onPressIn={() => setShowPassword(true)} // Show password when pressed
                  onPressOut={() => setShowPassword(false)} // Hide password when released
                >
                  <Image
                    source={showPassword ? ICONS.CloseEye : ICONS.OpenEye}
                    style={styles.searchIcon}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && (
                <Text style={{ color: COLORS.Red }}>{errors.password}</Text>
              )}

              <Text style={styles.inputText}>Confirm Password</Text>
              <View style={styles.inputStyle}>
                <Image source={ICONS.Lock} style={styles.searchIcon} />
                <TextInput
                  style={{ flex: 1 }}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder={'Confirm Password'}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ marginStart: 10 }}
                  onPressIn={() => setShowConfirmPassword(true)} // Show confirm password when pressed
                  onPressOut={() => setShowConfirmPassword(false)} // Hide confirm password when released
                >
                  <Image
                    source={
                      showConfirmPassword ? ICONS.CloseEye : ICONS.OpenEye
                    }
                    style={styles.searchIcon}
                  />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={{ color: COLORS.Red }}>
                  {errors.confirmPassword}
                </Text>
              )}

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.White,
                    fontFamily: FONTS.Bold,
                  }}
                >
                  Save Password
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  heading: {
    lineHeight: 41.15,
    fontSize: 34,
    textAlign: 'center',
    fontFamily: FONTS.Bold,
    marginVertical: 50,
    color: COLORS.ThemeColor,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    marginVertical: 10,
    fontFamily: FONTS.Bold,
    color: COLORS.Black,
  },
  inputStyle: {
    height: 44,
    padding: 10,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    textAlign: 'left',
    fontFamily: FONTS.Medium,
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    color: COLORS.Black,
  },
  submitButton: {
    paddingVertical: 13,
    marginTop: 70,
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
  },
});
