/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 343 88"><path fill-opacity=".8" fill="#000" d="M80.223 0H0v88h80.223a9.003 9.003 0 0 1 17.554 0H343v-5.341a6.003 6.003 0 0 1 0-11.318V60.66a6.003 6.003 0 0 1 0-11.318V38.66a6.003 6.003 0 0 1 0-11.318V16.66a6.003 6.003 0 0 1 0-11.318V0H97.777a9.003 9.003 0 0 1-17.554 0Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/><path fill-opacity=".08" fill="url(#a)" d="M0 0h342v88H0z"/><path stroke-dasharray="2 2" stroke-opacity=".15" stroke="#fff" d="M90 16v56" data-follow-stroke="#fff"/><defs><pattern height="2.5" width=".643" patternContentUnits="objectBoundingBox" id="a"/></defs></svg>
`

let IconYouhuijuanBeijingtu = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconYouhuijuanBeijingtu.defaultProps = {
  size: 18,
};

IconYouhuijuanBeijingtu = React.memo ? React.memo(IconYouhuijuanBeijingtu) : IconYouhuijuanBeijingtu;

export default IconYouhuijuanBeijingtu;
