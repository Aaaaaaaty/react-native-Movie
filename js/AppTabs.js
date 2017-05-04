'use strict';

import { Provider } from 'react-redux';
import React from 'react';
import { Navigator } from 'react-native';
import store from './Redux/Store/Store';
import FilmList from './Container/FilmList';
import FilmGoodsList from './Container/FilmGoodsList';
import FilmCinemaList from './Container/FilmCinemaList';
import FilmMe from './Container/FilmMe';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

const AppTabs = TabNavigator({
    Home: {
      screen: FilmList,
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
    },
})

export default AppTabs
