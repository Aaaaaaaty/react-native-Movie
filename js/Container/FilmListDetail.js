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
	Text
} from "react-native"
import pxTodp from '../utils/pxTodp'

import FilmListDetailMsg from '../Components/FilmListDetailMsg'
import FilmListDetailImg from '../Components/FilmListDetailImg'


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
			</View>
		)
	}
}

const styles = StyleSheet.create({
	FilmListsDetailMain: {
		flex: 1,
		position: 'relative'
	},
	FilmListDetailMsg: {
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmListDetail)