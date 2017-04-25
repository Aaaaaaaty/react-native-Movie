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
	Text
} from "react-native"
import FilmGoodsListItem from '../Components/FilmGoodsListItem'
import FilmGoodsClear from '../Components/FilmGoodsClear'

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

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#d7d7d7'
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmGoodsList)
