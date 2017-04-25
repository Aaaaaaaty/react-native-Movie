'use strict';

import {
    Provider
} from 'react-redux';
import React from 'react';
import {
    Navigator
} from 'react-native';
import store from './Redux/Store/Store';
import FilmList from './Container/FilmList';
import FilmGoodsList from './Container/FilmGoodsList';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    TabNavigator,
} from 'react-navigation';

const SimpleTabs = TabNavigator({
    Home: {
        screen: FilmList,
        tabBarLabel: '电影',
        // path: '',
    },
    FilmGoodsList: {
        screen: FilmGoodsList,
        tabBarLabel: '卖品',
        // path: 'FilmGoodsList'
    }
})
export default SimpleTabs;
