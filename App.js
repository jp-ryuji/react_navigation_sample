import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ModalScreen from './src/screens/ModalScreen';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen, // This is a screen component
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    /* The navigation wide style settings */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    // NOTE: mode can be either card (default) or modal.
    mode: 'modal',
    headerMode: 'none',
  }
);
