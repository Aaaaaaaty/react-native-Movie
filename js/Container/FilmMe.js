import React, { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../Redux/Store/Store'
import { connect, Provider } from 'react-redux'
import { StyleSheet, View, Image, Text, WebView } from "react-native"

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
					<WebView
						source={{uri: 'https://www.baidu.com'}}/>
				</View>
			)
		}
	}


const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(FilmMe)
