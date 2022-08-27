/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 6"><path fill="#FF5858" d="M5.137 3.862 3.637 3l1.5-.862c.15-.075.225-.3.112-.45-.075-.15-.3-.226-.45-.113l-1.5.863V.712C3.337.525 3.187.375 3 .375a.336.336 0 0 0-.337.338v1.725l-1.5-.863c-.113-.113-.338-.037-.413.113-.075.15-.037.375.113.45l1.5.862-1.5.862c-.15.075-.225.3-.113.45.075.113.188.15.3.15.038 0 .113 0 .15-.037l1.5-.862v1.724c-.037.188.113.338.3.338.188 0 .338-.15.338-.338V3.563l1.5.862c.037.038.112.038.15.038.112 0 .225-.075.3-.15.037-.15 0-.375-.15-.45Z" data-follow-fill="#FF5858"/></svg>
`

let IconXinghao = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconXinghao.defaultProps = {
  size: 18,
};

IconXinghao = React.memo ? React.memo(IconXinghao) : IconXinghao;

export default IconXinghao;
