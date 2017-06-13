import React, { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../Redux/Store/Store'
import { connect, Provider } from 'react-redux'
import { StyleSheet, View, Image, Text, WebView, TouchableOpacity,ScrollView } from "react-native"
import pxTodp from '../utils/pxTodp'
import FilmSchemaList from '../Components/FilmSchemaList'
import FilmSchemaListImg from '../Components/FilmSchemaListImg'
import FilmSchemaInfo from '../Components/FilmSchemaInfo'
class FilmMe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listType: 'online'
		}
	}
	componentWillMount() {}
	componentDidMount() {}
	render() {
		let filmTimeList = { "code":0,
		  "message":"OK",
		  "result":[{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-23",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-23",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-23",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-23",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "1号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-23",
		      "showStartTime": "2016-01-23 08:40:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": false,
		      "language": "英语",
		      "dimensional": 0
		    },{
		      "hallName": "2号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-24",
		      "showStartTime": "2016-01-24 07:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": false,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "3号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-25",
		      "showStartTime": "2016-01-25 15:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "3号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-26",
		      "showStartTime": "2016-01-25 13:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "3号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-26",
		      "showStartTime": "2016-01-25 15:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "3号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-26",
		      "showStartTime": "2016-01-25 10:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-27",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-27",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-28",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-28",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-28",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-28",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-28",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-29",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-29",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    },{
		      "hallName": "0号厅",
		      "duration": 100,
		      "releaseTime": "2016-01-29",
		      "showStartTime": "2016-01-23 18:30:00",
		      "standardPrice": 60,
		      "salePrice": 26,
		      "canBuy": true,
		      "language": "国语",
		      "dimensional": 0
		    }]
		}
			return (
				<View style={{flex:1}}>
					<FilmSchemaInfo/>
					<FilmSchemaList filmTimeList = { filmTimeList }/>
				</View>

			)
		}
	}

FilmMe.navigationOptions = props => {
	let { navigation } = props
	return {
		title: '选择场次',
		tabBarLabel: '我的',
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#fe4b37',
			height: pxTodp(90)
		},
		headerLeft: (
			<TouchableOpacity>
				<Text style = {{color: 'white'}}>
				  《
				</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(FilmMe)
