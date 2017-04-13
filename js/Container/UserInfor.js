import React, { Component } from 'react';
import {mapStateToProps,mapDispatchToProps} from '../Redux/Store/Store';
import { connect ,Provider } from 'react-redux'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



class UserInfor extends Component {
    constructor(props){
       super(props);
       console.log(111111);
    }
  render() {
    return  (<View>
                <Text>这个是USERpage</Text>
              </View>)
  }

}

export default connect()(UserInfor)
