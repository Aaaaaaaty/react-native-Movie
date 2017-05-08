'use strict';
import {AppRegistry, Platform} from 'react-native';
import App from './js/App';


AppRegistry.registerComponent('nativeMovie', () => App);

AppRegistry.registerComponent('nativeMovie', () => nativeMovie);
if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('nativeMovie', {
    rootTag: app
  });
}