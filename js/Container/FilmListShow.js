import { StackNavigator } from 'react-navigation';
import FilmList from './FilmList'
import FilmListDetail from './FilmListDetail'

const FilmListShow = StackNavigator({
	FilmList: {
		screen: FilmList
	},
	FilmListDetail : {
		screen: FilmListDetail
	}
}, {
	headerMode: 'none',
})

export default FilmListShow