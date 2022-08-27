/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><rect fill="#fff" rx="20" height="40" width="40"/><rect fill-opacity=".9" fill="#000" rx="20" height="40" width="40"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M29 12v8M11 20v8" data-follow-stroke="#fff"/><path fill="#fff" d="M12.985 13.23A9.723 9.723 0 0 1 20 10.25c5.385 0 9.75 4.365 9.75 9.75a.75.75 0 0 1-1.5 0 8.25 8.25 0 0 0-14.186-5.73.75.75 0 1 1-1.08-1.04ZM11 19.25a.75.75 0 0 1 .75.75 8.25 8.25 0 0 0 13.98 5.936.75.75 0 0 1 1.04 1.08A9.72 9.72 0 0 1 20 29.75c-5.385 0-9.75-4.365-9.75-9.75a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconXuanzhuang = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconXuanzhuang.defaultProps = {
  size: 18,
};

IconXuanzhuang = React.memo ? React.memo(IconXuanzhuang) : IconXuanzhuang;

export default IconXuanzhuang;
