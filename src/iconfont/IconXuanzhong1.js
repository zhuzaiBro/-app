/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle fill-opacity=".9" fill="#000" r="8" cy="12" cx="12"/><path fill="#A6E385" d="M10.837 13.85 16.2 8.489l.826.825-6.188 6.188-3.712-3.713.825-.825 2.887 2.888Z"/></svg>
`

let IconXuanzhong1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconXuanzhong1.defaultProps = {
  size: 18,
};

IconXuanzhong1 = React.memo ? React.memo(IconXuanzhong1) : IconXuanzhong1;

export default IconXuanzhong1;
