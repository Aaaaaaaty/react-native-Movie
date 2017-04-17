import React, {Component, PropTypes} from "react"
import {StyleSheet, View, Image, Text, PixelRatio, Dimensions, ScrollView} from "react-native"
import pxTodp from '../utils/pxTodp'

export default class filmListItem extends Component {
  constructor(props){
     super(props)
     this.state = {
       listType: 'online'
     }
  }

  render() {
    let { filmList } = this.props
    let { listType } = this.state
    let filmListItem = filmList[listType].map((item, index) => {
      let posterUrl = { uri: item.posterUrl }
      let filmTypeListItem = (() => {
        let result = []
        if(item.is2D) result.push((() => { return (<View key={Math.random()*100} style={ [styles.type, styles.type_d] }><Text style={ styles.color }>2D</Text></View>)})())
        if(item.is3D) result.push((() => { return (<View key={Math.random()*100} style={ [styles.type, styles.type_d] }><Text style={ styles.color }>3D</Text></View>)})())
        if(item.isImax) result.push((() => { return (<View key={Math.random()*100} style={ [styles.type, styles.type_m] }><Text style={ styles.color }>IMAX</Text></View>)})())
        if(item.isDmax) result.push((() => { return (<View key={Math.random()*100} style={ [styles.type, styles.type_m] }><Text style={ styles.color }>DMAX</Text></View>)})())
        return (
          <View style={ styles.typeList }>{ result }</View>
        )
      })()
      console.log(filmTypeListItem);
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
             { filmTypeListItem }
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
    // backgroundColor: 'gray',
    marginLeft: pxTodp(20)
  },
  messageAvtor: {
    marginTop: pxTodp(20),
    marginBottom: pxTodp(20),
    overflow: 'hidden',
  },
  btn: {
    width: pxTodp(100),
    // backgroundColor: 'yellow'
  },
  typeList: {
    flexDirection: 'row',
  },
  type: {
    paddingTop: pxTodp(3),
    paddingBottom: pxTodp(3),
    paddingLeft: pxTodp(14),
    paddingRight: pxTodp(14),
    marginRight: pxTodp(10),
    marginTop: pxTodp(20),
    borderRadius: pxTodp(9),
  },
  type_d: {
    backgroundColor: '#7ec235',
  },
  type_m: {
    backgroundColor: '#95afc9',
  },
  color: {
    color: '#ffffff',
  }
})
