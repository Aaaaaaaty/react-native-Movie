import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	Dimensions
} from 'react-native'
import pxTodp from '../utils/pxTodp'
export default class FilmGoodsListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	componentWillMount() {

	}
	componentDidMount() {
		let {
			getFilmGoodsCount,
			filmGoodsListResult
		} = this.props
		let typeLength = filmGoodsListResult.length
		getFilmGoodsCount("FILM_GOODS_ACTION_INITIAL", 0, typeLength)
	}
	getFilmGoodsCount(str, index, length) {
		let {
			getFilmGoodsCount,
			filmGoodsListCounter
		} = this.props
		getFilmGoodsCount(str, index, length)
	}
	test() {
		console.log('test')
	}
	render() {
		let {
			filmGoodsListResult,
			getFilmGoodsCount,
			filmGoodsListCounter
		} = this.props
		let filmGoodsListContents = []
		let filmGoodsKindLength = filmGoodsListResult.length
		filmGoodsListResult.map((item, index) => {
			let imgUrl = {
				uri: item.picUrl
			}
			filmGoodsListContents.push(
				<View style = { styles.filmGoodsListContent } key = { "key" + index }>
					<View style = { styles.filmGoodsListLeftItem }>
						<Image source = { require('../images/goods.png') } style = { styles.imageGoods } />
					</View>
					<View style = { styles.filmGoodsListRightItem }>
						<Text style = { styles.title }>{ item.name}</Text>
						<Text style = { styles.desc }>{ item.desc}</Text>
						<View>
							<Text style = { styles.price }>￥{ item.salePrice}</Text>
						</View>
						<View style = { styles.filmGoodsListIconGroups } >
							<TouchableHighlight style = { filmGoodsListCounter[index] > 0 ? {display: 'flex'} : {display: 'none'}} onPress = { this.getFilmGoodsCount.bind(this, "FILM_GOODS_ACTION_DECREMENT", index, filmGoodsKindLength) }>
								<Image source = { require('../images/icon_minus.png')} style = { styles.imageIcon }/>
							</TouchableHighlight>
							<Text style = { filmGoodsListCounter[index] > 0 ? {display: 'flex', marginRight: pxTodp(15), marginLeft: pxTodp(15) } : {display: 'none'} }>{ filmGoodsListCounter[index] }</Text>
							<TouchableHighlight  onPress = { this.getFilmGoodsCount.bind(this, "FILM_GOODS_ACTION_INCREMENT", index, filmGoodsKindLength) }>
								<Image source = { require('../images/icon_add.png')} style = { styles.imageIcon }/>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			)
		})
		return (
			<ScrollView style = { styles.filmGoodsListMain }>
					{ filmGoodsListContents }
			</ScrollView>
		)
	}

}

const styles = StyleSheet.create({
	filmGoodsListMain: {
		flex: 1,
		flexDirection: 'column',
		marginTop: pxTodp(30),
		marginLeft: pxTodp(30),
		marginRight: pxTodp(30),
	},
	filmGoodsListContent: {
		flex: 1,
		flexDirection: 'row',
		margin: pxTodp(30),
		backgroundColor: 'white',
		borderRadius: 6,
		shadowColor: '#d7d7d7',
    	shadowOffset: {
        width: 0,
        height: 10
    },
    shadowRadius: 5,
    shadowOpacity: 1.0

	},
	filmGoodsListLeftItem: {
		width: pxTodp(200),
		height: pxTodp(200),
		margin: pxTodp(30)
	},
	imageGoods: {
		width: pxTodp(200),
		height: pxTodp(200)
	},
	filmGoodsListRightItem: {
		flex: 1,
		flexDirection: 'column',
		marginTop: pxTodp(30),
		marginBottom: pxTodp(30),
		marginRight: pxTodp(30),
		justifyContent: 'space-between',
		position: 'relative'
	},
	title: {
		fontSize: pxTodp(30),
		color: '#222833'
	},
	desc: {
		fontSize: pxTodp(24),
		color: '#7d838e'
	},
	price: {
		fontSize: pxTodp(36),
		color: '#222833'
	},
	filmGoodsListIconGroups: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	imageIcon: {
		width: pxTodp(36),
		height: pxTodp(36),
	},
	counter: {
		marginRight: pxTodp(15),
		marginLeft: pxTodp(15),
	}
})
