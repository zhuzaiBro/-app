/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><rect fill-opacity=".7" fill="#000" rx="6" height="12" width="12"/><rect fill="#1A1A1A" rx="6" height="12" width="12"/><path fill="#D5FB81" d="M5.846 7.29 7.266 3h1.438L6.521 8.704H5.174L3 3h1.434l1.412 4.29Z"/></svg>
`

let Icon20220630青氪 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Icon20220630青氪.defaultProps = {
  size: 18,
};

Icon20220630青氪 = React.memo ? React.memo(Icon20220630青氪) : Icon20220630青氪;

export default Icon20220630青氪;
