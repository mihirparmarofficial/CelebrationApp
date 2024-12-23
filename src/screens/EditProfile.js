import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import auth from '@react-native-firebase/auth';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';
import { ActivityIndicator } from 'react-native-paper';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const EditProfile = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [process, setProcess] = useState(false);
  // const [fileData, setFileData] = useState([]);

  useEffect(() => {
    const curr = auth().currentUser;
    if (curr.displayName) {
      setName(curr.displayName);
    } else {
      setName('User Name');
    }
    if (curr.email) {
      setEmail(curr.email);
    } else {
      setEmail('User Email');
    }
    if (curr.photoURL) {
      setProfileImage(curr.photoURL);
    }
  }, []);
  // const [formData, setFormData] = useState({
  //   name: 'Mihir Parmar',
  //   num: '7043862036',
  //   info: 'D-501, Royal Heaven Apartment',
  //   town: 'Surat',
  // });

  // The function to update Firebase profile (photo URL and name)
  const updateProfileDetails = async (newName, newPhotoURL) => {
    // setProcess(true);
    try {
      await auth().currentUser.updateProfile({
        displayName: newName, // Update the name (if needed)
        photoURL: newPhotoURL, // Update the new photo URL
      });
      setName(newName); // Update the state with new name
      setProfileImage(newPhotoURL); // Update the state with new profile image
      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setProcess(false);
    }
  };

  // Updated selectPhoto function to pick and upload the new photo
  const selectPhoto = async () => {
    setProcess(true);
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });
      if (result.length > 0) {
        const file = result[0];
        const pathToFile = file.uri;
        // Upload the new photo to Firebase Storage
        const reference = storage().ref(
          `/profilePictures/${auth().currentUser.uid}/${file.name}`
        );
        const uploadTask = reference.putFile(pathToFile);
        uploadTask.on('state_changed', (taskSnapshot) => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
          );
        });

        uploadTask
          .then(async () => {
            // Get the download URL after uploading
            const downloadURL = await reference.getDownloadURL();
            // Now, update the profile with the new photo URL
            await updateProfileDetails(name, downloadURL); // Use the existing name from state
            console.log('Profile photo updated successfully!');
          })
          .catch((error) => {
            console.error('Error during upload:', error);
          });
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the upload');
        setProcess(false);
      } else {
        console.error('Error selecting document:', error);
      }
    }
    // finally {
    //   setProcess(false);
    // }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
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
              marginLeft: '30.5%',
              fontFamily: FONTS.SemiBold,
              color: COLORS.Black,
            }}
          >
            Edit Profile
          </Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          {process ? (
            <View
              style={{
                height: 130,
                width: 130,
                borderRadius: 100,
                backgroundColor: COLORS.Grey,
                borderWidth: 2,
                borderColor: COLORS.Black,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator size="small" color="black" />
            </View>
          ) : (
            <Image
              style={{ height: 130, width: 130, borderRadius: 100 }}
              source={profileImage ? { uri: profileImage } : ICONS.UserProfile}
            />
          )}

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={selectPhoto}
            style={{
              backgroundColor: COLORS.ThemeColor,
              height: 30,
              width: 30,
              borderRadius: 100,
              zindex: 1,
              marginTop: -35,
              marginStart: 80,
              alignItems: 'center',
              justifyContent: 'center',
              // borderWidth: 2,
              // borderColor: COLORS.Black,
            }}
          >
            <Image
              style={{ height: 18, width: 18 }}
              source={ICONS.EditPencil}
            />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <View>
            <Text style={styles.inputText}>Name</Text>
            <View style={styles.inputStyle}>
              <Image source={ICONS.Name} style={styles.searchIcon} />
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                // value={formData.name}
                value={name}
                // onChangeText={txt => setFormData({...formData, name: txt})}
                onChangeText={(txt) => setName(txt)} // Update the name
                placeholder={'Mihir Parmar'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Email</Text>
            <View style={styles.inputStyle}>
              <Image
                source={ICONS.Email}
                style={{
                  ...styles.searchIcon,
                  tintColor: COLORS.LightGrey,
                }}
              />
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                // value={formData.num}
                value={email}
                // onChangeText={txt => setFormData({...formData, num: txt})}
                onChangeText={(txt) => setEmail(txt)} // Update email locally (won't change in Firebase)
                placeholder={'7043862036'}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            // borderColor: 'cyan',
            // borderWidth: 2,
            marginTop: 'auto',
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.submitButton}
            // onPress={() =>
            //   navigation.navigate('Verification', {
            //     formData,
            //   })
            onPress={() => navigation.navigate(SCREENS.BTab)}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.White,
                fontFamily: FONTS.Bold,
              }}
            >
              Save Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    //     borderColor: COLORS.Red,
    //     borderWidth: 2,
    flex: 1,
    // padding: 15,

    // justifyContent: 'space-between',
  },
  submitButton: {
    paddingVertical: 13,
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: FONTS.Regular,
    marginHorizontal: 15,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  inputStyle: {
    width: '100%',
    height: 44,
    paddingHorizontal: 10,
    // marginVertical: 10,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  inputText: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
  },
});
