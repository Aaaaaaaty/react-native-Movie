import React, {Component, PropTypes} from "react"
import {StyleSheet, View, Image, Text, PixelRatio, Dimensions} from "react-native"
import pxTodp from '../utils/pxTodp'

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
        </View>
      )
  }
}

const styles = StyleSheet.create({
  filmListWrapper: {
      width: pxTodp(400),
      // margin: 50,
      flexDirection: 'column',
      // justifyContent: 'space-between',
  },
  filmListItem: {
      // width:pxTodp(750),
      backgroundColor: 'green',
      // height: 150,
      // margin: 50,
      // flex: 1,
      flexDirection: 'row',
      // justifyContent: 'space-around',
  }
})
