/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><rect fill="#A6E284" transform="matrix(-1 0 0 1 16 0)" rx="4" height="16" width="16"/><rect fill="url(#a)" transform="matrix(-1 0 0 1 16 0)" rx="4" height="16" width="16"/><path fill-opacity=".9" fill="#000" d="m9.682 8-3.011 3.012a.466.466 0 1 0 .658.659L11 8 7.33 4.33a.466.466 0 1 0-.66.658L9.683 8Z"/><defs><linearGradient gradientUnits="userSpaceOnUse" y2="2.179" x2="15.231" y1="2.14" x1=".466" id="a"><stop stop-color="#BDFFDF"/><stop stop-color="#CFFFDF" offset=".47"/><stop stop-color="#F1FFD3" offset=".973"/></linearGradient></defs></svg>
`

let IconFanhuianniu1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconFanhuianniu1.defaultProps = {
  size: 18,
};

IconFanhuianniu1 = React.memo ? React.memo(IconFanhuianniu1) : IconFanhuianniu1;

export default IconFanhuianniu1;
