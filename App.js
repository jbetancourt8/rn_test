import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Reservations from './src/screens/ReservationScreen/Reservations';
import CreateReservation from './src/screens/CreateReservationScreen/CreateReservaton';

const AppNavigator = createStackNavigator({
  ReservationScreen: {
    screen: Reservations,
    navigationOptions: {
      header: null
    }
  },
  CreateReservationScreen: {
    screen: CreateReservation,
    navigationOptions: {
      header: null
    }
  },
    initialRouteName: 'ReservationScreen'
})

export default createAppContainer(AppNavigator);
