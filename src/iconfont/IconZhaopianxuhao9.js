/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M13.922 10.72c.873 0 1.537.317 1.99.95.447.62.67 1.473.67 2.56 0 1.153-.237 2.093-.71 2.82-.493.727-1.147 1.09-1.96 1.09-1.387 0-2.17-.647-2.35-1.94h1.06c.14.693.573 1.04 1.3 1.04.48 0 .873-.243 1.18-.73.287-.473.43-1.05.43-1.73l-.01-.13h-.04c-.193.3-.447.533-.76.7-.307.147-.637.22-.99.22-.707 0-1.27-.227-1.69-.68-.407-.433-.61-1.003-.61-1.71 0-.72.237-1.307.71-1.76.473-.467 1.067-.7 1.78-.7Zm.04.9c-.453 0-.807.147-1.06.44-.267.287-.4.66-.4 1.12 0 .46.133.823.4 1.09.253.28.603.42 1.05.42.447 0 .8-.14 1.06-.42.26-.28.39-.653.39-1.12 0-.46-.133-.83-.4-1.11-.267-.28-.613-.42-1.04-.42Z"/></svg>
`

let IconZhaopianxuhao9 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconZhaopianxuhao9.defaultProps = {
  size: 18,
};

IconZhaopianxuhao9 = React.memo ? React.memo(IconZhaopianxuhao9) : IconZhaopianxuhao9;

export default IconZhaopianxuhao9;
