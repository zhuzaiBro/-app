/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M13.92 10.72c.873 0 1.536.317 1.99.95.446.62.67 1.474.67 2.56 0 1.154-.237 2.094-.71 2.82-.494.727-1.147 1.09-1.96 1.09-1.387 0-2.17-.646-2.35-1.94h1.06c.14.694.573 1.04 1.3 1.04.48 0 .873-.243 1.18-.73.286-.473.43-1.05.43-1.73l-.01-.13h-.04c-.194.3-.447.534-.76.7-.307.147-.637.22-.99.22-.707 0-1.27-.226-1.69-.68-.407-.433-.61-1.003-.61-1.71 0-.72.236-1.306.71-1.76.473-.466 1.066-.7 1.78-.7Zm.04.9c-.454 0-.807.147-1.06.44-.267.287-.4.66-.4 1.12 0 .46.133.824.4 1.09.253.28.603.42 1.05.42.446 0 .8-.14 1.06-.42.26-.28.39-.653.39-1.12 0-.46-.134-.83-.4-1.11-.267-.28-.614-.42-1.04-.42Z"/></svg>
`

let Icon9 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Icon9.defaultProps = {
  size: 18,
};

Icon9 = React.memo ? React.memo(Icon9) : Icon9;

export default Icon9;
