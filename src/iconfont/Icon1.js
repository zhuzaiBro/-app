/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M15.097 10.86V18h-1.09v-5.83c-.426.406-.973.706-1.64.9v-1.08c.307-.08.643-.22 1.01-.42.373-.227.673-.464.9-.71h.82Z"/></svg>
`

let Icon1 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Icon1.defaultProps = {
  size: 18,
};

Icon1 = React.memo ? React.memo(Icon1) : Icon1;

export default Icon1;
