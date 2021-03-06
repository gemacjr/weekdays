/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DayItem from "./src/dayitem"
import Moment from "moment"

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class weekdays extends Component {


  days(){
    var daysItems = [];

    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems

  }

  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center',  // Moves stuff width wise
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('weekdays', () => weekdays);
