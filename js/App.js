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
import AppStacks from './AppStacks';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    TabNavigator,
} from 'react-navigation';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator
                    initialRoute={{component: AppStacks}}
                    renderScene={(route, navigator) =>
                        <route.component {...route.args} navigator={navigator} />
                    }
                />
            </Provider>
        )
    }
}
