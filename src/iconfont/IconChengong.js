/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 48"><path fill="#A6E284" d="M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20Zm-1.994-12 14.14-14.142-2.828-2.828-11.312 11.314-5.658-5.658-2.828 2.828L22.006 32Z" data-follow-fill="#A6E284"/></svg>
`

let IconChengong = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconChengong.defaultProps = {
  size: 18,
};

IconChengong = React.memo ? React.memo(IconChengong) : IconChengong;

export default IconChengong;
