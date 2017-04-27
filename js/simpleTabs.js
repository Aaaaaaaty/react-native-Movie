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
import FilmListDetail from './Container/FilmListDetail';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    TabNavigator,
} from 'react-navigation';


const RoutesList = {
    FilmGoodsList: {
        name: 'fiml sale goods list',
        descrition: 'show the film sale goods list',
        screen: FilmGoodsList
    },
    FilmList: {
        name: 'film list',
        description: 'show the film list',
        screen: FilmList
    }
}

FilmList.navigationOptions = {
    tabBarLabel: 'FilmList',
}

const SimpleTabs = TabNavigator({
    Home: {
        screen: FilmList,
        path: '',
    },
    FilmGoodsList: {
        screen: FilmGoodsList,
        path: 'FilmGoodsList'
    },
    FilmListDetail: {
        screen: FilmListDetail,
        path: 'FilmListDetail'
    }
})
export default SimpleTabs;