/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M14.072 10.72c.72 0 1.297.173 1.73.52.427.353.64.833.64 1.44 0 .787-.393 1.31-1.18 1.57.413.127.733.323.96.59.24.267.36.613.36 1.04 0 .66-.227 1.2-.68 1.62-.487.427-1.11.64-1.87.64-.727 0-1.313-.187-1.76-.56-.5-.42-.78-1.03-.84-1.83h1.1c.02.487.177.857.47 1.11.26.24.6.36 1.02.36.453 0 .823-.133 1.11-.4.247-.247.37-.543.37-.89 0-.42-.13-.73-.39-.93-.24-.2-.597-.3-1.07-.3h-.52v-.82h.51c.433 0 .763-.097.99-.29.227-.193.34-.47.34-.83 0-.353-.103-.627-.31-.82-.213-.193-.537-.29-.97-.29-.433 0-.77.11-1.01.33-.247.227-.39.557-.43.99h-1.07c.06-.707.323-1.26.79-1.66.433-.393 1.003-.59 1.71-.59Z"/></svg>
`

let IconZhaopianxuhao3 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconZhaopianxuhao3.defaultProps = {
  size: 18,
};

IconZhaopianxuhao3 = React.memo ? React.memo(IconZhaopianxuhao3) : IconZhaopianxuhao3;

export default IconZhaopianxuhao3;
