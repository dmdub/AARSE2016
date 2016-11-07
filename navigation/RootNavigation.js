import React, {
  PropTypes
} from 'react';
import {
  DeviceEventEmitter,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import Router from '../navigation/Router';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <TabNavigation
        tabBarHeight={58}
        initialTab="schedule">

        <TabNavigationItem
          title="Schedule"
          id="schedule"
          renderIcon={isSelected => this._renderIcon('calendar', isSelected)}>
          <StackNavigation initialRoute={Router.getRoute('schedule')} />
        </TabNavigationItem>

        <TabNavigationItem
          title="Speakers"
          id="speakerslist"
          renderIcon={isSelected => this._renderIcon('microphone', isSelected)}>
          <StackNavigation initialRoute={Router.getRoute('speakerslist')} />
        </TabNavigationItem>

        <TabNavigationItem
          title="Updates"
          id="links"
          renderIcon={isSelected => this._renderIcon('newspaper-o', isSelected)}>
          <StackNavigation initialRoute={Router.getRoute('links')} />
        </TabNavigationItem>

        <TabNavigationItem
          title="Info"
          id="home"
          renderIcon={isSelected => this._renderIcon('info-circle', isSelected)}>
          <StackNavigation initialRoute={Router.getRoute('home')} />
        </TabNavigationItem>

      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={28}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  _registerForPushNotifications() {
    const { notification } = this.props;

    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    //registerForPushNotificationsAsync();

    // If we started the app from a push notification, handle it right away
    notification && this._handleNotification(notification);

    // Handle notifications that come in while the app is open
    return DeviceEventEmitter.addListener('Exponent.notification', this._handleNotification);
  }

  _handleNotification = ({origin, data}) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${data}`,
      Alerts.notice
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
  tabTitleText: {
    fontSize: 11,
  },
});
