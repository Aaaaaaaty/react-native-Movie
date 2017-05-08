import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, WebView, TouchableOpacity, ScrollView } from "react-native"
import pxTodp from '../utils/pxTodp'
import Swiper from 'react-native-swiper';
class FilmSchemaListImg extends Component {
	render() {
			return (
        <View></View>
			)
		}
	}


  var styles = StyleSheet.create({
    wrapper: {
      backgroundColor: 'yellow',
      width: pxTodp(400)
    },
    slide1: {
      width: pxTodp(187.5),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      width: pxTodp(187.5),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      width: pxTodp(187.5),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })


export default FilmSchemaListImg
