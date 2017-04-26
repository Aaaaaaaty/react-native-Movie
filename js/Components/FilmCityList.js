import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView, ListView } from 'react-native';
import pxTodp from '../utils/pxTodp'

var screenWidth = Dimensions.get('window').width;
export default class FilmCityList extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
    this.state = {
        dataSource: ds.cloneWithRowsAndSections(this.getRows()),
    };
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
      dataSource.forEach((item, index) => {
        if(item.firstLetter != Sym) {
          Sym = item.firstLetter
          dataSource[index - 1].isLast = true
        }
      })
      dataSource[dataSource.length - 1].isLast = true
      dataSource.forEach(( item, index ) => {
        if(!dataObj[item.firstLetter]) {
          dataObj[item.firstLetter] = []
        }
        dataObj[item.firstLetter].push(item)
      })
      return dataObj
  }
  renderRow(rowData,sectionID,rowID,highlightRow){
      if(rowData.isLast) {
        return (
            <View style={styles.cityName}>
                <Text style={styles.rowItemText}>{rowData.cityName}</Text>
            </View>
        )
      } else {
        return (
            <View style={[ styles.cityName, styles.otherOne ]}>
                <Text style={styles.rowItemText}>{rowData.cityName}</Text>
            </View>
        )
      }
  }
  renderSectionHeader(sectionData, sectionID){
      return(
          <View style={styles.cityNameSym}>
              <Text>{sectionID}</Text>
          </View>
      )
  }
  render() {
    return (
      <ListView
              style={styles.wrapper}
              renderSectionHeader = {this.renderSectionHeader}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow} />

    )
  }
}
FilmCityList.navigationOptions = {
  headerTintColor: 'white',
  title: '城市选择',
  headerStyle: {
    backgroundColor: '#fe4b37',
  },
}
var styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  cityName: {
    paddingBottom: pxTodp(20),
    paddingTop: pxTodp(20),
    width: pxTodp(650),
    marginLeft: pxTodp(40)
  },
  otherOne: {
    borderBottomWidth: pxTodp(1),
    borderBottomColor: 'gray',
  },
  cityNameSym: {
    backgroundColor: '#eeeeee',
    paddingBottom: pxTodp(2),
    paddingTop: pxTodp(2),
    paddingLeft: pxTodp(30)
  }
})
// <ScrollView style={ styles.wrapper }>
//   { cityListMap }
// </ScrollView>
