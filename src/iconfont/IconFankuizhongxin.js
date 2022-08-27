/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".01" fill="#fff" d="M24 0H0v24h24V0Z"/><path fill="#333" d="M12 1.25a10.719 10.719 0 0 0-7.601 3.149A10.719 10.719 0 0 0 1.25 12c0 2.968 1.204 5.657 3.149 7.601l.53-.53-.53.53A10.719 10.719 0 0 0 12 22.75c2.968 0 5.657-1.204 7.601-3.149A10.719 10.719 0 0 0 22.75 12c0-2.968-1.204-5.657-3.149-7.601l-.53.53.53-.53A10.719 10.719 0 0 0 12 1.25ZM5.46 5.46A9.219 9.219 0 0 1 12 2.75a9.219 9.219 0 0 1 6.54 2.71A9.219 9.219 0 0 1 21.25 12a9.218 9.218 0 0 1-2.71 6.54A9.218 9.218 0 0 1 12 21.25a9.219 9.219 0 0 1-6.54-2.71A9.219 9.219 0 0 1 2.75 12a9.219 9.219 0 0 1 2.71-6.54Zm7.79 1.29a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM10.5 10a.75.75 0 0 1 .75-.75h1A.75.75 0 0 1 13 10v6.25h1a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h1v-5.5h-.25a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconFankuizhongxin = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconFankuizhongxin.defaultProps = {
  size: 18,
};

IconFankuizhongxin = React.memo ? React.memo(IconFankuizhongxin) : IconFankuizhongxin;

export default IconFankuizhongxin;
