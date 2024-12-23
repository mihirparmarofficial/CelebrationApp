import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import DocumentPicker from 'react-native-document-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const CustomOrder = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: 'Baloon',
    num: '12',
    info: 'I want 12 more golden balloons!',
  });
  const [fileData, setFileData] = useState([]);
  const [uploading, setUploading] = useState(false);
  // const [transferred, setTransferred] = useState(0);
  // const [modalVisible, setModalVisible] = useState(false);

  const selectDocs = async () => {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
        allowMultiSelection: true,
      });
      setFileData(results);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the upload', error);
      } else {
        console.log(error);
      }
    }
  };

  const uploadDocsAndNavigate = async () => {
    if (
      !formData.name ||
      !formData.num ||
      !formData.info ||
      fileData.length === 0
    ) {
      Alert.alert(
        'Error',
        'Please fill in all the fields and select at least one file.'
      );
      return;
    }

    setUploading(true);
    let uploadedFiles = [];

    try {
      for (const file of fileData) {
        const pathToFile = file.fileCopyUri;
        const storageRef = storage().ref(`/uploads/${file.name}`);

        await storageRef.putFile(pathToFile);
        const downloadUrl = await storageRef.getDownloadURL();
        uploadedFiles.push({ name: file.name, url: downloadUrl });
      }

      const orderData = {
        name: formData.name,
        num: formData.num,
        info: formData.info,
        files: uploadedFiles,
        createdAt: new Date(),
      };

      await firestore().collection('orders').add(orderData);
      console.log('Files uploaded and order data saved successfully.');

      setFormData({ name: '', num: '', info: '' });
      setFileData([]);
      navigation.navigate(SCREENS.ContactDetails);
    } catch (error) {
      console.error('Error during upload:', error);
      Alert.alert(
        'Upload Error',
        'An error occurred while uploading. Please try again.'
      );
    } finally {
      setUploading(false);
    }
  };

  //by supreme god
  const removeFile = (index) => {
    setFileData((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // //by mentor
  // const removeFile = index => {
  //   const _blank = [...fileData];
  //   console.log('Before ', _blank);
  //   _blank.splice(index, 1);
  //   console.log('After ', _blank);
  //   setFileData(_blank);
  // };

  const renderItem = ({ item, index }) => (
    <View style={styles.fileItem}>
      <Image style={styles.fileImage} source={{ uri: item.fileCopyUri }} />
      <View style={styles.fileNameContainer}>
        <Text style={styles.fileName}>{item.name}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.removeButton}
        // onPress={() =>setFileData(fileData.filter((_, index) => index !== item.index))}>
        // onPress={() => removeFile(index)}>
        onPress={() => removeFile(index)}
      >
        <Image source={ICONS.Close} style={styles.closeButton} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image source={ICONS.GoBack} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Custom Order</Text>
        </View>

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.inputText}>Custom Name</Text>
            <View style={styles.inputStyle}>
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                value={formData.name}
                onChangeText={(txt) => setFormData({ ...formData, name: txt })}
                placeholder={'Mihir'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Custom Number</Text>
            <View style={styles.inputStyle}>
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                value={formData.num}
                onChangeText={(txt) => setFormData({ ...formData, num: txt })}
                placeholder={'2'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Add Your Requirement</Text>
            <View style={styles.textArea}>
              <TextInput
                style={{ flex: 1, color: COLORS.Black }}
                multiline
                value={formData.info}
                onChangeText={(txt) => setFormData({ ...formData, info: txt })}
                placeholder={'Write here...'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputText}>Add Your Image</Text>
            <View style={styles.fileUploadContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.fileUploadButton}
                onPress={selectDocs}
              >
                <Image source={ICONS.Image} style={{ height: 20, width: 20 }} />
                <Text style={styles.chooseFileText}>Choose file here ...</Text>
                <Text style={styles.supportedFilesText}>
                  Supports: JPG, PNG
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.fileListContainer}>
          {fileData.length > 0 ? (
            <FlatList
              data={fileData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{
                paddingHorizontal: RFValue(11),
                // paddingVertical: RFValue(-10),
                gap: RFValue(8),
              }}
              showsVerticalScrollIndicator={false}
            />
          ) : null}
        </View>

        <View style={styles.submitButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.submitButton}
            onPress={uploadDocsAndNavigate}
          >
            {uploading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.submitButtonText}>Add to Cart</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    // paddingLeft: 15,
    // paddingRight: 15,
    paddingHorizontal: 15,
  },
  backButton: {
    height: 20,
    width: 20,
    alignItems: 'flex-start',
  },
  closeButton: {
    height: 20,
    width: 20,
    // alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 20,
    marginLeft: '25.5%',
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
  },
  formContainer: {
    padding: 15,
  },
  inputText: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
  },
  inputStyle: {
    width: '100%',
    height: 44,
    paddingHorizontal: 10,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  textArea: {
    width: '100%',
    paddingHorizontal: 10,
    height: 100,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    color: COLORS.Black,
    fontFamily: FONTS.Regular,
  },
  fileUploadContainer: {
    width: '100%',
    height: 100,
    borderColor: COLORS.BorderColor,
    borderWidth: 1.3,
    borderRadius: 10,
    borderStyle: 'dashed',
    color: COLORS.Black,
  },
  fileUploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  chooseFileText: {
    fontSize: 12,
    marginTop: 5,
    color: COLORS.Black,
  },
  supportedFilesText: {
    fontSize: 9,
    color: COLORS.Grey,
  },
  fileListContainer: {
    flex: 1,
  },
  noFilesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonContainer: {
    marginTop: 'auto',
  },
  submitButton: {
    paddingVertical: 13,
    backgroundColor: COLORS.ThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  submitButtonText: {
    color: COLORS.White,
    fontFamily: FONTS.Medium,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 5,
    borderWidth: 1,
    borderColor: COLORS.BorderColor,
    borderRadius: 10,
    padding: 8,
  },
  fileImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  fileNameContainer: {
    flex: 1,
    marginLeft: 10,
  },
  fileName: {
    fontSize: 14,
    fontFamily: FONTS.Medium,
  },
  removeButton: {
    padding: 5,
  },
});

//-------------------------------------------------------------------------------------------
