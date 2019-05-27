import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ReservationItem = ({ item }) => (
  <View style={styles.container} >

    <View style={{ flexDirection: 'column' }}>
      <Text style={styles.text}>Customer: {item.name}</Text>
      <Text style={styles.text}>Hotel: {item.hotelName}</Text>
      <Text style={styles.text}>Arrival Date: {item.arrivalDate}</Text>
      <Text style={styles.text}>Departure Date: {item.departureDate}</Text>
    </View>
    
  </View>
);

ReservationItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ReservationItem;