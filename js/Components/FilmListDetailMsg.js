import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	ListView,
	TouchableHighlight,
	Animated,
	LayoutAnimation,
	Dimensions
} from 'react-native';
import pxTodp from '../utils/pxTodp'

export default class FilmListDetailImg extends Component {
	constructor (props) {
	  super(props);
	  this.scrollYY = 0
	  this.animatedValue = new Animated.Value(0)
	  this.animatedValueWord = new Animated.Value(0)
	  let ScreenWidth = Dimensions.get('window').width
	  let ScreenHeight = Dimensions.get('window').height
	  let sliderDownDistance = ScreenHeight
	  this.state = {
	  	arrowDirection: 'down',
	  	arrowDirectionForWord: 'down',
	  	ScreenWidth: ScreenWidth,
	  	ScreenHeight: ScreenHeight,
	  	sliderDownDistance: sliderDownDistance - pxTodp(60),
	  	scrollY : 0,
	  }
	}
	componentDidMount() {
		let { ScreenHeight, sliderDownDistance, scrollY } = this.state
		let distance = ((pxTodp(340) - scrollY)/(sliderDownDistance - scrollY))
		console.log('distance1', distance)
		this.animatedValue.setValue(distance)
		this.animatedValueWord.setValue(0.31)
	}
	slideDownOrUp () {
		let { arrowDirection, sliderDownDistance, scrollY} = this.state
		let {sliderBackImg} = this.props
		let distance = ((pxTodp(340))/(sliderDownDistance - scrollY))
		if (arrowDirection == 'down') {
			Animated.timing(
				this.animatedValue,
				{
					toValue: 1
				}
			).start( () => {
				this.setState({
					arrowDirection: 'up',
				})
			})
		}
		if (arrowDirection == 'up') {
			sliderBackImg()
			Animated.timing(
				this.animatedValue,
				{
					toValue: distance
				}
			).start( () => {
				this.setState({
					arrowDirection: 'down',
				})
			})
		}

	}
	slideDownOrUpForWord () {
		let { arrowDirectionForWord, wordHeight, sliderDownDistance, scrollY } = this.state
		// let distance = ((pxTodp(340) - this.scrollYY)/(sliderDownDistance + scrollY))
		// console.log('distance2', distance)
		// this.animatedValue.setValue(distance)
		if (arrowDirectionForWord == 'down') {
			Animated.timing(
				this.animatedValueWord,
				{
					toValue: 1
				}
			).start( () => {
				this.setState({
					arrowDirectionForWord: 'up',
					scrollY: this.scrollYY
				})
			})
		}
		if (arrowDirectionForWord == 'up') {
			Animated.timing(
				this.animatedValueWord,
				{
					toValue: 0.31
				}
			).start( () => {
				this.setState({
					arrowDirectionForWord: 'down',
					scrollY: this.scrollYY
				})
			})
		}
	}
	onAnimationEnd (e) {
		let offSetX = e.nativeEvent.contentOffset.x;
		let offSetY = e.nativeEvent.contentOffset.y;
	}
	render () {
		let { arrowDirection, arrowDirectionForWord, ScreenWidth, ScreenHeight,sliderDownDistance, scrollY} = this.state
		console.log('scrollY', scrollY)
		let obj = {
			"name": "从你的全世界路过",
		    "filmShortCode": 0,
		    "releaseTime": "2016-01-23",
		    "director": "someone",
		    "starring": "邓超 杨洋 白百合 张天爱",
		    "phrase": "穿越黑科技，法鲨炫腹肌",
		    "keyword": "剧情/爱情",
		    "duration": 100,
		    "language": "中国",
		    "posterUrl": "https://static.wepiao.com/movie/2016/9/20_0/201609201030512727.jpg",
		    "summary": "于陈末（邓超饰）被称为全城最贱，每天和王牌DJ小容（杜鹃饰）针锋相对，谁也不知道他们的仇恨从何而来。陈末的两个兄弟，分别是全城最傻的猪头（岳云鹏饰），全城最纯的茅十八（杨洋饰），三人每天横冲直撞，以为可以自在生活，结果都面临人生最大的转折点。陈末相遇了最神秘的幺鸡（张天爱饰），猪头打造了最惨烈的婚礼，茅十八经历了最悲伤的别离，这群人的生活一点点崩塌，往事一点点揭开。梦想，爱情，友情都离陈末远去。一个失去所有的人，已经弄丢自己的路，直到听到来自全世界的一段语音[4]  。",
		    "userFilmInterestCount": 10,
		    "saleStatus": 1,
		    "is2D": true,
		    "is3D": true,
		    "isImax": true,
		    "isDmax": false,
		    "crews": [{
		      "realName": "张一白",
		      "roleName": "导演",
		      "duty": 2,
		      "imageUrl": "https://pic.baike.soso.com/ugc/baikepic2/28970/cov-20170319101529-1232584341.jpg/300"
		      },{
		      "realName": "邓超",
		      "roleName": "陈末",
		      "duty": 2,
		      "imageUrl": "https://pic.baike.soso.com/ugc/baikepic2/24080/cut-20160902140417-120687479.jpg/300"
		      },{
		      "realName": "白百合",
		      "roleName": "荔枝",
		      "duty": 2,
		      "imageUrl": "https://pic.baike.soso.com/ugc/baikepic2/23425/cut-20160902140620-433841570.jpg/300"
		      },{
		        "realName": "杨洋",
		        "roleName": "茅十八",
		        "duty": 2,
		        "imageUrl": "https://pic.baike.soso.com/ugc/baikepic2/16680/cut-20160902140655-1019677765.jpg/300"
		      },{
		        "realName": "张天爱",
		        "roleName": "幺鸡",
		        "duty": 2,
		        "imageUrl": "https://pic.baike.soso.com/ugc/baikepic2/27315/cut-20160902140725-813406260.jpg/300"
		      },{
		        "realName": "岳云鹏",
		        "roleName": "猪头",
		        "duty": 2,
		        "imageUrl": "https://pic.baike.soso.com/ugc/baikepic2/25132/cut-20160902140805-1310357178.jpg/300"
		      },{
		        "realName": "杜鹃",
		        "roleName": "小容",
		        "duty": 2,
		        "imageUrl": "https://pic.baike.soso.com/ugc/baikepic2/16559/cut-20160902140835-1994129423.jpg/300"
		      },{
		        "realName": "柳岩",
		        "roleName": "燕子",
		        "duty": 2,
		        "imageUrl": "https://pic.baike.soso.com/ugc/baikepic2/25056/cut-20160902140904-110357428.jpg/300"
		    }],
		    "videoStills": [
			    {
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/47847/20160513161727-1920051904.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/47847/20160513161727-1920051904.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
			      "type": 1
			    },{
			      "thumbnailUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
			      "resourceUrl": "https://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
			      "type": 1
				}
			]
		}
		let FilmPersonIntro = []
		obj.crews.map((item, index) => {
			FilmPersonIntro.push(
				<View key = {index}>
					<Image source = {{uri: item.imageUrl}} style = {{width: pxTodp(180), height: pxTodp(250), marginRight: pxTodp(1)}}/>
					<View style = {{width: pxTodp(180), alignItems: 'center', marginTop: pxTodp(20), marginBottom: pxTodp(16)}}>
						<Text style = {{fontSize: pxTodp(28), color: '#222833'}}>{item.realName}</Text>
					</View>
					<View style = {{width: pxTodp(180), alignItems: 'center', marginBottom: pxTodp(32)}}>
						<Text style = {{fontSize: pxTodp(20), color: '#7d838e'}}>{item.roleName}</Text>
					</View>
				</View>
			)
		})
		const topDistance = this.animatedValue.interpolate({
		    inputRange: [0, 1],
		    outputRange: [0, sliderDownDistance - scrollY]
		})
		let wordTargetWidth = (Math.ceil(obj.summary.length / (ScreenWidth / pxTodp(28))) + 1) * (14+9)
		const wordHeight = this.animatedValueWord.interpolate({
		    inputRange: [0, 1],
		    outputRange: [0, wordTargetWidth]
		})
		let AnimatedScrollView= Animated.createAnimatedComponent(ScrollView)

		let arrow = arrowDirection == 'down' ? require('../images/icon_arrowdown.png') : require('../images/icon_arrowup.png')
		let arrowForWord = arrowDirectionForWord == 'down' ? require('../images/icon_arrowdown1.png') : require('../images/icon_arrowup1.png')
		return (
			<AnimatedScrollView scrollEventThrottle={16} bounces = {false} style = {[styles.FilmListDetailImgContainer, {top: topDistance}]} onScrollEndDrag = { this.onAnimationEnd.bind(this) }>
				<TouchableHighlight style = { [styles.FilmListDetailImgContainerSlideBar]} onPress = { this.slideDownOrUp.bind(this)} >
					<Image source = { arrow } style = { styles.iconArrowdown }/>
				</TouchableHighlight>
				<View style = { [styles.FilmListDetailImgContainerMain] } >
					<View style = { styles.FilmAbstract}>
						<Image style = { styles.FilmAbstractLeft} source = { {uri: obj.posterUrl} }/>
						<View style = { styles.FilmAbstractRight}>
							<Text style = { {fontSize: pxTodp(30), color: '#222833', marginBottom: pxTodp(60)} }>{obj.name}</Text>
							<Text style = { {fontSize: pxTodp(24), color: '#7d838e', marginBottom: pxTodp(14)} }>{obj.phrase}</Text>
							<Text style = { {fontSize: pxTodp(24), color: '#7d838e', marginBottom: pxTodp(14)} }>{obj.language}/{obj.duration}</Text>
							<Text style = { {fontSize: pxTodp(24), color: '#7d838e'} }>{obj.releaseTime}</Text>
						</View>
					</View>
					<Animated.Text style = { [styles.FilmIntroduction, {height: wordHeight}] }>    {obj.summary}</Animated.Text>
					<View>
						<TouchableHighlight style = { styles.FilmIntroductionWordBar} >
							<Image source = { arrowForWord } style = { styles.iconArrowdown }/>
						</TouchableHighlight>
						<View style = { styles.FilmPersonIntro}>
							<View style = { styles.FilmPersonIntroHeader }>
								<View style = {{width: pxTodp(10), height: pxTodp(30), backgroundColor: 'red', marginRight: pxTodp(20)}}></View>
								<Text style = {{fontSize: pxTodp(28), color: '#222833'}}>演职人员</Text>
							</View>
							<ScrollView contentContainerStyle = { styles.FilmPersonIntroMain} horizontal = { true }>
								{FilmPersonIntro}
							</ScrollView>
						</View>
					</View>
				</View>
			</AnimatedScrollView>
		)
	}
}

