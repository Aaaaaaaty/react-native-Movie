
'use strict';

import {Provider} from 'react-redux';
import React from 'react';
import {Navigator} from 'react-native';
import store from './Redux/Store/Store';
import FilmList from './Container/FilmList';
import {createStore, combineReducers, applyMiddleware} from 'redux';

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Navigator
                    initialRoute={{component: FilmList}}
                    renderScene={(route, navigator) =>
                        <route.component {...route.args} navigator={navigator} />
                    }
                />
            </Provider>
        )
    }
}
