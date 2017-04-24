import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import pxTranslateTodp from '../utils/pxTranslateTodp'

export default class FilmGoodsClear extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		let {
			filmGoodsListResult,
			filmGoodsListCounter
		} = this.props
		let totalPrice = 0
		let totalfimlGoodsCount = 0
		let boolValue = true
		for (let i = 0; i < filmGoodsListCounter.length; i++) {
			totalPrice += filmGoodsListResult[i].salePrice * filmGoodsListCounter[i]
			totalfimlGoodsCount += filmGoodsListCounter[i]
		}

		if (totalfimlGoodsCount > 0) {
			boolValue = false
		}
		return (
			<View style = { totalfimlGoodsCount > 0 ? styles.filmGoodsClearMain : { opacity: 0} }>
				<View style = { styles.flimGoodsClearLeftItem }>
					<Text style = { styles.totalPrice }>￥{ totalPrice }</Text>
					<Text style = { styles.totalfimlGoodsCount }>共{ totalfimlGoodsCount }件</Text>
				</View>
				<View style = { styles.filmGoodsClearRightItem }>
					<Text style = { styles.computed}>去结算</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	filmGoodsClearMain: {
		width: '100%',
		flexDirection: 'row'
	},
	flimGoodsClearLeftItem: {
		flex: 2,
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingBottom: pxTranslateTodp(10),
		paddingTop: pxTranslateTodp(10),
	},
	totalPrice: {
		color: '#fe4b37',
		marginLeft: pxTranslateTodp(24),
		fontSize: pxTranslateTodp(36)
	},
	totalfimlGoodsCount: {
		color: '#7d838e',
		fontSize: pxTranslateTodp(20),
		marginLeft: pxTranslateTodp(30),

	},
	filmGoodsClearRightItem: {
		backgroundColor: '#fe4b37',
		height: pxTranslateTodp(96),
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	computed: {
		color: 'white',
		fontSize: pxTranslateTodp(30)
	}
})