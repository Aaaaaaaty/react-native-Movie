### react-native-movie

出现 self 问题
替换npm包 isomorphic-fetch/fetch-npm-browserify.js下代码
var globalObject = typeof self === "undefined" ? global : self;
module.exports = globalObject.fetch.bind(globalObject);