const styles = StyleSheet.create({
	FilmListDetailImgContainer: {
	    position: 'absolute',
		zIndex: 9,
		left: 0,
		right:0,
		bottom:0,
	},
	FilmListDetailImgContainerSlideBar: {
		width: '100%',
		height: pxTodp(60),
		backgroundColor: 'black',
		opacity: 0.5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconArrowdown: {
		width: pxTodp(20),
		height: pxTodp(40)
	},
	FilmListDetailImgContainerMain: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
	},
	FilmAbstract: {
		marginTop: pxTodp(30),
		marginLeft: pxTodp(30),
		flexDirection: 'row'
	},
	FilmAbstractLeft: {
		width: pxTodp(148),
		height: pxTodp(206),
		marginRight: pxTodp(30),
		marginBottom: pxTodp(44),
	},
	FilmAbstractRight: {
		flex: 1
	},
	FilmIntroduction: {
		fontSize: pxTodp(28),
		lineHeight: pxTodp(46),
		color: '#222833',
		height: pxTodp(146),
		marginLeft: pxTodp(30)
	},
	FilmIntroductionWordBar: {
		width: '100%',
		height: pxTodp(52),
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	FilmPersonIntro: {
		flexDirection: 'column',
		borderTopWidth: pxTodp(1),
		borderTopColor: '#d1d6da',
		marginTop: pxTodp(10),
	},
	FilmPersonIntroHeader: {
		flexDirection: 'row',
		marginTop: pxTodp(30),
		marginBottom: pxTodp(30),
		marginLeft: pxTodp(30)
	},
	FilmPersonIntroMain: {
	}

})
