import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import ReservationItem from '../ReservationItem/ReservationItem';

class ReservationList extends Component {
  _renderItem = ({ item }) => {
    return (
      <ReservationItem item={item} />
    );
  }

  _keyExtractor = (item, index) => item + index;

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.props.list}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    )
  }
}

ReservationList.propTypes = {
  navigator: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired
};

export default ReservationList; 