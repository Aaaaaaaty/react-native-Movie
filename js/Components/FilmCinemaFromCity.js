import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import pxTodp from '../utils/pxTodp'
import Swiper from 'react-native-swiper';
var screenWidth = Dimensions.get('window').width;
export default class FilmCinemaFromCity extends Component {
  render() {
    let { navigation } = this.props
    let cinemas = {
      "code":0,"message":"OK","result":[{"cinemaLinkId":"123451","name":"完美影城(太平桥店)","cityCode":"12122","cityName":"北京","goodsLimit":3,"hallCount":2,"addressString":"海淀区北太平桥西侧中央新影集团1F","phone":"1212121","trafficRoute":"123123","distanceInt":"12",
                                        "facilityServices":[{"name":"VIP厅","des":"adsfasf","type":1},{"name":"免费WIFI","des":"adsfasf","type":2}]},

                                      {"cinemaLinkId":"12312","name":"完美影城(卓展店)","cityCode":"12122","cityName":"北京","goodsLimit":3,"hallCount":3,"addressString":"北京市海淀区复兴路69号卓展购物中心5层东侧南1号","phone":"1212121","trafficRoute":123131,"distanceInt":12.1,
                                        "facilityServices":[{"name":"停车场","des":"adsfasf","type":1},{"name":"免费WIFI","des":"adsfasf","type":2}]},
                                        {"cinemaLinkId":"12312","name":"完美影城(景山店)","cityCode":"12122","cityName":"北京","goodsLimit":3,"hallCount":3,"addressString":"北京市石景山区华天路景泰购物中心5层东侧南1号","phone":"1212121","trafficRoute":123131,"distanceInt":1.6,
                                          "facilityServices":[{"name":"停车场","des":"adsfasf","type":1},{"name":"免费WIFI","des":"adsfasf","type":2}]}

                                      ]}
    let cinemasResult = cinemas['result'].map((item, index) => {
      let facilityServices = item.facilityServices.map((item, index) => {
        return (
          <View key={ 'facilityServices' + index } style={ styles.facilityServicesView }>
            <Text style={ styles.facilityServicesText }>{ item.name }</Text>
          </View>
        )
      })
      return (
        <View key={ 'cinemasResult' + index } style={ styles.cinemasResult }>
          <View style={ styles.wrapper }>
            <Text style={ styles.name }>{ item.name }</Text>
            <View style={ styles.addressStringView }><Text style={ styles.addressString } numberOfLines={ 1 }>{ item.addressString }</Text></View>
            <View style={ styles.facilityServices }>
              { facilityServices }
            </View>
          </View>
          <View style={ styles.distanceInt }>
            <Text style={ styles.distanceIntText }>{ item.distanceInt }km</Text>
          </View>
        </View>
      )
    })

    return (
      <ScrollView style={ styles.scrollView }>
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
  scrollView: {
    backgroundColor: '#ffffff'
  },
  wrapper: {
    width: pxTodp(600)
  },
  addressString: {
    color: 'gray',
    fontSize: pxTodp(26)
  },
  addressStringView: {
    marginTop: pxTodp(15)
  },
  distanceIntText: {
    color: 'gray'
  },
  name: {
    fontSize: pxTodp(30)
  },
  cinemasResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderBottomWidth: pxTodp(1),
    borderColor: 'gray',
    paddingBottom: pxTodp(10),
    paddingLeft: pxTodp(20),
    marginTop: pxTodp(20)
  },
  facilityServices: {
    flexDirection: 'row'
  },
  facilityServicesText: {
    fontSize: pxTodp(20),
    color: '#6699FF'
  },
  facilityServicesView: {
    borderColor: '#6699FF',
    borderWidth: pxTodp(1),
    borderRadius: pxTodp(4),
    padding: pxTodp(1),
    marginTop: pxTodp(10),
    marginRight: pxTodp(5),
    marginBottom: pxTodp(15)
  },
  distanceInt: {
    width: pxTodp(150),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'yellow'
  }
})
