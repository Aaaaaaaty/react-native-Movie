import { TabNavigator, StackNavigator } from 'react-navigation';
import FilmList from './FilmList';
import FilmGoodsListShow from './FilmGoodsListShow';
import FilmCinemaList from './FilmCinemaList';
import FilmListDetail from './FilmListDetail';
import FilmMeShow from './FilmMeShow'
const FilmTab = TabNavigator({
    Home: {
      screen: FilmList,
    },
    FilmCinemaList: {
      screen: FilmCinemaList,
      path: 'cart',
    },
    FilmGoodsListShow: {
        screen: FilmGoodsListShow,
    },
    FilmMeShow: {
        screen: FilmMeShow,
    }
})

export default FilmTab