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

import FilmListDetailImg from '../Components/FilmListDetailImg'

class FilmListDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<View style = { styles.FilmListsDetailMain }>
				<FilmListDetailImg />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	FilmListsDetailMain: {
		flex: 1,
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmListDetail)