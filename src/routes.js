import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';

import {Dimensions} from 'react-native';

import colors from './styles';

import Home from '~/screens/Home';
import EventType from '~/screens/EventType';
import EventInfo from '~/screens/EventInfo';
import EventDate from '~/screens/EventDate';
import EventNear from '~/screens/EventNear';
import EventLocation from '~/screens/EventLocation';
import EventForm from '~/screens/EventForm';
import EventInvite from '~/screens/EventInvite';
import EventSummary from '~/screens/EventSummary';
import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';
import EventsNearMe from '~/screens/EventsNearMe';
import Search from '~/screens/Search';
import Find from '~/screens/Find';
import Details from '~/screens/Details';

import backButton from '~/assets/backButton/backButton.png';
import menuButton from '~/assets/menu/hamburger.png';
import logo from '~/assets/logo/logo.png';

const noAuthRoutes = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerTitle: () => <Image style={{marginTop: '60%'}} source={logo} />,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerTitle: () => <Image style={{marginTop: '60%'}} source={logo} />,
      },
    },
  },
  {
    initialRouteNameL: Home,
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerTransparent: true,
      headerTintColor: 'transparent',
      headerLeftContainerStyle: {
        paddingLeft: '50%',
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 26,
        fontFamily: 'comic-sans-ms-bold',
      },
      animationEnabled: false,
    },
  },
);

const AuthRoutes = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: () => <Image style={{marginTop: '60%'}} source={logo} />,
      },
    },
    EventType: {
      screen: EventType,
      navigationOptions: ({navigation}) => ({
        title: 'Create Event',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    EventDate: {
      screen: EventDate,
      navigationOptions: ({navigation}) => ({
        title: 'Create Event',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    EventInfo: {
      screen: EventInfo,
      navigationOptions: ({navigation}) => ({
        title: 'Info',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    EventNear: {
      screen: EventNear,
      navigationOptions: ({navigation}) => ({
        title: 'Create Event',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    EventLocation: {
      screen: EventLocation,
      navigationOptions: ({navigation}) => ({
        title: 'Create Event',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    EventForm: {
      screen: EventForm,
      navigationOptions: ({navigation}) => ({
        title: 'Create Event',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    EventInvite: {
      screen: EventInvite,
      navigationOptions: ({navigation}) => ({
        title: 'Create Event',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    EventSummary: {
      screen: EventSummary,
      navigationOptions: ({navigation}) => ({
        title: 'Create Event',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    EventsNearMe: {
      screen: EventsNearMe,
      navigationOptions: ({navigation}) => ({
        title: 'Events Near Me',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    Search: {
      screen: Search,
      navigationOptions: ({navigation}) => ({
        title: 'Search Events',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    Find: {
      screen: Find,
      navigationOptions: ({navigation}) => ({
        title: 'Find Events',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    Details: {
      screen: Details,
      navigationOptions: ({navigation}) => ({
        title: 'Event Details',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerTransparent: true,
      headerTintColor: 'transparent',
      headerLeftContainerStyle: {
        paddingLeft: '50%',
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 26,
        fontFamily: 'comic-sans-ms-bold',
      },
      animationEnabled: false,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: noAuthRoutes,
      App: AuthRoutes,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
