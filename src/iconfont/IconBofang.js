/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path fill-opacity=".01" fill="#fff" d="M40 0H0v40h40V0Z"/><path fill-opacity=".45" fill="#000" d="M20.003 36.667c9.204 0 16.666-7.462 16.666-16.666 0-9.205-7.462-16.667-16.666-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.204 7.462 16.666 16.667 16.666Z"/><path stroke-linejoin="round" stroke-width="1.5" stroke="#fff" fill="#fff" d="M16.664 20v-5.773l5 2.886 5 2.887-5 2.887-5 2.887V20Z" data-follow-stroke="#fff"/></svg>
`

let IconBofang = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconBofang.defaultProps = {
  size: 18,
};

IconBofang = React.memo ? React.memo(IconBofang) : IconBofang;

export default IconBofang;
