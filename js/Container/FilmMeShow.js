import { StackNavigator } from 'react-navigation';

import FilmMe from './FilmMe'
import other from './other'

const FilmMeShow = StackNavigator({
	FilmMe: {
		screen: FilmMe
	},
	other: {
		screen: other
	}
}, {
	headerMode: 'screen'
})

export default FilmMeShow