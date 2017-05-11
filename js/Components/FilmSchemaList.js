import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, WebView, TouchableOpacity, ScrollView } from "react-native"
import pxTodp from '../utils/pxTodp'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
class FilmSchemaList extends Component {
	static navigationOptions = {
    tabBarLabel: '我的',
  }
	constructor(props) {
		super(props)
		this.state = {
			listType: 'online'
		}
	}
	componentWillMount() {
    let { filmTimeList } = this.props
    this.setState({
      filmTimeList: filmTimeList
    })
  }
	componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    let { filmTimeList } = nextProps
    this.setState({
      filmTimeList: filmTimeList
    })
  }
  spliceByTime(data) {
    let _arr_obj = {}
    data.forEach((item, index) => {
      if(!_arr_obj[item.releaseTime]) {
        _arr_obj[item.releaseTime] = []
        _arr_obj[item.releaseTime].push(item)
      } else {
        _arr_obj[item.releaseTime].push(item)
      }
    })
    return _arr_obj
  }
	render() {
    let { filmTimeList } = this.state
    let listResult = this.spliceByTime(filmTimeList.result)
    let filmTimeListItem = Object.keys(listResult).map((item, index) => {
      let oneDayList = listResult[item].map((obj, i) => {
				let type
				if(obj.dimensional === 0) type = '2D'
				if(obj.dimensional === 1) type = '3D'
				if(obj.dimensional === 2) type = 'IMAX'
        return (
          <View key={ 'oneDayList' + i } style={ styles.wrapper }>
            <View style={ styles.wrapperItem }>
              <View><Text style={ styles.title }>{obj.showStartTime.split(' ')[1]}</Text></View>
              <View><Text style={ styles.littleSub }>{obj.duration}</Text></View>
            </View>
            <View style={ styles.wrapperItem }>
              <View><Text style={ styles.title }>{obj.language}{type}</Text></View>
              <View><Text style={ styles.littleSub }>{obj.hallName}</Text></View>
            </View>
            <View style={ styles.wrapperItem }>
              <View><Text style={ styles.title }>￥{obj.salePrice}</Text></View>
              <View><Text style={ styles.littleSub }>影城价格￥{obj.standardPrice}</Text></View>
            </View>
            <View style={ styles.wrapperItemBuy }>
              <TouchableOpacity>
								<Text style={ styles.buyTicket }>购票</Text>
							</TouchableOpacity>
            </View>
          </View>
        )
      })
      return (
        <ScrollView key={ 'filmTimeListItem' + index } tabLabel={item.split('-')[1].concat('-' + item.split('-')[2])}>{ oneDayList }</ScrollView>
      )
    })
			return (
        <View style={ styles.schemaView }>
					<ScrollableTabView renderTabBar={() => <ScrollableTabBar
																									tabsContainerStyle={{borderTopColor: 'gray', borderTopWidth: pxTodp(1), width: 'auto'}}
																									tabStyle={{width: pxTodp(187.5), padding: 0}}
																									underlineStyle={{backgroundColor: '#fe4b37', height: pxTodp(3)}}/>}
														 tabBarActiveTextColor={'#fe4b37'}
														 tabBarTextStyle={{fontWeight: 'normal'}}>
						{ filmTimeListItem }
					</ScrollableTabView>
				</View>
			)
		}
	}


const styles = StyleSheet.create({
	schemaView: {
		// backgroundColor:'yellow',
		height: pxTodp(400),
		position:'absolute',
		bottom: pxTodp(0),
	},
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: pxTodp(25),
		paddingRight: pxTodp(25),
		paddingTop: pxTodp(25),
		paddingBottom: pxTodp(25),
		borderBottomWidth: pxTodp(1),
		borderColor: '#CCCCCC',
	},
	wrapperItem: {
		alignItems: 'center'
	},
	littleSub: {
		color: 'gray',
		fontSize: pxTodp(24)
	},
	wrapperItemBuy: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	buyTicket: {
		color: '#fe4b37',
		borderWidth: pxTodp(1),
		borderColor: '#fe4b37',
		borderRadius: pxTodp(25),
		paddingLeft: pxTodp(35),
		paddingRight: pxTodp(30),
		paddingTop: pxTodp(10),
		paddingBottom: pxTodp(10),
	}
})

export default FilmSchemaList
