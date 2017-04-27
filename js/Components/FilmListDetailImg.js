import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	ListView
} from 'react-native';
import pxTodp from '../utils/pxTodp'

export default class FilmListDetailImg extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		let FilmListDetailImg = [
					{
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/47847/20160513161727-1920051904.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/47847/20160513161727-1920051904.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
						"type": 1
					}, {
						"thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
						"resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
						"type": 1
					}, 
		]
		let FilmListDetailImgContent = []
		let FilmListDetailImgContent2 = []
		let firstImgIndex = 0
		let secondImgIndex = 1
		FilmListDetailImg.map( (item, index) => {
			if (index == firstImgIndex) {
				FilmListDetailImgContent.push( <Image source = { {uri: item.thumbnailUrl } } style = { {width: '100%', height: pxTodp(400)} } key = {index}/> )
			} else if (index == secondImgIndex) {
				FilmListDetailImgContent.push( <Image source = { {uri: item.thumbnailUrl } } style = { {width: pxTodp(370), height: pxTodp(340)} } key = {index}/> )
			} else if (index > secondImgIndex && index <= 5){
				FilmListDetailImgContent2.push( <Image source = { {uri: item.thumbnailUrl } }  style = { styles.commonImg2 } key = {index}/> )
			} else {
				FilmListDetailImgContent.push( <Image source = { {uri: item.thumbnailUrl } }  style = { styles.commonImg } key = {index}/> )
			}
		})
		return (
			<ScrollView>
				<View style = { styles.FilsListDetailImgWall }>
					<View style = { styles.header }>{FilmListDetailImgContent[0]}</View>
					<View style = { styles.middleLeft }>{FilmListDetailImgContent[1]}</View>
					<View style = { styles.middleRight}>{FilmListDetailImgContent2}</View>
				</View>
				<View style = { styles.bottom}>{FilmListDetailImgContent.slice(2)}</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	FilsListDetailImgWall: {
		width: '100%',
		height: pxTodp(746),
		flexDirection: 'row',
		backgroundColor: 'black',
		flexWrap: 'wrap',
	},
	header: {
		width: '100%', 
		height:pxTodp(400),
		margin: pxTodp(3)
	},
	middleLeft: {
		width: pxTodp(370), 
		height: pxTodp(340),
		margin: pxTodp(3)
	},
	middleRight: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	bottom: {
		flex:1,
		flexDirection:'row',
		flexWrap: 'wrap',
		backgroundColor: 'black',
		
	},
	commonImg: {
		width: pxTodp(181),
		height: pxTodp(170),
		margin: pxTodp(3),
	},
	commonImg2: {
		width: pxTodp(180),
		height: pxTodp(165),
		margin: pxTodp(3),
	}

})