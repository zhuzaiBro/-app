/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36"><g filter="url(#a)"><rect shape-rendering="crispEdges" fill="#1A1A1A" rx="8" height="28" width="28" x="4"/><path fill="#fff" d="M11.125 11.916a6.875 6.875 0 1 1 13.75 0c0 2.93-1.678 5.676-3.265 7.633a24.763 24.763 0 0 1-2.933 3.032 14.16 14.16 0 0 1-.208.175l-.056.047-.016.012-.004.004-.002.001-.391-.487-.39.488h-.001l-.002-.002-.004-.004-.016-.012-.056-.047-.208-.175a24.763 24.763 0 0 1-2.934-3.032c-1.586-1.957-3.264-4.703-3.264-7.633ZM18 22.333l-.39.488a.625.625 0 0 0 .78 0l-.39-.488Zm0-.82a23.508 23.508 0 0 0 2.64-2.75c1.538-1.898 2.985-4.36 2.985-6.847a5.625 5.625 0 0 0-11.25 0c0 2.487 1.447 4.949 2.986 6.846A23.508 23.508 0 0 0 18 21.512Z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="#fff" d="M14.875 11.916a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0ZM18 10.041a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Z" clip-rule="evenodd" fill-rule="evenodd"/></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="36" width="36" y="0" x="0" id="a"><feFlood result="BackgroundImageFix" flood-opacity="0"/><feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite operator="out" in2="hardAlpha"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend result="effect1_dropShadow_1130_21770" in2="BackgroundImageFix"/><feBlend result="shape" in2="effect1_dropShadow_1130_21770" in="SourceGraphic"/></filter></defs></svg>
`

let IconDingwei = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDingwei.defaultProps = {
  size: 18,
};

IconDingwei = React.memo ? React.memo(IconDingwei) : IconDingwei;

export default IconDingwei;
