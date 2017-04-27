import React, { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../Redux/Store/Store'
import { connect, Provider } from 'react-redux'
import { StyleSheet, View, Image, Text } from "react-native"
import FilmCityList from '../Components/FilmCityList'
import FilmCinemaFromCity from '../Components/FilmCinemaFromCity'
import { StackNavigator, } from 'react-navigation';
// class FilmCinemaList extends Component {
// 	static navigationOptions = {
//     tabBarLabel: '影院',
//   }
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			listType: 'online'
// 		}
// 	}
// 	componentWillMount() {}
// 	componentDidMount() {}
// 	render() {
//     // let getCinemaForCity = {
//     //   "code": 0,
//     //   "message": "OK",
//     //   "result": [
//     //       {
//     //           "cinemaLinkId": "123451",
//     //           "name": "完美影城1",
//     //           "cityCode": "12122",
//     //           "cityName": "北京",
//     //           "goodsLimit": 3,
//     //           "hallCount": 2,
//     //           "addressString": "sdfsfs",
//     //           "phone": "1212121",
//     //           "trafficRoute": "123123",
//     //           "distanceInt": "1212",
//     //           "facilityServices": [
//     //               {
//     //                   "name": "a",
//     //                   "des": "adsfasf",
//     //                   "type": 1
//     //               },
//     //               {
//     //                   "name": "b",
//     //                   "des": "adsfasf",
//     //                   "type": 2
//     //               }
//     //           ]
//     //       },
//     //       {
//     //           "cinemaLinkId": "12312",
//     //           "name": "完美影城2",
//     //           "cityCode": "12122",
//     //           "cityName": "北京",
//     //           "goodsLimit": 3,
//     //           "hallCount": 3,
//     //           "addressString": "sdfsfs",
//     //           "phone": "1212121",
//     //           "trafficRoute": 123131,
//     //           "distanceInt": 1212,
//     //           "facilityServices": [
//     //               {
//     //                   "name": "a",
//     //                   "des": "adsfasf",
//     //                   "type": 1
//     //               },
//     //               {
//     //                   "name": "b",
//     //                   "des": "adsfasf",
//     //                   "type": 2
//     //               }
//     //           ]
//     //       }
//     //   ]
//     // }
// 			return (
// 				<View style = { {flex: 1} }>
// 					<Text>123333</Text>
// 				</View>
// 			)
// 		}
//
// 	}
//
//
// const styles = StyleSheet.create({
//
// })
// export default connect(mapStateToProps, mapDispatchToProps)(FilmCinemaList)
const FilmCinemaList = StackNavigator({
  FilmCinemaFromCity: {
    screen: FilmCinemaFromCity,
  },
  FilmCityList: {
    screen: FilmCityList,
  },
}, {
  headerMode: 'screen',
  mode: 'modal',
  title: '影院'
})
FilmCinemaList.navigationOptions = {
  tabBarLabel: '影院',
}
export default FilmCinemaList
// export default connect(mapStateToProps, mapDispatchToProps)(FilmCinemaList)
