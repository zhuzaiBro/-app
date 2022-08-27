/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill-opacity=".01" fill="#fff" d="M20 0H0v20h20V0Z"/><path fill-opacity=".45" fill="#000" d="M3.333 3.25a.083.083 0 0 0-.083.083v13.334c0 .046.037.083.083.083h13.334a.083.083 0 0 0 .083-.083v-5.834a.75.75 0 0 1 1.5 0v5.834c0 .874-.709 1.583-1.583 1.583H3.333a1.583 1.583 0 0 1-1.583-1.583V3.333c0-.874.709-1.583 1.583-1.583h5.834a.75.75 0 0 1 0 1.5H3.333Z" clip-rule="evenodd" fill-rule="evenodd"/><path fill-opacity=".45" fill="#000" d="M14.455 1.75c.199 0 .39.079.53.22l3.044 3.045a.75.75 0 0 1 0 1.06l-8.618 8.622a.75.75 0 0 1-.53.22H5.832a.75.75 0 0 1-.75-.75v-3.034a.75.75 0 0 1 .22-.53l8.622-8.633a.75.75 0 0 1 .53-.22Zm0 1.811-7.873 7.883v1.973H8.57l7.868-7.872-1.983-1.984Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconBianjidizhi = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconBianjidizhi.defaultProps = {
  size: 18,
};

IconBianjidizhi = React.memo ? React.memo(IconBianjidizhi) : IconBianjidizhi;

export default IconBianjidizhi;
