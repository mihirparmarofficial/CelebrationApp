import messaging from '@react-native-firebase/messaging';
import { showNotification } from './Notifications';

export const notificationHandler = () => {
    messaging().onNotificationOpenedApp(async (remoteMessage) => {
        console.log('Received background notification: ', remoteMessage);
    });
    messaging().getInitialNotification().then(async (remoteMessage) => {
        console.log('Received closed app notification: ', remoteMessage);
    });
    messaging().onMessage(async remoteMessage => {
        const { title, body } = remoteMessage.notification
        showNotification(title, body)
    });
    messaging().onMessageSent(async remoteMessage => {
        const { title, body } = remoteMessage.notification
        console.log("NOTIFICATION:===>", remoteMessage.notification);
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
    });
} 
