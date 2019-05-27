import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';

import InputField from '../InputField/InputField'

class ReservationForm extends Component {
  state = {
    name: '',
    hotelName: '',
    arrival: '',
    depart: '',
    submit: false
  }

  viewData() {
    return (
      <View style={styles.dataStyle}>
        <Text style={styles.textStyle}>Customer Name: {this.state.name}</Text>
        <Text style={styles.textStyle}>Hotel Name: {this.state.hotelName}</Text>
        <Text style={styles.textStyle}>Arrival: {this.state.arrival}</Text>
        <Text style={styles.textStyle}>Depart: {this.state.depart}</Text>
      </View>
    )
  }

  render() {
    const isSubmitted = (this.state.submit) ? this.viewData() : null
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Customer Name: </Text>
        <InputField value={this.state.name} onChangeText={(text) => this.setState({ name: text})} />
        <Text style={styles.textStyle}>Hotel Name: </Text>
        <InputField value={this.state.hotelName} onChangeText={(text) => this.setState({ hotelName: text})} />
        <Text style={styles.textStyle}>Arrival Date: </Text>
        <InputField value={this.state.arrival} onChangeText={(text) => this.setState({ arrival: text})} />
        <Text style={styles.textStyle}>Departure Data: </Text>
        <InputField value={this.state.depart} onChangeText={(text) => this.setState({ depart: text})} />

        <Button title='Submit' onPress={() => this.setState({ submit: true })} />

        {isSubmitted}
      </View>
    )
  }
}

export default ReservationForm; 