/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill-opacity=".45" fill="#000" d="M1 2.632A.63.63 0 0 1 1.628 2h16.744a.63.63 0 0 1 .628.632v12.631a.63.63 0 0 1-.628.632H9.73l-4.054 2.038a.625.625 0 0 1-.61-.027.633.633 0 0 1-.299-.538v-1.473h-3.14A.63.63 0 0 1 1 15.263V2.632Zm1.256.631v11.369h3.14a.63.63 0 0 1 .627.631v1.083l3.278-1.648a.624.624 0 0 1 .28-.066h8.163V3.263H2.256Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconPinglun = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconPinglun.defaultProps = {
  size: 18,
};

IconPinglun = React.memo ? React.memo(IconPinglun) : IconPinglun;

export default IconPinglun;
