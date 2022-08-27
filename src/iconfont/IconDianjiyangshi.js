/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 24"><path fill="url(#a)" transform="rotate(-12.62 .016 11.592)" d="M.016 11.592h32v8h-32z"/><defs><linearGradient gradientUnits="userSpaceOnUse" y2="17.053" x2="30.937" y1="17.17" x1="1.135" id="a"><stop stop-color="#A6E284"/><stop stop-opacity="0" stop-color="#A6E284" offset="1"/></linearGradient></defs></svg>
`

let IconDianjiyangshi = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDianjiyangshi.defaultProps = {
  size: 18,
};

IconDianjiyangshi = React.memo ? React.memo(IconDianjiyangshi) : IconDianjiyangshi;

export default IconDianjiyangshi;
