/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M7.533 6.47a.75.75 0 0 0-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.06 1.06l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.06-1.06L13.063 12l4.47-4.47a.75.75 0 0 0-1.06-1.06l-4.47 4.47-4.47-4.47Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#fff"/></svg>
`

let IconGuanbiBaise = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconGuanbiBaise.defaultProps = {
  size: 18,
};

IconGuanbiBaise = React.memo ? React.memo(IconGuanbiBaise) : IconGuanbiBaise;

export default IconGuanbiBaise;
