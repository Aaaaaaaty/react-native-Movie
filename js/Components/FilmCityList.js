import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView, ListView, TextInput, LayoutAnimation, Button, KeyboardAvoidingView } from 'react-native';
import pxTodp from '../utils/pxTodp'
import { NavigationActions } from 'react-navigation'
// LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
var screenWidth = Dimensions.get('window').width;
this.isHeaderShow = true
export default class FilmCityList extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
    this.state = {
        dataSource: ds.cloneWithRowsAndSections(this.getRows()),
        listSectionViewY: {},
        inputWidth: pxTodp(700),
        inputJustifyContent: 'center',
        caretHidden: false,
    };
  }
  componentWillUpdate() {
    // 创建动画
    // LayoutAnimation.linear();
    let config = {
      duration: 200,   //持续时间
      create: {  // 视图创建
         type: LayoutAnimation.Types.linear,
         property: LayoutAnimation.Properties.opacity,
      },
      update: { // 视图更新
         type: LayoutAnimation.Types.linear,
         springDamping: 0.4
      },
    }
    LayoutAnimation.configureNext(config)
  }
  getHotCity(cityList) {
    let hotCityList = cityList.filter(( item, index) => {
      return item.isHot == 'true'
    })
    let result = []
    hotCityList.forEach((item, index) => {
      let arrRowIndex = Math.floor(index / 4)
      let arrColIndex = index % 4
      if(!(result[arrRowIndex] instanceof Array)) {
        result[arrRowIndex] = []
      }
      result[arrRowIndex][arrColIndex] = item
    })
    return result
  }
  getRows(){
      let cityList = {"result":[{"cityCode":"123451","cityName":"北京","isHot":"false","firstLetter":"B"},
                                             {"cityCode":"123452","cityName":"啊2北京","isHot":"false","firstLetter":"B"},
                                           {"cityCode":"123453","cityName":"北京1","isHot":"false","firstLetter":"B"},
                                           {"cityCode":"123454","cityName":"2北京","isHot":"true","firstLetter":"B"},
                                           {"cityCode":"123455","cityName":"3北京","isHot":"true","firstLetter":"A"},
                                           {"cityCode":"123456","cityName":"4北京","isHot":"true","firstLetter":"A"},
                                           {"cityCode":"123455","cityName":"5北京","isHot":"true","firstLetter":"A"},
                                           {"cityCode":"123415","cityName":"才北京","isHot":"true","firstLetter":"A"},
                                           {"cityCode":"123145","cityName":"才北京","isHot":"true","firstLetter":"C"},
                                           {"cityCode":"123345","cityName":"的北京","isHot":"false","firstLetter":"C"},
                                           {"cityCode":"123445","cityName":"的北京","isHot":"false","firstLetter":"C"},
                                           {"cityCode":"123545","cityName":"的北京","isHot":"false","firstLetter":"D"},
                                           {"cityCode":"123645","cityName":"额北京","isHot":"false","firstLetter":"D"},
                                           {"cityCode":"123745","cityName":"额北京","isHot":"false","firstLetter":"D"},
                                           {"cityCode":"112345","cityName":"额北京","isHot":"false","firstLetter":"E"},
                                           {"cityCode":"212345","cityName":"额北京","isHot":"false","firstLetter":"E"},
                                           {"cityCode":"312345","cityName":"我北京","isHot":"false","firstLetter":"E"},
                                           {"cityCode":"412345","cityName":"我北京","isHot":"false","firstLetter":"F"},
                                           {"cityCode":"512345","cityName":"我北京","isHot":"false","firstLetter":"F"},
                                           {"cityCode":"612345","cityName":"去北京","isHot":"false","firstLetter":"F"},
                                           {"cityCode":"712345","cityName":"去北京","isHot":"false","firstLetter":"G"},
                                           {"cityCode":"112345","cityName":"去北京","isHot":"false","firstLetter":"G"},
                                           {"cityCode":"122345","cityName":"额北京","isHot":"false","firstLetter":"G"},
                                           {"cityCode":"132345","cityName":"人北京","isHot":"false","firstLetter":"H"},
                                           {"cityCode":"142345","cityName":"让人北京","isHot":"false","firstLetter":"H"},
                                           {"cityCode":"152345","cityName":"认识北京","isHot":"false","firstLetter":"H"},
                                           {"cityCode":"162345","cityName":"是北京","isHot":"false","firstLetter":"K"},
                                           {"cityCode":"182345","cityName":"是北京","isHot":"false","firstLetter":"K"},
                                           {"cityCode":"1234512","cityName":"想北京","isHot":"false","firstLetter":"K"},
                                           {"cityCode":"1234513","cityName":"想北京","isHot":"false","firstLetter":"P"},
                                           {"cityCode":"1234514","cityName":"想北京","isHot":"false","firstLetter":"P"},
                                           {"cityCode":"1234515","cityName":"才北京","isHot":"false","firstLetter":"Q"},
                                           {"cityCode":"1234516","cityName":"看北京","isHot":"false","firstLetter":"Q"},
                                           {"cityCode":"1234521","cityName":"看北京","isHot":"false","firstLetter":"W"},
                                           {"cityCode":"1234522","cityName":"了北京","isHot":"false","firstLetter":"W"},
                                           {"cityCode":"1234523","cityName":"聊什么北京","isHot":"false","firstLetter":"R"}]}
      let dataSource = cityList.result
      let dataObj = {}
      let letterArr= []
      let Sym = dataSource[0].firstLetter
      let result = [Sym]
      let SymListObg = {}
      dataSource.forEach((item, index) => {
        if(item.firstLetter != Sym) {
          Sym = item.firstLetter
          dataSource[index - 1].isLast = true
        }
      })
      dataSource[dataSource.length - 1].isLast = true
      dataObj['搜索'] = [{}]
      dataObj['定位城市'] = [{cityName: '北京', isHot: 'true', isLast: true}]
      dataObj['热门城市'] = this.getHotCity(dataSource)
      dataSource.forEach(( item, index ) => {
        if(!dataObj[item.firstLetter]) {
          dataObj[item.firstLetter] = []
        }
        dataObj[item.firstLetter].push(item)
      })
      return dataObj
  }
  inputOnFocus() {
    let ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            });
    this.setState({
      inputWidth: pxTodp(600),
      inputJustifyContent: 'flex-start',
      dataSource: ds.cloneWithRowsAndSections(this.getRows()),

    })
  }
  inputCancel() {
    this.setState({
      inputWidth: pxTodp(700),
      inputJustifyContent: 'center',
    })
  }
  inputOnBlur(e) {
  }
  renderRow(rowData,sectionID,rowID,highlightRow) {
    let { navigation } = this.props
      if(sectionID == '搜索') {
        return (
          <View style={ {flexDirection: 'row', justifyContent: 'space-between',backgroundColor: '#C0C0C0', alignItems: 'center'}}>
            <View style={ [styles.inputWrapper, {justifyContent: this.state.inputJustifyContent}]}>
              <KeyboardAvoidingView behavior={"padding"}>
                <TextInput  style={[styles.inputInner, { width:this.state.inputWidth}] }
                            placeholder="城市名称或首字母"
                            clearButtonMode="while-editing"
                            keyboardType="default"
                            caretHidden={ this.state.caretHidden }
                            onFocus={ this.inputOnFocus.bind(this) }
                            onBlur={ this.inputOnBlur.bind(this) }/>
              </KeyboardAvoidingView>
            </View>
            <TouchableOpacity style={{flex: 1}} >
              <Text onPress={ this.inputCancel.bind(this) } style={styles.inputCancel}>取消</Text>
            </TouchableOpacity>
          </View>
        )
      }
      if(sectionID == '热门城市') {
        let hotCity = rowData.map((item, index) => {
          let backAction = NavigationActions.back({
            routeName: 'FilmCinemaFromCity',
            params: {
              title: item.cityName
            }
          }) //action 暂不知怎么取值
          return (
              <Text key={ 'hotCity' + index } style={ styles.rowItemTextHot } onPress = { () => { navigation.dispatch(NavigationActions.back({params: {name: rowData.cityName}})) } }>{item.cityName}</Text>
          )
        })
        return (
          <View
              style={styles.cityNameHot}>
              { hotCity }
          </View>
        )
      }
      if(rowData.isLast) {
        return (
            <View
                style={styles.cityName}>
                <Text style={styles.rowItemText} onPress = { () => { navigation.dispatch(NavigationActions.back({params: {name: rowData.cityName}})) } }>{rowData.cityName}</Text>
            </View>
        )
      } else {
        return (
            <View style={[ styles.cityName, styles.otherOne ]}>
                <Text style={styles.rowItemText} onPress = { () => { navigation.dispatch(NavigationActions.back({params: {name: rowData.cityName}})) } }>{rowData.cityName}</Text>
            </View>
        )
      }
  }
  renderSectionHeader(sectionData, sectionID){
      if(sectionID == '搜索') {
        return null
      }
      if(sectionID == '定位城市' || sectionID == '热门城市') {
        return (
          <View
              onLayout={(event) => this.measureSectionView(event, sectionID)}
              style={ styles.cityNameSymHot }>
              <Text>{sectionID}</Text>
          </View>
        )
      } else {
        return(
            <View
                onLayout={(event) => this.measureSectionView(event, sectionID)}
                style={ styles.cityNameSym }>
                <Text>{sectionID}</Text>
            </View>
        )
      }

  }
  measureSectionView(event, sectionID) {
    let { listSectionViewY } = this.state
    listSectionViewY[sectionID] = event.nativeEvent.layout.y
    this.setState({
        listSectionViewY: listSectionViewY
    })
  }
  pressListSym(item) { //传递索引值如A，B，C，D
    let { listSectionViewY } = this.state
    this.listView.scrollTo({x: 0, y: listSectionViewY[item], animated: false})
  }
  render() {
    let listSym = Object.keys(this.getRows()).map((item, index) => {
      if(item == '热门城市') item = '最热'
      if(item == '定位城市') item = '定位'
       return (
        <View key={ 'listSym' + index } >
          <Text onPress={ this.pressListSym.bind(this, item) }
                style={ styles.listSymText }>{item}</Text>
        </View>
      )
    })
    return (
      <View>
          <ListView
                  contentContainerStyle={ styles.wrapper }
                  ref={(listview) => this.listView = listview}
                  renderSectionHeader = { this.renderSectionHeader.bind(this) }
                  dataSource={ this.state.dataSource }
                  showsVerticalScrollIndicator={ false }
                  renderRow={ this.renderRow.bind(this) } />
            <View style={ styles.listWrapper }>
              { listSym }
            </View>
      </View>

    )
  }
}
FilmCityList.navigationOptions = {
  headerTintColor: 'white',
  title: '城市选择',
  headerStyle: {
    backgroundColor: 'rgba(254,75,55,1)',
  },
  headerVisible: this.isHeaderShow
}
var styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  inputWrapper: {
    backgroundColor: '#C0C0C0',
    flexDirection: 'row',
    // justifyContent: 'center',
    paddingLeft: pxTodp(25),
    paddingRight: pxTodp(25)
  },
  inputInner: {
    height: pxTodp(50),
    borderColor: '#ffffff',
    borderWidth: pxTodp(1),
    backgroundColor: '#ffffff',
    borderRadius: pxTodp(10),
    marginTop: pxTodp(10),
    marginBottom: pxTodp(10),
    fontSize: pxTodp(24),
    color: 'gray'
  },
  inputCancel: {
    color: '#ffffff',
    textAlign: 'left',
    fontSize: pxTodp(30)
  },
  listWrapper: {
    position: 'absolute',
    top: pxTodp(300),
    right: pxTodp(0),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  listSymText: {
    color: '#3583f0',
    textAlign: 'center'
  },
  cityName: {
    paddingBottom: pxTodp(20),
    paddingTop: pxTodp(20),
    width: pxTodp(650),
    marginLeft: pxTodp(40)
  },
  rowItemTextHot: {
    borderWidth: pxTodp(1),
    borderColor: 'gray',
    marginLeft: pxTodp(30),
    paddingTop: pxTodp(20),
    paddingBottom: pxTodp(20),
    width: pxTodp(150),
    textAlign: 'center'
  },
  cityNameHot: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: pxTodp(60),
    marginTop: pxTodp(10),
    marginBottom: pxTodp(10)
  },
  otherOne: {
    borderBottomWidth: pxTodp(1),
    borderBottomColor: 'gray',
  },
  cityNameSym: {
    backgroundColor: '#eeeeee',
    paddingBottom: pxTodp(3),
    paddingTop: pxTodp(3),
    paddingLeft: pxTodp(30)
  },
  cityNameSymHot: {
    backgroundColor: '#eeeeee',
    paddingBottom: pxTodp(8),
    paddingTop: pxTodp(8),
    paddingLeft: pxTodp(30)
  }
})
