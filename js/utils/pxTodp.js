'use strict';

import { Dimensions } from 'react-native';

// device width/height
//const deviceWidthDp = Dimensions.get('window').width;
const deviceWidthDp = Dimensions.get('window').width;
// design width/height
const uiWidthPx = 750;

export default function pxTodp(uiElementPx) {
    //console.log(deviceWidthDp);
    //console.log(deviceHeightDp);
    return uiElementPx = deviceWidthDp * uiElementPx / uiWidthPx

}
