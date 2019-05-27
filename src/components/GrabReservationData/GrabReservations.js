import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { createHttpLink, HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import PropTypes from 'prop-types';

import styles from './styles';

import ReservationList from '../ReservationList/ReservationList';

const client = new ApolloClient({
  link: createHttpLink({ 
    uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev', 
    fetch }),
  cache: new InMemoryCache()
});

const GET_RESERVATIONS = gql`
  {
    reservations {
      name
      arrivalDate
      hotelName
      departureDate
      id
    }
  }
`;

const GrabReservations = graphql(GET_RESERVATIONS)(props => {
  const { error, reservations } = props.data;

  if(error) {
    return <Text>{error}</Text>;
  }
  if(reservations) {
    return (
      <ReservationList navigator={props.navigator} list={reservations} />
    )
  }
  
  return (
      <View style={styles.container} >
        <Text>Loading...</Text>
      </View>
  )
  });

GrabReservations.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default GrabReservations; 