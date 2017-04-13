
'use strict';

import {Provider} from 'react-redux';
import React from 'react';
import {Navigator} from 'react-native';
import store from './Redux/Store/Store';
import UserInfor from './Container/UserInfor';
import {createStore, combineReducers, applyMiddleware} from 'redux';

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Navigator
                    initialRoute={{component: UserInfor}}
                    renderScene={(route, navigator) =>
                        <route.component {...route.args} navigator={navigator} />
                    }
                />
            </Provider>
        )
    }
}
