/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".7" fill="#000" d="M6.263 1.29a.75.75 0 0 1 .949.474l.5 1.5a.75.75 0 0 1-1.423.474l-.5-1.5a.75.75 0 0 1 .474-.948Zm5.738 3.96a5.25 5.25 0 0 0-5.25 5.25v6.25h10.5V10.5c0-2.9-2.351-5.25-5.25-5.25ZM5.25 10.5a6.75 6.75 0 0 1 13.5 0v7a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-7Zm-2 10.5a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75ZM2.237 5.79a.75.75 0 1 0-.474 1.423l1.5.5a.75.75 0 1 0 .474-1.423l-1.5-.5Zm.734-1.759a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#000"/></svg>
`

let IconJubao = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconJubao.defaultProps = {
  size: 18,
};

IconJubao = React.memo ? React.memo(IconJubao) : IconJubao;

export default IconJubao;
