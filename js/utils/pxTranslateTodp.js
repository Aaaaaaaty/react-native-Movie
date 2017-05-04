'use strict';

import {
	PixelRatio
} from 'react-native'

const pixelRatio = PixelRatio.get()

export default function pxTranslateTodp(pxSize) {
	//console.log('pxTranslateTodp', pixelRatio)
	let dpSize
	return dpSize = pxSize / pixelRatio
}
