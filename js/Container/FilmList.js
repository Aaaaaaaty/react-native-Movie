import React, { Component } from 'react';
import {mapStateToProps,mapDispatchToProps} from '../Redux/Store/Store';
import { connect ,Provider } from 'react-redux'
import {StyleSheet, View, Image, Text} from "react-native"
import FilmListItem from '../Components/FilmListItem'

class FilmList extends Component {
  constructor(props){
     super(props);
  }
  componentWillMount() {
    // let { getFilmList } = this.props
    // getFilmList('../data/filmList.json', '')
  }
  render() {
    let filmList = {
      "online":[{
        "name": "刺客信条",
        "filmShortCode": 0,
        "releaseTime": "2016-01-23",
        "director": "someone",
        "starring": "迈克尔·法斯宾德,玛丽昂·歌迪亚迈克尔·法斯宾德,玛丽昂·歌迪亚",
        "phrase": "穿越黑科技，法鲨炫腹肌",
        "keyword": "剧情/爱情",
        "duration": 100,
        "language": "中国",
        "summary": "陈末（邓超饰）被称为全城最贱，每天和王牌DJ小容（杜鹃饰）针锋相对，谁也不知道他们的仇恨从何而来。陈末的两个兄弟，分别是全城最傻的猪头（岳云鹏饰），全城最纯的茅十八（杨洋饰），三人每天横冲直撞，以为可以自在生活，结果都面临人生最大的转折点。陈末相遇了最神秘的幺鸡（张天爱饰），猪头打造了最惨烈的婚礼，茅十八经历了最悲伤的别离，这群人的生活一点点崩塌，往事一点点揭开。梦想，爱情，友情都离陈末远去。一个失去所有的人，已经弄丢自己的路，直到听到来自全世界的一段语音[4]  。",
        "crews": [{
          "realName": "张一白",
          "roleName": "导演",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/28970/cov-20170319101529-1232584341.jpg/300"
          },{
          "realName": "邓超",
          "roleName": "陈末",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/24080/cut-20160902140417-120687479.jpg/300"
          },{
          "realName": "白百合",
          "roleName": "荔枝",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/23425/cut-20160902140620-433841570.jpg/300"
          },{
            "realName": "杨洋",
            "roleName": "茅十八",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/16680/cut-20160902140655-1019677765.jpg/300"
          },{
            "realName": "张天爱",
            "roleName": "幺鸡",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/27315/cut-20160902140725-813406260.jpg/300"
          },{
            "realName": "岳云鹏",
            "roleName": "猪头",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/25132/cut-20160902140805-1310357178.jpg/300"
          },{
            "realName": "杜鹃",
            "roleName": "小容",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/16559/cut-20160902140835-1994129423.jpg/300"
          },{
            "realName": "柳岩",
            "roleName": "燕子",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/25056/cut-20160902140904-110357428.jpg/300"
          }],
        "videoStills": [{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/47847/20160513161727-1920051904.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/47847/20160513161727-1920051904.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "type": 1
          }],
        "posterUrl": "https://static.wepiao.com/movie/2016/9/7_0/201609070940573548.jpg",
        "userFilmInterestCount": 10,
        "saleStatus": 1,
        "is2D": true,
        "is3D": false,
        "isImax": true,
        "isDmax": false
      },{
        "name": "从你的全世界路过",
        "filmShortCode": 0,
        "releaseTime": "2016-01-23",
        "director": "someone",
        "starring": "邓超 杨洋 白百合 张天爱",
        "phrase": "穿越黑科技，法鲨炫腹肌",
        "keyword": "剧情/爱情",
        "duration": 100,
        "language": "中国",
        "posterUrl": "https://static.wepiao.com/movie/2016/9/20_0/201609201030512727.jpg",
        "summary": "陈末（邓超饰）被称为全城最贱，每天和王牌DJ小容（杜鹃饰）针锋相对，谁也不知道他们的仇恨从何而来。陈末的两个兄弟，分别是全城最傻的猪头（岳云鹏饰），全城最纯的茅十八（杨洋饰），三人每天横冲直撞，以为可以自在生活，结果都面临人生最大的转折点。陈末相遇了最神秘的幺鸡（张天爱饰），猪头打造了最惨烈的婚礼，茅十八经历了最悲伤的别离，这群人的生活一点点崩塌，往事一点点揭开。梦想，爱情，友情都离陈末远去。一个失去所有的人，已经弄丢自己的路，直到听到来自全世界的一段语音[4]  。",
        "userFilmInterestCount": 10,
        "saleStatus": 1,
        "is2D": true,
        "is3D": true,
        "isImax": true,
        "isDmax": false,
        "crews": [{
          "realName": "张一白",
          "roleName": "导演",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/28970/cov-20170319101529-1232584341.jpg/300"
          },{
          "realName": "邓超",
          "roleName": "陈末",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/24080/cut-20160902140417-120687479.jpg/300"
          },{
          "realName": "白百合",
          "roleName": "荔枝",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/23425/cut-20160902140620-433841570.jpg/300"
          },{
            "realName": "杨洋",
            "roleName": "茅十八",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/16680/cut-20160902140655-1019677765.jpg/300"
          },{
            "realName": "张天爱",
            "roleName": "幺鸡",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/27315/cut-20160902140725-813406260.jpg/300"
          },{
            "realName": "岳云鹏",
            "roleName": "猪头",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/25132/cut-20160902140805-1310357178.jpg/300"
          },{
            "realName": "杜鹃",
            "roleName": "小容",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/16559/cut-20160902140835-1994129423.jpg/300"
          },{
            "realName": "柳岩",
            "roleName": "燕子",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/25056/cut-20160902140904-110357428.jpg/300"
          }],
        "videoStills": [{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "type": 1
          }]
      },{
        "name": "樱桃小丸子：来自意大利的少年",
        "filmShortCode": 0,
        "releaseTime": "2016-01-23",
        "director": "someone",
        "starring": "樱桃小丸子",
        "phrase": "穿越黑科技，法鲨炫腹肌",
        "keyword": "剧情/爱情",
        "duration": 100,
        "language": "中国",
        "summary": "陈末（邓超饰）被称为全城最贱，每天和王牌DJ小容（杜鹃饰）针锋相对，谁也不知道他们的仇恨从何而来。陈末的两个兄弟，分别是全城最傻的猪头（岳云鹏饰），全城最纯的茅十八（杨洋饰），三人每天横冲直撞，以为可以自在生活，结果都面临人生最大的转折点。陈末相遇了最神秘的幺鸡（张天爱饰），猪头打造了最惨烈的婚礼，茅十八经历了最悲伤的别离，这群人的生活一点点崩塌，往事一点点揭开。梦想，爱情，友情都离陈末远去。一个失去所有的人，已经弄丢自己的路，直到听到来自全世界的一段语音[4]  。",
        "crews": [{
          "realName": "张一白",
          "roleName": "导演",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/28970/cov-20170319101529-1232584341.jpg/300"
          },{
          "realName": "邓超",
          "roleName": "陈末",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/24080/cut-20160902140417-120687479.jpg/300"
          },{
          "realName": "白百合",
          "roleName": "荔枝",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/23425/cut-20160902140620-433841570.jpg/300"
          },{
            "realName": "杨洋",
            "roleName": "茅十八",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/16680/cut-20160902140655-1019677765.jpg/300"
          },{
            "realName": "张天爱",
            "roleName": "幺鸡",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/27315/cut-20160902140725-813406260.jpg/300"
          },{
            "realName": "岳云鹏",
            "roleName": "猪头",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/25132/cut-20160902140805-1310357178.jpg/300"
          },{
            "realName": "杜鹃",
            "roleName": "小容",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/16559/cut-20160902140835-1994129423.jpg/300"
          },{
            "realName": "柳岩",
            "roleName": "燕子",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/25056/cut-20160902140904-110357428.jpg/300"
          }],
        "videoStills": [{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23765/20160830163928-1150431150.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23765/20160830163928-1150431150.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "type": 1
          }],
        "posterUrl": "https://static.wepiao.com/movie/2016/8/30_0/201608301238141346.jpg",
        "userFilmInterestCount": 10,
        "saleStatus": 2,
        "is2D": true,
        "is3D": false,
        "isImax": true,
        "isDmax": false
      },{
        "name": "七月与安生",
        "filmShortCode": 0,
        "releaseTime": "2016-01-23",
        "director": "someone",
        "starring": "周冬雨 马思纯",
        "phrase": "穿越黑科技，法鲨炫腹肌",
        "keyword": "剧情/爱情",
        "duration": 100,
        "language": "中国",
        "summary": "陈末（邓超饰）被称为全城最贱，每天和王牌DJ小容（杜鹃饰）针锋相对，谁也不知道他们的仇恨从何而来。陈末的两个兄弟，分别是全城最傻的猪头（岳云鹏饰），全城最纯的茅十八（杨洋饰），三人每天横冲直撞，以为可以自在生活，结果都面临人生最大的转折点。陈末相遇了最神秘的幺鸡（张天爱饰），猪头打造了最惨烈的婚礼，茅十八经历了最悲伤的别离，这群人的生活一点点崩塌，往事一点点揭开。梦想，爱情，友情都离陈末远去。一个失去所有的人，已经弄丢自己的路，直到听到来自全世界的一段语音[4]  。",
        "crews": [{
          "realName": "张一白",
          "roleName": "导演",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/28970/cov-20170319101529-1232584341.jpg/300"
          },{
          "realName": "邓超",
          "roleName": "陈末",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/24080/cut-20160902140417-120687479.jpg/300"
          },{
          "realName": "白百合",
          "roleName": "荔枝",
          "duty": 2,
          "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/23425/cut-20160902140620-433841570.jpg/300"
          },{
            "realName": "杨洋",
            "roleName": "茅十八",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/16680/cut-20160902140655-1019677765.jpg/300"
          },{
            "realName": "张天爱",
            "roleName": "幺鸡",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/27315/cut-20160902140725-813406260.jpg/300"
          },{
            "realName": "岳云鹏",
            "roleName": "猪头",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/25132/cut-20160902140805-1310357178.jpg/300"
          },{
            "realName": "杜鹃",
            "roleName": "小容",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/16559/cut-20160902140835-1994129423.jpg/300"
          },{
            "realName": "柳岩",
            "roleName": "燕子",
            "duty": 2,
            "imageUrl": "http://pic.baike.soso.com/ugc/baikepic2/25056/cut-20160902140904-110357428.jpg/300"
          }],
        "videoStills": [{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/20887/20160701110154-685209585.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/20887/20160701110154-685209585.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163137-314906055.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163138-86994765.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163139-959230960.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163127-399518163.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/26117/20160901162927-951017985.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/16430/20160901162938-235968216.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/23785/20160901162951-613913579.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/32051/20160504092223-1549936775.jpg/0",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163135-697399980.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163133-1331815917.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163134-554670575.jpg/800",
          "type": 1
          },{
          "thumbnailUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "resourceUrl": "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20160901163136-585591616.jpg/800",
          "type": 1
          }],
        "posterUrl": "https://static.wepiao.com/movie/2016/9/5_0/201609050956396819.jpg",
        "userFilmInterestCount": 10,
        "saleStatus": 1,
        "is2D": true,
        "is3D": false,
        "isImax": true,
        "isDmax": false
      }],
      "coming":[
        {
          "name": "追凶者也",
          "filmShortCode": 0,
          "releaseTime": "2016-01-23",
          "director": "someone",
          "starring": "迈克尔·法斯宾德,玛丽昂·歌迪亚",
          "phrase": "穿越黑科技，法鲨炫腹肌",
          "posterUrl": "https://static.wepiao.com/movie/2016/8/24_0/201608241044045203.jpg",
          "userFilmInterestCount": 10,
          "saleStatus": 2,
          "is2D": true,
          "is3D": false,
          "isImax": true,
          "isDmax": false
        },
        {
          "name": "大话西游",
          "filmShortCode": 0,
          "releaseTime": "2016-01-23",
          "director": "someone",
          "starring": "迈克尔·法斯宾德,玛丽昂·歌迪亚",
          "phrase": "穿越黑科技，法鲨炫腹肌",
          "posterUrl": "https://static.wepiao.com/movie/2016/9/2_0/201609021008045581.jpg",
          "userFilmInterestCount": 10,
          "saleStatus": 2,
          "is2D": true,
          "is3D": false,
          "isImax": true,
          "isDmax": false
        }
      ]
    }
    return  (<View style={ styles.wrapper }>
                <Text>这个是USERpage</Text>
                <FilmListItem filmList={ filmList }/>
              </View>)
  }

}

const styles = StyleSheet.create ({
  wrapper: {
    // width: 750,
    // height: 750,
    // flex: 1
  }
})
export default connect( mapStateToProps, mapDispatchToProps )( FilmList )