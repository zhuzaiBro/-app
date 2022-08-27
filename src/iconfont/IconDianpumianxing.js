/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path fill-opacity=".7" fill="#000" d="M12.832 11.666v1.167H1.165v-1.167h.584V7.724A2.623 2.623 0 0 1 .95 4.198l1.582-2.74a.583.583 0 0 1 .505-.292h7.921a.583.583 0 0 1 .506.292l1.576 2.73a2.623 2.623 0 0 1-.792 3.536v3.942h.583ZM3.376 2.333 1.956 4.79a1.458 1.458 0 0 0 2.606 1.293.583.583 0 0 1 1.082 0 1.458 1.458 0 0 0 2.71 0 .583.583 0 0 1 1.082 0 1.458 1.458 0 1 0 2.6-1.302L10.62 2.333H3.376Z" data-follow-fill="#000"/></svg>
`

let IconDianpumianxing = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDianpumianxing.defaultProps = {
  size: 18,
};

IconDianpumianxing = React.memo ? React.memo(IconDianpumianxing) : IconDianpumianxing;

export default IconDianpumianxing;
