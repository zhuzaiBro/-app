/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#333" d="M3.602 4.801h13.2v9.6h-13.2z"/><path fill-opacity=".9" fill="#fff" d="M2 10c0 4.419 3.581 8 8 8a8 8 0 1 0-8-8Zm8 10C4.476 20 0 15.523 0 10 0 4.479 4.477 0 10 0c5.522 0 10 4.478 10 10 0 5.523-4.478 10-10 10Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconWeixuangzhong = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconWeixuangzhong.defaultProps = {
  size: 18,
};

IconWeixuangzhong = React.memo ? React.memo(IconWeixuangzhong) : IconWeixuangzhong;

export default IconWeixuangzhong;
