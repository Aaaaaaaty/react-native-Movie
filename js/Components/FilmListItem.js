import React, {Component, PropTypes} from "react"
import {StyleSheet, View, Image, Text, PixelRatio, Dimensions} from "react-native"
import px2dp from '../utils/px2dp'

export default class filmListItem extends Component {
  constructor(props){
     super(props);
     this.state = {
       listType: 'online'
     }
  }

  render() {
    let { filmList } = this.props
    let { listType } = this.state
    let filmListItem = filmList[listType].map((item, index) => {
      let posterUrl = { uri: item.posterUrl }
      return (
        <View key={ 'filmListItem' + index }
              style={ styles.filmListItem }>
          <View>
            <Image  source={ posterUrl }
                    style={{width: 40, height: 40}}/>
            </View>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
            <Text>{ item.name }</Text>
          </View>
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
            <Text>购票</Text>
          </View>
        </View>
      )
    })
      return (
        <View style={ styles.filmListWrapper }>
          { filmListItem }
          <View>
            <Text> 屏幕高度：{ Dimensions.get('window').height }</Text>
            <Text> 屏幕宽度：{ Dimensions.get('window').width }</Text>
            <Text> 设备像素比：{ PixelRatio.get() }</Text>
            <Text> getPixelSizeForLayoutSize宽度：{ PixelRatio.getPixelSizeForLayoutSize(414) }</Text>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  filmListWrapper: {
      width: PixelRatio.getPixelSizeForLayoutSize(100),
      // margin: 50,
      flexDirection: 'column',
      // justifyContent: 'space-between',
  },
  filmListItem: {
      // width:px2dp(750),
      backgroundColor: 'green',
      // height: 150,
      // margin: 50,
      // flex: 1,
      flexDirection: 'row',
      // justifyContent: 'space-around',
  }
})
