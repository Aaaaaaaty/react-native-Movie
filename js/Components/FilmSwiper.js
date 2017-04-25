import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import pxTodp from '../utils/pxTodp'
import Swiper from 'react-native-swiper';

var screenWidth = Dimensions.get('window').width;
export default class FilmSwiper extends Component {
  render() {
    let { filmListScrollViewImg } = this.props
    let images = filmListScrollViewImg.map((item, index) => {
      let uri = { uri: item }
      return (
          <Image  key={ 'swiperImg' + index}
                  style={ styles.image }
                  source={ uri }/>
      )
    })
    return (
      <Swiper showsButtons={ false }
              autoplay={ true }
              height={ pxTodp(300) }
              dotColor={ '#f4797e'}
              activeDotColor={ '#ffffff' }
              paginationStyle={{
                position: 'absolute',
                top: pxTodp(280),}}
              >
        { images }
      </Swiper>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    marginTop: pxTodp(-12)
  },
  image: {
    width: screenWidth,
    height: pxTodp(300)
  },
})
