import { PermissionsAndroid, Platform } from "react-native";
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";

export async function requestIosNotificationPermission() {
    return await messaging().requestPermission();
}

export const requestAndroidNotificationPermission = async () => {
    try {
        return await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
    } catch (error) {
        console.log("error", error);
    }
}
// channel ID :-fcm_fallback_notification_channel
export const showNotification = (title, message) => {
    PushNotification.localNotification({
        channelId: 'fcm_fallback_notification_channel',
        title: title,
        message: message,
    });
}

export const subscribeTopic = async (topic) => {
    messaging()
        .subscribeToTopic(topic)
        .then(() => console.log("Subscribed to topic:", topic))
        .catch((e) => {
            console.log(e);
        });
};

export const unSubscribeTopic = async (topic) => {
    messaging()
        .unsubscribeFromTopic(topic)
        .then(() => console.log("Subscribed to topic:", topic))
        .catch((e) => {
            console.log(e);
        });
};