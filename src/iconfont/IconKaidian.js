/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-opacity=".01" fill="#fff" d="M24 0H0v24h24V0Z"/><path fill="#333" d="M3.25 2A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .75.75v3.25H22a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.364.643l-.7.42a4.25 4.25 0 0 1-.936.417V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V11.48a4.251 4.251 0 0 1-.937-.417l-.699-.42A.75.75 0 0 1 1.25 10V6A.75.75 0 0 1 2 5.25h1.25V2Zm7 19.25h3.5v-4.5h-3.5v4.5Zm5 0V16a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v5.25h-4v-9.589a4.246 4.246 0 0 0 1.937-.598L7 10.875l.313.188a4.25 4.25 0 0 0 4.374 0l.313-.188.313.188a4.25 4.25 0 0 0 4.374 0l.313-.188.313.188c.6.359 1.264.558 1.937.598v9.589h-4Zm4-18.5v2.5H4.75v-2.5h14.5ZM2.75 9.575V6.75h18.5v2.825l-.335.201.38.635-.38-.635a2.75 2.75 0 0 1-2.83 0l-.386.643.386-.643-.7-.42a.75.75 0 0 0-.77 0l-.7.42.38.635-.38-.635a2.75 2.75 0 0 1-2.83 0l-.38.635.38-.635-.7-.42a.75.75 0 0 0-.77 0l-.7.42.38.635-.38-.635a2.75 2.75 0 0 1-2.83 0l-.7-.42a.75.75 0 0 0-.77 0l-.7.42a2.75 2.75 0 0 1-2.83 0l-.335-.2Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
`

let IconKaidian = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconKaidian.defaultProps = {
  size: 18,
};

IconKaidian = React.memo ? React.memo(IconKaidian) : IconKaidian;

export default IconKaidian;
