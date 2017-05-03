import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import pxTodp from '../utils/pxTodp'
import Swiper from 'react-native-swiper';
var screenWidth = Dimensions.get('window').width;
export default class FilmCinemaFromCity extends Component {
  render() {
    let { navigation } = this.props
    let cinemas = {
      "code":0,"message":"OK","result":[{"cinemaLinkId":"123451","name":"完美影城1","cityCode":"12122","cityName":"北京","goodsLimit":3,"hallCount":2,"addressString":"海淀区北太平桥西侧中央新影集团1F","phone":"1212121","trafficRoute":"123123","distanceInt":"1212",
                                        "facilityServices":[{"name":"VIP厅","des":"adsfasf","type":1},{"name":"免费WIFI","des":"adsfasf","type":2}]},

                                      {"cinemaLinkId":"12312","name":"完美影城2","cityCode":"12122","cityName":"北京","goodsLimit":3,"hallCount":3,"addressString":"北京市海淀区复兴路69号卓展购物中心5层东侧","phone":"1212121","trafficRoute":123131,"distanceInt":1212,
                                        "facilityServices":[{"name":"停车场","des":"adsfasf","type":1},{"name":"免费WIFI","des":"adsfasf","type":2}]}

                                      ]}
    let cinemasResult = cinemas['result'].map((item, index) => {
      let facilityServices = item.facilityServices.map((item, index) => {
        return (
          <View key={ 'facilityServices' + index }>
            <Text>{ item.name }</Text>
          </View>
        )
      })
      return (
        <View key={ 'cinemasResult' + index }>
          <View>
            <Text>{ item.name }</Text>
            <Text>{ item.addressString }</Text>
            <View>
              { facilityServices }
            </View>
          </View>
          <View>
            <Text>{ item.distanceInt }</Text>
          </View>
        </View>
      )
    })

    return (
      <ScrollView>
        { cinemasResult }
      </ScrollView>
    )
  }
}
FilmCinemaFromCity.navigationOptions = props => {
  let { navigation } = props
  const {state, setParams, screen} = navigation;
  const {params} = state;
  let title
  // if(params.name == undefined) {
  //   title = '北京'
  // } else {
  //   title = params.name
  // }
  return {
    headerTintColor: 'white',
    title: '影院',
    headerStyle: {
      backgroundColor: '#fe4b37'
    },
    headerLeft: (
      <TouchableOpacity
        style={ {marginLeft: pxTodp(20)}}
        onPress = { () => { navigation.navigate('FilmCityList')} }>
        <Text style={{color: '#ffffff'}}>北京</Text>
      </TouchableOpacity>
    ),
  }
}
var styles = StyleSheet.create({
})
