/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M14.112 10.72c.693 0 1.257.197 1.69.59.433.4.65.913.65 1.54 0 .607-.233 1.17-.7 1.69-.28.287-.773.67-1.48 1.15-.767.507-1.227.957-1.38 1.35h3.57V18h-4.92c0-.713.237-1.337.71-1.87.247-.293.783-.727 1.61-1.3.487-.347.827-.62 1.02-.82.327-.367.49-.757.49-1.17 0-.4-.11-.7-.33-.9-.22-.2-.543-.3-.97-.3-.453 0-.793.153-1.02.46-.233.293-.36.73-.38 1.31h-1.09c.013-.8.243-1.44.69-1.92.453-.513 1.067-.77 1.84-.77Z"/></svg>
`

let IconZhaopianxuhao2 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconZhaopianxuhao2.defaultProps = {
  size: 18,
};

IconZhaopianxuhao2 = React.memo ? React.memo(IconZhaopianxuhao2) : IconZhaopianxuhao2;

export default IconZhaopianxuhao2;
