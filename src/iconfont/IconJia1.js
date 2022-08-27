/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill-opacity=".01" fill="#fff" d="M20 0H0v20h20V0Z"/><path fill="#A6E284" d="M10.005 18.333a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667Z"/><path fill-opacity=".9" fill="#000" d="M10.625 6.668a.625.625 0 1 0-1.25 0v2.707h-2.71a.625.625 0 1 0 0 1.25h2.71v2.71a.625.625 0 1 0 1.25 0v-2.71h2.706a.625.625 0 1 0 0-1.25h-2.706V6.668Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconJia1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconJia1.defaultProps = {
  size: 18,
};

IconJia1 = React.memo ? React.memo(IconJia1) : IconJia1;

export default IconJia1;
