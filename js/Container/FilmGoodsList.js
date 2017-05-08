import React, {
	Component
} from 'react';
import {
	mapStateToProps,
	mapDispatchToProps
} from '../Redux/Store/Store';
import {
	connect,
	Provider
} from 'react-redux'
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity
} from "react-native"
import FilmGoodsListItem from '../Components/FilmGoodsListItem'
import FilmGoodsClear from '../Components/FilmGoodsClear'
import pxTodp from '../utils/pxTodp'

class FilmGoodsList extends Component {
	static navigationOptions = {
    tabBarLabel: '卖品',
  }
	constructor(props) {
		super(props);

		this.state = {
			listType: 'online'
		};
	}
	componentWillMount() {}
	componentDidMount() {}
	render() {
		let {
			//filmGoodsList,
			filmGoodsListCounter,
			getFilmGoodsCount,
			filmList
		} = this.props
		let filmGoodsList = {
			"online": [{
				"cinemaLinkId": 1,
				"goodsId": 1,
				"name": "Online单人中爆中可乐套餐",
				"desc": "单人畅享，中分爆米花*1加中杯可乐*1",
				"isPackage": true,
				"standardPrice": 25,
				"salePrice": 25,
				"picUrl": "../images/goods.png",
				"isDiscount": false
			}, {
				"cinemaLinkId": 1,
				"goodsId": 1,
				"name": "Online单人中爆中可乐套餐",
				"desc": "单人畅享，中分爆米花*1加中杯可乐*1",
				"isPackage": true,
				"standardPrice": 25,
				"salePrice": 25,
				"picUrl": "../images/goods.png",
				"isDiscount": false
			}, {
				"cinemaLinkId": 1,
				"goodsId": 1,
				"name": "Online单人中爆中可乐套餐",
				"desc": "单人畅享，中分爆米花*1加中杯可乐*1",
				"isPackage": true,
				"standardPrice": 25,
				"salePrice": 25,
				"picUrl": "../images/goods.png",
				"isDiscount": false
			}, {
				"cinemaLinkId": 1,
				"goodsId": 1,
				"name": "Online单人中爆中可乐套餐",
				"desc": "单人畅享，中分爆米花*1加中杯可乐*1",
				"isPackage": true,
				"standardPrice": 25,
				"salePrice": 25,
				"picUrl": "../images/goods.png",
				"isDiscount": false
			}, {
				"cinemaLinkId": 1,
				"goodsId": 1,
				"name": "Online单人中爆中可乐套餐",
				"desc": "单人畅享，中分爆米花*1加中杯可乐*1",
				"isPackage": true,
				"standardPrice": 25,
				"salePrice": 25,
				"picUrl": "../images/goods.png",
				"isDiscount": false
			}]
		}
		let {
			listType
		} = this.state
		let filmGoodsListResult = filmGoodsList[listType]

		if (filmGoodsListResult) {
			return (
				<View style = { styles.wrapper }>
					<FilmGoodsListItem filmGoodsListResult = { filmGoodsListResult } filmGoodsListCounter = { filmGoodsListCounter } getFilmGoodsCount = { getFilmGoodsCount }/>
					<FilmGoodsClear filmGoodsListResult = { filmGoodsListResult } filmGoodsListCounter = { filmGoodsListCounter }/>
				</View>
			)
		} else {
			return (
				<View></View>
			)
		}
	}
}

FilmGoodsList.navigationOptions = props => {
	let { navigation } = props
	return {
		tabBarLabel: '卖品',
		headerTintColor: 'white',
	    title:(
	    	<TouchableOpacity onPress = {() => {navigation.navigate('other')}} style = {{width: pxTodp(500),height: pxTodp(40), alignItems: 'center'}}>
		    	<Text style = {{color: 'white', fontSize: pxTodp(30), lineHeight: pxTodp(40)}}>完美世界影城 （北京四道口店）  ></Text>
	    	</TouchableOpacity>
	    ),
	    headerStyle: {
	      backgroundColor: '#fe4b37',
	      width: '100%',
	      height: pxTodp(184),
	    },
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmGoodsList)
