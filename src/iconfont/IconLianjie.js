/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><path fill-opacity=".9" fill="#000" d="m15.236 9.461 1.65 1.651a8.167 8.167 0 0 1 0 11.55l-.413.412a8.167 8.167 0 0 1-11.55-11.55l1.651 1.65a5.833 5.833 0 1 0 8.25 8.25l.413-.413a5.834 5.834 0 0 0 0-8.248l-1.651-1.65 1.65-1.65V9.46Zm7.837 7.013-1.65-1.65a5.835 5.835 0 0 0-1.88-9.534 5.833 5.833 0 0 0-6.369 1.285l-.413.413a5.833 5.833 0 0 0 0 8.248l1.65 1.651-1.65 1.65-1.65-1.65a8.167 8.167 0 0 1 0-11.55l.413-.412a8.167 8.167 0 0 1 11.55 11.55Z" data-follow-fill="#000"/></svg>
`

let IconLianjie = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconLianjie.defaultProps = {
  size: 18,
};

IconLianjie = React.memo ? React.memo(IconLianjie) : IconLianjie;

export default IconLianjie;
