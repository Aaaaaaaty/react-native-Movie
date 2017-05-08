import { StackNavigator } from 'react-navigation';

import FilmGoodsList from './FilmGoodsList'
import other from './other'

const FilmGoodsListShow = StackNavigator({
	FilmGooodsList: {
		screen: FilmGoodsList
	},
	other: {
		screen: other
	}
}, {
	headerMode: 'screen'
})

export default FilmGoodsListShow