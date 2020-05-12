import React from 'react';
import {Image, TouchableOpacity, Platform } from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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
import PastEvents from '~/screens/PastEvents';
import UpcomingEvents from '~/screens/UpcomingEvents';
import WhosPlaying from '~/screens/WhosPlaying';
import PastEventsDetails from '~/screens/PastEventsDetails';
import UpcomingEventsDetails from '~/screens/UpcomingEventsDetails';
import Scorecard from '~/screens/Scorecard';
import Scores from '~/screens/Scores';
import Leaderboard from '~/screens/Leaderboard';

import backButton from '~/assets/backButton/backButton.png';
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
      headerTitleStyle: {
        color: colors.titleWhite,
        fontSize: 26,
        fontFamily:
          Platform.OS === 'ios' ? 'Comic Sans MS' : 'Comic Sans MS Bold',
        fontWeight: Platform.OS === 'ios' ? 'bold' : null,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 8,
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
    Scorecard: {
      screen: Scorecard,
      navigationOptions: ({navigation}) => ({
        title: 'Scorecard',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    WhosPlaying: {
      screen: WhosPlaying,
      navigationOptions: ({navigation}) => ({
        title: "Who's Playing",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    Scores: {
      screen: Scores,
      navigationOptions: ({navigation}) => ({
        title: 'Scorecard',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    Leaderboard: {
      screen: Leaderboard,
      navigationOptions: ({navigation}) => ({
        title: 'Leaderboard',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    PastEvents: {
      screen: PastEvents,
      navigationOptions: ({navigation}) => ({
        title: 'My Past Events',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    UpcomingEvents: {
      screen: UpcomingEvents,
      navigationOptions: ({navigation}) => ({
        title: 'My Upcoming Events',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    PastEventsDetails: {
      screen: PastEventsDetails,
      navigationOptions: ({navigation}) => ({
        title: 'Events Details',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} />
          </TouchableOpacity>
        ),
      }),
    },
    UpcomingEventsDetails: {
      screen: UpcomingEventsDetails,
      navigationOptions: ({navigation}) => ({
        title: 'Events Details',
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
      headerLayoutPreset: 'center',
      headerLeftContainerStyle: {
        paddingTop: Platform.OS === 'ios' ? '10%' : '15%',
        paddingLeft: '25%',
      },
      headerTitleStyle: {
        color: colors.darkWhite,
        fontSize: 26,
        fontFamily:
          Platform.OS === 'ios' ? 'Comic Sans MS' : 'Comic Sans MS Bold',
        fontWeight: Platform.OS === 'ios' ? 'bold' : null,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        elevation: 8,
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
