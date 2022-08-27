/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#A6E385" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/><path fill="#1A1A1A" d="M10.837 13.85 16.2 8.489l.826.825-6.188 6.188-3.712-3.713.825-.825 2.887 2.888Z"/></svg>
`

let IconYouhuiquanXuanzhong = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconYouhuiquanXuanzhong.defaultProps = {
  size: 18,
};

IconYouhuiquanXuanzhong = React.memo ? React.memo(IconYouhuiquanXuanzhong) : IconYouhuiquanXuanzhong;

export default IconYouhuiquanXuanzhong;
