import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Button } from 'react-native';
import pxTodp from '../utils/pxTodp'
import Swiper from 'react-native-swiper';

var screenWidth = Dimensions.get('window').width;
export default class FilmCinemaFromCity extends Component {
  render() {
    let { navigation } = this.props
    return (
      <Button onPress = { () => { navigation.navigate('FilmCityList')} }
              title="go to FilmCityList"/>
    )
  }
}
FilmCinemaFromCity.navigationOptions = {
  headerTintColor: 'white',
  title: '影院',
  headerStyle: {
    backgroundColor: '#fe4b37'
  },
}
var styles = StyleSheet.create({
})
