import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import styles from './styles';

import GrabReservations from '../../components/GrabReservationData/GrabReservations';

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'}),
  cache: new InMemoryCache(),
});

class Reservations extends Component {
  changeScreen() {
    return (
      this.props.navigation.navigate('CreateReservationScreen')
    )
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.header}>
          <Text style={styles.titleStyle}>Reservations</Text>
          <Button title='Add' onPress={this.changeScreen.bind(this)} />
        </View>

        <GrabReservations navigator={this.props.navigation} />
      </ApolloProvider>
    )
  }
}

export default Reservations; 