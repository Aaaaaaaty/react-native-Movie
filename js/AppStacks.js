'use strict';

import { Provider } from 'react-redux';
import React from 'react';
import { Navigator } from 'react-native';
import store from './Redux/Store/Store';
import FilmGoodsList from './Container/FilmGoodsList';
import FilmCinemaList from './Container/FilmCinemaList';
import FilmListDetail from './Container/FilmListDetail';
import FilmMe from './Container/FilmMe';
import FilmGoodsListShow from './Container/FilmGoodsListShow';
import FilmTab from './Container/FilmTab';
import other from './Container/other';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

// const AppTabs = TabNavigator({
//     Home: {
//       screen: FilmListShow,
//     },
//     FilmCinemaList: {
//       screen: FilmCinemaList,
//       path: 'cart',
//     },
//     FilmGoodsListShow: {
//         screen: FilmGoodsListShow,
//     },
//     FilmMe: {
//         screen: FilmMe,
//     }
// })

const AppStacks = StackNavigator({
  FilmTab: {
    screen: FilmTab
  },
  FilmListDetail: {
  	screen: FilmListDetail
  },
  other: {
  	screen: other
  }
}, {
  headerMode: 'none'
})

export default AppStacks
