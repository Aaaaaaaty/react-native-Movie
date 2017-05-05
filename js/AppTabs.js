'use strict';

import { Provider } from 'react-redux';
import React from 'react';
import { Navigator } from 'react-native';
import store from './Redux/Store/Store';
import FilmListShow from './Container/FilmListShow';
import FilmGoodsList from './Container/FilmGoodsList';
import FilmCinemaList from './Container/FilmCinemaList';
import FilmListDetail from './Container/FilmListDetail';
import FilmMe from './Container/FilmMe';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

const AppTabs = TabNavigator({
    Home: {
      screen: FilmListShow,
    },
    FilmCinemaList: {
      screen: FilmCinemaList,
      path: 'cart',
    },
    FilmGoodsList: {
        screen: FilmGoodsList,
    },
    FilmMe: {
        screen: FilmMe,
    }
})

export default AppTabs
