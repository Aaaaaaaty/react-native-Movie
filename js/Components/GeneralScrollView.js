import React, {Component, PropTypes} from "react"
import {StyleSheet, View, Image, Text, PixelRatio, Dimensions, ScrollView, Animated, TouchableOpacity } from "react-native"
import pxTodp from '../utils/pxTodp'
// 屏幕宽度
var screenWidth = Dimensions.get('window').width;

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
      offSetX: 0
    }
    this._index = 0;// 当前正在显示的图片
    this._max = props.filmListScrollViewImg.length;// 图片总数
  }
  onScrollBeginDrag(e) {
    let startX = e.nativeEvent.contentOffset.x //图片相对滑动距离
    this.setState({
      startX: startX
    })
  }
  onMomentumScrollEnd(e) { // 惯性滑动停止的那一刻
  }
  onScrollEndDrag(e) {
    let { startX, offSetX } = this.state
    let endX = e.nativeEvent.contentOffset.x
    let disX = endX - startX
    if(disX > screenWidth / 4) {
      this._index ++
    } else if(disX < -screenWidth / 4) {
      this._index --
    }
    offSetX = this._index * screenWidth
    this._scrollView.scrollTo({x: offSetX, y: 0, animated: true})
  }
  render() {
    let { filmListScrollViewImg } = this.props
    let { selectedImageIndex, offSet } = this.state
    let images = filmListScrollViewImg.map((item, index) => {
      let uri = { uri: item }
      return (
        <TouchableOpacity
          key={ 'scrollView' + index }
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
        <ScrollView horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            showsVerticalScrollIndicator={ false }
            onScrollBeginDrag={ this.onScrollBeginDrag.bind(this) }
            onMomentumScrollEnd={ this.onMomentumScrollEnd.bind(this) }
            onScrollEndDrag={ this.onScrollEndDrag.bind(this) }
            contentOffset={offSet}
            ref={(scrollView) => { this._scrollView = scrollView }}>
            <Animated.View style={ styles.animatedImage } >{ images }</Animated.View>
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
})
