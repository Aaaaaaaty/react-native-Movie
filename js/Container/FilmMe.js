import React, { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../Redux/Store/Store'
import { connect, Provider } from 'react-redux'
import { StyleSheet, View, Image, Text } from "react-native"

class FilmMe extends Component {
	static navigationOptions = {
    tabBarLabel: '我的',
  }
	constructor(props) {
		super(props)
		this.state = {
			listType: 'online'
		}
	}
	componentWillMount() {}
	componentDidMount() {}
	render() {
			return (
				<View style = { {flex: 1} }>
					<Text>123333</Text>
				</View>
			)
		}
	}


const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(FilmMe)
