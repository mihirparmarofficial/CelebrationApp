import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import { FONTS } from '../common/Utils/Fonts';
import { SCREENS } from '../common/Utils/Screens';
import { COLORS } from '../common/Utils/Colors';
import { IMAGES } from '../common/Utils/Images';
import { ICONS } from '../common/Utils/Icons';

const CancelOrder = ({ navigation }) => {
  const stages = [
    { id: 1, name: 'Order Confirmed', date: 'Thu, 04 Jan, 4:49 PM' },
    { id: 2, name: 'Order Preparing', date: 'Fri, 05 Jan, 10:00 AM' },
    { id: 3, name: 'Order Shipped', date: 'Fri, 05 Jan, 09:00 PM' },
    { id: 4, name: 'Order Delivered', date: 'Sat, 06 Jan, 11:00 AM' },
  ];

  const [currentStage, setCurrentStage] = useState(4);

  const getIcon = (stageId) => {
    if (stageId < currentStage) {
      return ICONS.CompletedIcon;
    } else if (stageId === currentStage) {
      return ICONS.RunningIcon;
    } else {
      return ICONS.NotCompletedIcon;
    }
  };

  const getStyle = (stageId) => {
    if (stageId < currentStage) {
      return styles.completedText;
    } else if (stageId === currentStage) {
      return styles.runningText;
    } else {
      return styles.notCompletedText;
    }
  };

  // const getDateStyle = stageId => {
  //   if (stageId < currentStage || stageId === currentStage) {
  //     return styles.runningDate;
  //   } else {
  //     return styles.notCompletedDate;
  //   }
  // };
  const getDateStyle = (stageId) => {
    if (stageId < currentStage) {
      return styles.completedDate;
    } else if (stageId === currentStage) {
      return styles.runningDate;
    } else {
      return styles.notCompletedDate;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            height: Platform.OS === 'android' ? 25 : null,
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={ICONS.GoBack}
                style={{ height: 20, width: 20, alignItems: 'flex-start' }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: FONTS.SemiBold,
                color: COLORS.Black,
              }}
            >
              Track Order
            </Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <ScrollView>
          <View style={{ alignItems: 'center', flex: 1, marginTop: '5%' }}>
            <View
              style={{
                width: '85%',
                padding: 20,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: COLORS.BorderColor,
                justifyContent: 'center',
              }}
            >
              <View style={styles.orderInfo}>
                <Text style={styles.orderID}>Order ID : #84569</Text>
                <Text style={styles.orderDate}>Sat, 06 Jan</Text>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  marginHorizontal: -20,
                  borderColor: COLORS.BorderColor,
                  marginBottom: 15,
                }}
              />
              <ScrollView style={{ marginVertical: 10 }}>
                <View>
                  {stages
                    .slice()
                    .reverse()
                    .map((stage, index) => (
                      <React.Fragment key={stage.id}>
                        <View style={styles.timelineItem}>
                          <Image
                            source={getIcon(stage.id)}
                            style={styles.statusIcon}
                          />
                          <View style={styles.textContainer}>
                            <Text style={getStyle(stage.id)}>{stage.name}</Text>
                            <Text style={getDateStyle(stage.id)}>
                              {stage.date}
                            </Text>
                          </View>
                        </View>
                        {index < stages.length - 1 && (
                          <View
                            style={
                              stage.id <= currentStage
                                ? styles.greenLine
                                : styles.greyLine
                            }
                          />
                        )}
                      </React.Fragment>
                    ))}
                </View>
              </ScrollView>
              <View>
                <Text style={{ marginBottom: 10 }}>Set Order Stage:</Text>
                {stages.map((stage) => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={stage.id}
                    onPress={() => setCurrentStage(stage.id)}
                    style={[
                      styles.stageButton,
                      currentStage === stage.id && styles.activeButton,
                    ]}
                  >
                    <Text style={styles.stageButtonText}>{stage.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CancelOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? '5%' : null,
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  orderID: {
    fontSize: 16,
    color: COLORS.Black,
  },
  orderDate: {
    fontSize: 16,
    color: COLORS.Grey,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notCompletedText: {
    fontSize: 16,
    color: COLORS.Black,
  },
  notCompletedDate: {
    fontSize: 14,
    color: COLORS.LightGrey,
  },
  runningText: {
    fontSize: 16,
    color: COLORS.ExtraLightGreen,
    fontWeight: 'bold',
  },
  runningDate: {
    fontSize: 14,
    color: COLORS.ExtraLightGreen,
  },
  completedText: {
    fontSize: 16,
    color: COLORS.BorderColor,
  },
  completedDate: {
    color: COLORS.BorderColor,
  },
  greenLine: {
    borderLeftWidth: 1,
    height: 30,
    borderLeftColor: COLORS.ExtraLightGreen,
    marginLeft: 12,
    marginTop: -10,
    borderStyle: Platform.OS === 'ios' ? 'solid' : 'dashed',
  },
  greyLine: {
    borderLeftWidth: 1,
    height: 30,
    borderLeftColor: COLORS.ExtraLightGrey,
    marginLeft: 12,
    marginTop: -10,
    borderStyle: Platform.OS === 'ios' ? 'solid' : 'dashed',
  },
  stageButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.ExtraLightGrey,
    borderRadius: 5,
    marginVertical: 5,
  },
  activeButton: {
    backgroundColor: COLORS.ExtraLightGreen,
  },
  stageButtonText: {
    fontSize: 16,
    color: COLORS.Black,
  },
});
