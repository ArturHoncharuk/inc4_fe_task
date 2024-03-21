import { Toast } from 'react-native-toast-notifications';

class LocalNotifications {
  constructor() {}

  warning(message: string) {
    Toast.show(message, { type: 'warning' });
  }
}

export const notifications = new LocalNotifications();
