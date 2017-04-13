
'use strict';

import {Provider} from 'react-redux';
import React from 'react';
import {Navigator} from 'react-native';
import store from './Redux/Store/Store';
import UserInfo from './Container/UserInfor';
import {createStore, combineReducers, applyMiddleware} from 'redux';

export default class App extends React.Component{
  console.log(1);
    render(){
        return(
            <Provider store={store}>
                <Navigator
                    initialRoute={{component: UserInfo}}
                    renderScene={(route, navigator) =>
                        <route.component {...route.args} navigator={navigator} />
                    }
                />
            </Provider>
        )
    }
}
