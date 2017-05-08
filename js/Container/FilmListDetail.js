import React, {
	Component
} from 'react';
import {
	mapStateToProps,
	mapDispatchToProps
} from '../Redux/Store/Store';
import {
	connect,
	Provider
} from 'react-redux'
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity
} from "react-native"
import pxTodp from '../utils/pxTodp'

import FilmListDetailMsg from '../Components/FilmListDetailMsg'
import FilmListDetailImg from '../Components/FilmListDetailImg'
import { StackNavigator, NavigationActions } from 'react-navigation';

class FilmListDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sliderBackImgY: 0
		};
	}
	sliderBackImg () {
		this.setState({
			sliderBackImgY: 0
		})
	}
	render() {
		let { sliderBackImgY } = this.state
		return (
			<View style = { styles.FilmListsDetailMain }>
				<FilmListDetailMsg sliderBackImg = { this.sliderBackImg.bind(this)}/>
				<FilmListDetailImg sliderBackImgY = { sliderBackImgY }/>
				<TouchableOpacity style = { styles.imgBack} onPress = { () =>this.props.navigation.dispatch(NavigationActions.back()) }>
					<Image source = {require('../images/icon_more.png')} style = { styles.image }/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	FilmListsDetailMain: {
		flex: 1,
		position: 'relative'
	},
	imgBack: {
		position: 'absolute',
		top: pxTodp(30),
		left: pxTodp(20),
		zIndex: 999,
		backgroundColor: 'white',
		borderRadius: pxTodp(40),
		opacity: 0.5
	},
	image: {
		width: pxTodp(40),
		height: pxTodp(40),
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmListDetail)