import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DayItem extends Component {

  styles(){
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  color(){
    var opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 0, 0, '+ opacity + ')';
  }

  fontWeight(){
    var weight = 7 - this.props.daysUntil;
    return weight * 100;

  }

  fontSize(){
    return 60 - 6 * this.props.daysUntil;
  }

  lineHeight(){
    return 70 - 4 * this.props.daysUntil;
  }


  render() {
    return (

        <Text style={this.styles()}>
          {this.props.day}
        </Text>

    );
  }
}



module.exports = DayItem;
