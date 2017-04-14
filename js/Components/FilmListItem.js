import React, {Component, PropTypes} from "react"
import {StyleSheet, View, Image, Text, PixelRatio, Dimensions, ScrollView} from "react-native"
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
                    style={styles.image}/>
            </View>
          <View style={ styles.message }>
            <Text>{ item.name }</Text>
            <Text style={ styles.messageAvtor }>
              <Text>{ item.phrase }</Text>
              <Text>{ item.starring }</Text>
            </Text>
            <Text>2D</Text>
          </View>
          <View style={ styles.btn }>
            <Text>购票</Text>
          </View>
        </View>
      )
    })
      return (
        <ScrollView style={ styles.filmListWrapper }>
          { filmListItem }
        </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  filmListWrapper: {
      flexDirection: 'column',
  },
  filmListItem: {
      marginBottom: pxTodp(50),
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  image: {
    width: pxTodp(150),
    height: pxTodp(200)
  },
  message: {
    flex: 1,
    backgroundColor: 'gray',
    marginLeft: pxTodp(20)
  },
  messageAvtor: {
    marginTop: pxTodp(20),
    marginBottom: pxTodp(20),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  btn: {
    width: pxTodp(100),
    backgroundColor: 'yellow'
  }
})
