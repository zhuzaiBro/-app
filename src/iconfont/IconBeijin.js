/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 375 88"><g clip-path="url(#a)"><g filter="url(#b)"><ellipse fill-opacity=".9" fill="#1D273C" transform="matrix(-1 0 0 1 85 -5)" ry="42" rx="164"/></g><g filter="url(#c)"><ellipse fill-opacity=".3" fill="#053E3D" ry="85.5" rx="132.5" cy="-23.5" cx="362.5"/></g></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="188" width="432" y="-99" x="-131" id="b"><feFlood result="BackgroundImageFix" flood-opacity="0"/><feBlend result="shape" in2="BackgroundImageFix" in="SourceGraphic"/><feGaussianBlur result="effect1_foregroundBlur_977_16954" stdDeviation="26"/></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="275" width="369" y="-161" x="178" id="c"><feFlood result="BackgroundImageFix" flood-opacity="0"/><feBlend result="shape" in2="BackgroundImageFix" in="SourceGraphic"/><feGaussianBlur result="effect1_foregroundBlur_977_16954" stdDeviation="26"/></filter><clipPath id="a"><path fill="#fff" d="M0 0h375v88H0z"/></clipPath></defs></svg>
`

let IconBeijin = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconBeijin.defaultProps = {
  size: 18,
};

IconBeijin = React.memo ? React.memo(IconBeijin) : IconBeijin;

export default IconBeijin;
