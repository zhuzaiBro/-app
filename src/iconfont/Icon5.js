/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M11.95 10.86h4.3v.96h-3.42l-.21 2.06h.03c.22-.227.473-.39.76-.49.253-.107.546-.16.88-.16.673 0 1.22.22 1.64.66.426.446.64 1.05.64 1.81 0 .733-.274 1.336-.82 1.81-.507.42-1.117.63-1.83.63-.634 0-1.184-.177-1.65-.53-.507-.38-.787-.904-.84-1.57h1.07c.04.406.196.71.47.91.24.18.56.27.96.27a1.61 1.61 0 0 0 1.11-.41c.3-.28.45-.647.45-1.1 0-.5-.13-.89-.39-1.17-.26-.28-.627-.42-1.1-.42-.327 0-.604.056-.83.17-.254.113-.45.303-.59.57h-1.02l.39-4Z"/></svg>
`

let Icon5 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Icon5.defaultProps = {
  size: 18,
};

Icon5 = React.memo ? React.memo(Icon5) : Icon5;

export default Icon5;
