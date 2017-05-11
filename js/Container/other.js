import React, { Component } from 'react'
import { Text } from 'react-native'


class other extends Component{
	constructor(props) {
	  super(props);

	  this.state = {};
	}
	render() {
		return(
			<Text>hello</Text>
		)
	}
}
other.navigationOptions = {
	headerMode: 'none'
}
export default other
