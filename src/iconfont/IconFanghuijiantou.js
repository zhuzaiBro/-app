/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill-opacity=".45" fill="#000" d="M5.646 3.646a.5.5 0 0 0 0 .708L9.293 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconFanghuijiantou = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconFanghuijiantou.defaultProps = {
  size: 18,
};

IconFanghuijiantou = React.memo ? React.memo(IconFanghuijiantou) : IconFanghuijiantou;

export default IconFanghuijiantou;
