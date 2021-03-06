import React, {
  Component,
  PropTypes
} from "react"
import {
  StyleSheet,
  View,
  Image,
  Text,
  PixelRatio,
  Dimensions,
  ScrollView,
  Animated,
  ListView,
  TouchableHighlight,
  TouchableOpacity
} from "react-native"
import {
  StackNavigator,
} from 'react-navigation';
import pxTodp from '../utils/pxTodp'
import FilmListDetail from '../Container/FilmListDetail'



export default class filmListItem extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]),
      listType: 'online',
    }
  }
  componentDidMount() {
    let {
      filmList
    } = this.props
    let {
      listType
    } = this.state
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.setState({
      dataSource: ds.cloneWithRows(filmList[listType])
    })
  }
  render() {
    let { navigation } = this.props
    let {
      filmList
    } = this.props
    let {
      listType
    } = this.state
    let filmListItem = filmList[listType].map((item, index) => {
      let posterUrl = {
        uri: item.posterUrl
      }
      let filmTypeListItem = (() => {
        let result = []
        if (item.is2D) result.push((() => {
          return (<View key={Math.random()*100} style={ [styles.type, styles.type_d] }><Text style={ styles.color }>2D</Text></View>)
        })())
        if (item.is3D) result.push((() => {
          return (<View key={Math.random()*100} style={ [styles.type, styles.type_d] }><Text style={ styles.color }>3D</Text></View>)
        })())
        if (item.isImax) result.push((() => {
          return (<View key={Math.random()*100} style={ [styles.type, styles.type_m] }><Text style={ styles.color }>IMAX</Text></View>)
        })())
        if (item.isDmax) result.push((() => {
          return (<View key={Math.random()*100} style={ [styles.type, styles.type_m] }><Text style={ styles.color }>DMAX</Text></View>)
        })())
        return (
          <View style={ styles.typeList }>{ result }</View>
        )
      })()
      return (
        <View key={ 'filmListItem' + index } style = {styles.mainContent}>
          <TouchableOpacity onPress = { () => {navigation.navigate('FilmListDetail')}} style={ styles.filmListItem }>
            <View style = {{flexDirection: 'row'}}>
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
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.btnWrapper } onPress = { () => {navigation.navigate('FilmMe')}}>
            <Text style={ [ styles.btn, styles.btnBuyText ] }>购票</Text>
          </TouchableOpacity>
        </View>
      )
    })
    return (
      <View>
            <ScrollView style={ styles.filmListWrapper }
                        showsVerticalScrollIndicator={ false }>
                { filmListItem }
            </ScrollView>
          </View>
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
  mainContent: {
    flexDirection: 'row',
    flex: 1
  },
  filmListItem: {
    marginBottom: pxTodp(50),
    justifyContent: 'space-between',
    flex: 1
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
    justifyContent: 'center',
    width: pxTodp(150),
    marginTop: pxTodp(-100),
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
