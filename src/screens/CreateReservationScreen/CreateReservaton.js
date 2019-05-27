import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';

import ReservationForm from '../../components/ReservationForm/ReservationForm';

class CreateReservation extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleStyle}>Create Reservation</Text>
            <Button title='Back' onPress={() => this.props.navigation.pop()} />
          </View>

          <ReservationForm />

        </View>
    )
  }
}

export default CreateReservation; 