import React, {Component, PropTypes} from "react"
import {StyleSheet, View, Image, Text, PixelRatio, Dimensions, ScrollView, Animated } from "react-native"
import pxTodp from '../utils/pxTodp'

export default class filmListItem extends Component {
  constructor(props){
     super(props)
     this.state = {
       listType: 'online',
     }
  }
  componentDidMount() {
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
      return (
        <View key={ 'filmListItem' + index }
              style={ styles.filmListItem }>
          <View>
            <Image  source={ posterUrl }
                    style={styles.image}/>
            </View>
          <View style={ styles.message }>
            <Text style={ styles.name } numberOfLines={ 1 }>{ item.name }</Text>
            <View style={ styles.messageAvtor }>
              <View><Text style={ styles.subColor }>{ item.phrase }</Text></View>
              <View><Text numberOfLines={ 1 } style={ styles.subColor }>{ item.starring }</Text></View>
            </View>
             { filmTypeListItem }
          </View>
          <View style={ styles.btnWrapper }>
            <Text style={ [ styles.btn, styles.btnBuyText ] }>购票</Text>
          </View>
        </View>
      )
    })
      return (

          <ScrollView style={ styles.filmListWrapper }
                      showsVerticalScrollIndicator={ false }>
              { filmListItem }
          </ScrollView>

      )
  }
}

const styles = StyleSheet.create({
  filmListWrapper: {
      flexDirection: 'column',
      marginTop: pxTodp(30),
      marginLeft: pxTodp(30),
      marginRight: pxTodp(30),
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
    marginLeft: pxTodp(20)
  },
  messageAvtor: {
    marginTop: pxTodp(20),
    marginBottom: pxTodp(20),
    flexDirection: 'column',
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    paddingTop: pxTodp(10),
    paddingBottom: pxTodp(10),
    paddingLeft: pxTodp(45),
    paddingRight: pxTodp(45),
    borderRadius: pxTodp(25),
    borderWidth: pxTodp(1),
    borderStyle: 'solid',
    borderColor: '#fe4b37'
  },
  btnBuyText: {
    color: '#fe4b37',
    fontSize: pxTodp(28),
  },
  name: {
    "fontWeight": 'bold',
  },
  subColor: {
    color: '#7d838e',
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
