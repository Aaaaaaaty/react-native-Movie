import React, {Component, PropTypes} from "react"
import {StyleSheet, View, Image, Text, PixelRatio, Dimensions, ScrollView, Animated, TouchableOpacity } from "react-native"
import pxTodp from '../utils/pxTodp'
// 屏幕宽度
var screenWidth = Dimensions.get('window').width;
import Swiper from 'react-native-swiper';

export default class GeneralScrollView extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedImageIndex: 0,
      isNeedRun: true,
      offSet: {x: 0, y:0},
      startX:0,
      endX: 0,
      disX: 0,
      offSetX: 0,
      scrollType: 'next'
    }
    this._index = 1;// 当前正在显示的图片
    this._max = props.filmListScrollViewImg.length;// 图片总数
  }
  onScrollBeginDrag(e) {
    let startX = e.nativeEvent.contentOffset.x //图片相对滑动距离
    this.setState({
      startX: startX
    })
  }
  onMomentumScrollEnd(e) { // 惯性滑动停止的那一刻
    let { scrollType } = this.state
    if(scrollType === 'next') {
      this.next()
    } else {
      this.prev()
    }
  }
  onScrollEndDrag(e) {
    let { startX, offSetX, scrollType } = this.state
    let endX = e.nativeEvent.contentOffset.x
    let disX = endX - startX
    if(disX > screenWidth / 4) {
      scrollType = 'next'
      this._scrollView.scrollTo({x: screenWidth * 2, y: 0, animated: true})
    } else if(disX < -screenWidth / 4) {
      scrollType = 'prev'
      this._scrollView.scrollTo({x: 0, y: 0, animated: true})
    }
    this.setState({
      scrollType: scrollType
    })

  }
  next() {
    let { _viewImg } = this.state
    _viewImg.shift()
    let firstOne = _viewImg.shift()
    _viewImg.unshift(firstOne)
    _viewImg.push(firstOne)
    this.setState({
      _viewImg: _viewImg
    }, () => {
      this._scrollView.scrollTo({x: screenWidth, y: 0, animated: false})
    })

  }
  prev() {
    let { _viewImg } = this.state
    _viewImg.pop()
    let lastOne = _viewImg.pop()
    _viewImg.push(lastOne)
    _viewImg.unshift(lastOne)
    this.setState({
      _viewImg: _viewImg
    }, () => {
      this._scrollView.scrollTo({x: screenWidth, y: 0, animated: false})
    })
  }
  componentWillMount() {
    let { filmListScrollViewImg } = this.props
    let _viewImg = filmListScrollViewImg.slice()
    if( filmListScrollViewImg.length > 1) {
      let lastOne = _viewImg.pop()
      _viewImg.unshift(lastOne)
      _viewImg.push(lastOne)
    }
    this.setState({
      _viewImg: _viewImg,
      offSet: {x: screenWidth}
    })
  }
  render() {
    let { filmListScrollViewImg } = this.props
    let { selectedImageIndex, offSet, _viewImg } = this.state
    let images = _viewImg.map((item, index) => {
      let uri = { uri: item }
      return (
        <TouchableOpacity
          key={ 'scrollView' + index }
          style={ styles.animatedImage }
          onPress={()=>console.log('a')}
          activeOpacity={ 1 }>
          <Image  style={ styles.image }
                  source={ uri }/>
        </TouchableOpacity>
      )
    })
    let circles = filmListScrollViewImg.map((value,index) => {
      return (<View key={ index } style={ ( index == selectedImageIndex ) ? styles.circleSelected : styles.circle}/>);
    })
    return (
      <View style={ styles.container }>
        <ScrollView
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            showsVerticalScrollIndicator={ false }
            onScrollBeginDrag={ this.onScrollBeginDrag.bind(this) }
            onMomentumScrollEnd={ this.onMomentumScrollEnd.bind(this) }
            onScrollEndDrag={ this.onScrollEndDrag.bind(this) }
            contentOffset={offSet}
            ref={(scrollView) => { this._scrollView = scrollView }}>
            { images }
        </ScrollView>
        <View style={ styles.circleRelative }>
          <View style={ styles.circleWrapper }>{ circles }</View><
        /View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  animatedImage: {
    flexDirection:'row',
  },
  image: {
    width: screenWidth,
    height: pxTodp(300)
  },
  circle: {
    width:pxTodp(16),
    height:pxTodp(16),
    borderRadius:pxTodp(16),
    backgroundColor:'#f4797e',
  },
  circleSelected: {
    width:pxTodp(16),
    height:pxTodp(16),
    borderRadius:pxTodp(16),
    backgroundColor:'#ffffff',
  },
  circleRelative: {
    flexDirection:'column',
    alignItems: 'center'
  },
  circleWrapper: {
    width: pxTodp(70),
    justifyContent: 'space-between',
    flexDirection:'row',
    marginTop: pxTodp(-30)
  },
  wrapper: {
 },
 slide1: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#9DD6EB',
 },
 slide2: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#97CAE5',
 },
 slide3: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#92BBD9',
 },
 text: {
   color: '#fff',
   fontSize: 30,
   fontWeight: 'bold',
 }
})
