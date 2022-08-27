/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 33"><path fill-opacity=".1" fill="#000" d="M17.437 2.071c1.365-.077 2.728-.07 4.092-.07h6.916c1.391 0 2.754-.007 4.118.07 1.24.07 2.448.219 3.65.55 2.531.7 4.742 2.158 6.34 4.226A11.697 11.697 0 0 1 45 13.999c0 2.586-.86 5.1-2.448 7.155-1.597 2.067-3.808 3.526-6.339 4.224-1.202.333-2.41.48-3.65.55-1.364.078-2.727.071-4.092.071L21.555 26c-1.39 0-2.753.006-4.118-.071-1.24-.07-2.447-.218-3.65-.55-2.53-.699-4.74-2.158-6.338-4.225A11.695 11.695 0 0 1 5 14c0-2.583.86-5.099 2.449-7.153 1.597-2.068 3.808-3.527 6.338-4.225 1.203-.332 2.41-.481 3.65-.55Z" clip-rule="evenodd" fill-rule="evenodd"/><g filter="url(#a)"><path fill="#fff" d="M17 24c5.523 0 10-4.477 10-10S22.523 4 17 4 7 8.477 7 14s4.477 10 10 10Z" clip-rule="evenodd" fill-rule="evenodd"/></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="32.387" width="32.387" y=".129" x=".806" id="a"><feFlood result="BackgroundImageFix" flood-opacity="0"/><feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"/><feOffset dy="2.323"/><feGaussianBlur stdDeviation=".387"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend result="effect1_dropShadow_682_11499" in2="BackgroundImageFix"/><feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"/><feOffset dy="2.323"/><feGaussianBlur stdDeviation="3.097"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend result="effect2_dropShadow_682_11499" in2="effect1_dropShadow_682_11499"/><feBlend result="shape" in2="effect2_dropShadow_682_11499" in="SourceGraphic"/></filter></defs></svg>
`

let IconKaiguangWeixuanzhong = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconKaiguangWeixuanzhong.defaultProps = {
  size: 18,
};

IconKaiguangWeixuanzhong = React.memo ? React.memo(IconKaiguangWeixuanzhong) : IconKaiguangWeixuanzhong;

export default IconKaiguangWeixuanzhong;
