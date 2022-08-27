/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44"><rect fill="url(#a)" rx="22" height="44" width="44"/><rect fill="url(#b)" rx="22" height="44" width="44"/><path fill-opacity=".9" fill="#000" d="M21 21v-5a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-5a1 1 0 1 1 0-2h5Z" data-follow-fill="#000"/><defs><linearGradient gradientUnits="userSpaceOnUse" y2="7.5" x2="3" y1="39.5" x1="35.5" id="a"><stop/><stop stop-opacity="0" offset="1"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="22.65" x2="41.371" y1="22" x1="-2.541" id="b"><stop stop-color="#F9FD80"/><stop stop-color="#73E5BB" offset="1"/></linearGradient></defs></svg>
`

let IconTianji1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconTianji1.defaultProps = {
  size: 18,
};

IconTianji1 = React.memo ? React.memo(IconTianji1) : IconTianji1;

export default IconTianji1;
