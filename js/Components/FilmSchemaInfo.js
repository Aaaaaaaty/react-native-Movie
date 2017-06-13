import React, { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../Redux/Store/Store'
import { connect, Provider } from 'react-redux'
import { StyleSheet, View, Image, Text, WebView, TouchableOpacity, ScrollView, Dimensions, Animated } from "react-native"
import pxTodp from '../utils/pxTodp'

const screenWidth = Dimensions.get('window').width

class FilmSchemaInfo extends Component{
	static defaultProps = {
	    horizontal: true,
	    bounces: false,
	    centerContent: true,
	    scrollEventThrottle: 16,
	    showsHorizontalScrollIndicator: false
	    //contentOffset: {x: -screenWidth/2 + pxTodp(129)}
	}
	constructor(props) {
	  super(props);
	  let imgLength = 9
	  let opacityArr = []
	  let scaleArrX = []
	  let scaleArrY = []
	  for(let i=0; i<imgLength; i++){
	  	opacityArr.push(0)
	  	scaleArrX.push(new Animated.Value(1))
	  	scaleArrY.push(1)
	  }
	  //let scaleArr = new Animated.Value(1)
	  this.state = {
	  	scrollEnabled: true,
	  	opacityArr: opacityArr,
	  	scaleArrX: scaleArrX,
	  	scaleArrY: scaleArrY,
	  	distanceX: 0
	  };
	}
	componentDidMount() {
	}
	onTouchEnd (e) {
		let {distanceX} = this.state
		this._scrollView.scrollTo({x: distanceX})
	}
	onScroll(e) {

		let {opacityArr, scaleArrX} = this.state
		//this._view.props['children'][1].props['style']
		let x = e.nativeEvent.contentOffset.x;
		let realDistance = 0 //判断滑动距离是否超过一定距离，不超过则回到原距离，超过则前进一屏
		for (let j = 0; j < opacityArr.length; j++) {
			if ((pxTodp(220) + pxTodp(50))*j <= x && x < (pxTodp(220) + pxTodp(50))*(j+1/2)) {
				realDistance = (pxTodp(220) + pxTodp(50))*j
			} else if ((pxTodp(220) + pxTodp(50))*(j + 1/2) < x && x <= (pxTodp(220) + pxTodp(50))*(j+1)) {
				realDistance = (pxTodp(220) + pxTodp(50))*(j+1)
			}
		}
		let indexImg = Math.round(x/(pxTodp(220) + pxTodp(50))) + 1

		let opacityArrTemp = []
		//let scaleArrXTemp = []
		let scaleArrYTemp = []
		for(let i = 0; i < opacityArr.length; i++){
			if (i != indexImg) {
				opacityArrTemp[i] = 0
			} else if (i == indexImg) {
				opacityArrTemp[i] = 1
			}
		}
		for (let i = 0; i < opacityArr.length; i++) {
			if (indexImg == i) {
				Animated.timing(
					scaleArrX[i],
					{
						toValue: x + 135,
						duration: 0
					}
				).start(
					this.setState({
						opacityArr: opacityArrTemp,
						distanceX: realDistance
					})
				)
			} else if ((i == indexImg - 1) || ( i == indexImg + 1)) {
				Animated.timing(
					scaleArrX[i],
					{
						toValue: x + 135,
						duration: 0
					}
				).start(
					this.setState({
						opacityArr: opacityArrTemp,
						distanceX: realDistance
					})
				)
			} else {
				Animated.timing(
					scaleArrX[i],
					{
						toValue: 135*(i+1),
						duration: 0
					}
				).start(
					this.setState({
						opacityArr: opacityArrTemp,
						distanceX: realDistance
					})
				)
			}
		}
	}
	render() {
		let {opacityArr, scaleArrX, scaleArrY} = this.state
		let realScaleX = []
		for (let k = 0; k < scaleArrX.length; k++) {
			if (k>=1) {
				realScaleX.push(
					scaleArrX[k].interpolate({
						inputRange:[0, 135*(k-1), 135*k, 135*(k+1), 100000],
						outputRange:[1, 1, 1.24, 1, 1]
					})
				)
			} else {
				realScaleX.push(
					scaleArrX[k].interpolate({
						inputRange:[135*k, 135*(k+1)],
						outputRange:[1.24, 1]
					})
				)
			}
		}
		let obj = {
			"place": '完美世界影城（望京店）',
			"address": '北京市朝阳区东亚望京中心北门',
			"test1": '停车场',
			"test2": '情侣厅',
			"test3": 'VIP厅',
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
		      "realName": "",
		      "roleName": "",
		      "duty": 2,
		      "imageUrl": ""
		      },{
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
		      },{
		        "realName": "",
		        "roleName": "",
		        "duty": 2,
		        "imageUrl": ""
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
		let scrollArr = []
		obj.crews.map((item, index) => {
			if (item.imageUrl) {
				scrollArr.push(
					<View key = {index}>
						<View style = {{width:pxTodp(220), height:pxTodp(258), marginRight: pxTodp(15), marginLeft:pxTodp(15), shadowColor:'#64728d',shadowOpacity:0.6,shadowOffset:{width:0, height: pxTodp(10)}  }}>
							<Animated.Image source = {{uri: item.imageUrl}} style = {{width:pxTodp(220), height:pxTodp(258), transform: [{scaleX:realScaleX[index]}, {scaleY: realScaleX[index]}] }}/>
						</View>
						<View style = {[styles.movieTitle, {opacity: opacityArr[index], width: pxTodp(264) }]}> 
							<Text style = {{color: '#222833',fontSize: pxTodp(32)}}>{item.realName}</Text>
						</View>
						<View style = {[styles.movieMainActors, {opacity: opacityArr[index], width: pxTodp(264) }]}> 
							<Text style = {{color: '#7d838e',fontSize: pxTodp(22)}}>{item.roleName}</Text>
						</View>
					</View>
				)
			} else {
				scrollArr.push(
					<View key = {index}>
						<View style = {{width:pxTodp(220), height:pxTodp(258), marginRight: pxTodp(15), marginLeft:pxTodp(15) }}>
						</View>
						<View style = {[styles.movieTitle, {opacity: opacityArr[index], width: pxTodp(264) }]}> 
						</View>
						<View style = {[styles.movieMainActors, {opacity: opacityArr[index], width: pxTodp(264) }]}>
						</View>
					</View>
				)
			}

		})
		// let i
		// for (i=0; i<obj.crews.length; i++) {
		// 	scrollArr.push(
		// 		<View key = {i} style = {{ height:pxTodp(300)}} ref={(view) =>{this._view = view}} data-index = { i }>
		// 			<View style = {{width:pxTodp(220), height:pxTodp(300), marginRight: pxTodp(30)}}>
		// 				<Image source = {{uri: obj.crews[i].imageUrl}} style = {{width:pxTodp(220), height:pxTodp(300)}}/>
		// 			</View>
		// 		</View>
		// 	)
		// }
		return (
			<View style = { styles.FilmSchemaInfoContent } >
				<Image source = {require('../images/bj_android.png')} style = { styles.backImg }/>
				<View style = { styles.FilmShemaTop }>
					<View style = { styles.FilmAddressDes }>
						<Text style = {{color: 'white', fontSize: pxTodp(32), marginBottom: pxTodp(24)}}>{ obj.place }</Text>
						<Text style = {{color: 'white', fontSize: pxTodp(24), marginBottom: pxTodp(20)}}>{ obj.address }             ></Text>
						<View style = {{flexDirection: 'row'}}>
							<Text style = {styles.borderWord}>{obj.test1}</Text>
							<Text style = {styles.borderWord}>{obj.test2}</Text>
							<Text style = {styles.borderWord }>{obj.test3}</Text>
						</View>
					</View>
					<View style = {{width: pxTodp(100), justifyContent: 'center'}}>
						<Image source = {require('../images/icon_map.png')} style = {{width: pxTodp(50), height: pxTodp(50)}}/>
						<Text style = {{color: 'white', fontSize: pxTodp(24)}}>地图</Text>
					</View>
				</View>
				<View >
					<ScrollView
						contentContainerStyle = {{height: pxTodp(400),marginTop: pxTodp(20)}}
						{...this.props}
						ref={(scrollView) => { this._scrollView = scrollView; }}
						onScroll = {(event) => this.onScroll(event)}
						onTouchEnd = {(event) => this.onTouchEnd()}>
						{scrollArr}
					</ScrollView>
				</View>

				<View></View>
			</View>
		)

	}
}

const styles = StyleSheet.create({
	FilmSchemaInfoContent: {
		flex: 1,
		flexDirection: 'column',
		position: 'relative'
	},
	FilmShemaTop: {
		flexDirection: 'row',
		marginTop: pxTodp(100),
		backgroundColor: '#fe4b37',
		marginLeft: pxTodp(50),
		height: pxTodp(200)
	},
	FilmAddressDes: {
		flexDirection: 'column',
		flex: 1
	},
	borderWord: {
		fontSize: pxTodp(20),
		borderColor: 'white',
		borderWidth: pxTodp(1),
		color: 'white',
		marginRight: pxTodp(16)
	},
	backImg: {
		width: '100%',
		height: pxTodp(600),
		position: 'absolute',
		zIndex: -9,
	},
	movieTitle: {
		alignItems: 'center',
		marginTop: pxTodp(50),
		marginBottom: pxTodp(14),

	},
	movieMainActors: {
		alignItems: 'center',

	}
})

export default FilmSchemaInfo
