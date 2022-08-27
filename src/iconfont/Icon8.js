/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><circle fill="#ADEE89" r="10" cy="14" cx="14"/><path fill-opacity=".9" fill="#000" d="M14.004 10.72c.76 0 1.363.2 1.81.6.4.36.6.807.6 1.34 0 .367-.08.677-.24.93-.18.267-.45.47-.81.61v.03c.346.08.64.28.88.6.28.34.42.734.42 1.18 0 .627-.23 1.14-.69 1.54-.474.394-1.13.59-1.97.59-.847 0-1.504-.196-1.97-.59-.46-.4-.69-.913-.69-1.54 0-.446.14-.84.42-1.18.24-.32.533-.52.88-.6v-.03c-.36-.14-.63-.343-.81-.61-.16-.253-.24-.563-.24-.93 0-.533.2-.98.6-1.34.44-.4 1.043-.6 1.81-.6Zm0 .87c-.447 0-.797.117-1.05.35a.97.97 0 0 0-.34.76c0 .347.093.617.28.81.233.24.603.36 1.11.36.5 0 .87-.12 1.11-.36.186-.206.28-.476.28-.81a.99.99 0 0 0-.34-.76c-.254-.233-.604-.35-1.05-.35Zm0 3.09c-.534 0-.927.127-1.18.38-.267.24-.4.557-.4.95 0 .374.136.674.41.9.273.234.663.35 1.17.35.5 0 .896-.116 1.19-.35.26-.233.39-.533.39-.9 0-.4-.13-.713-.39-.94-.28-.26-.677-.39-1.19-.39Z"/></svg>
`

let Icon8 = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Icon8.defaultProps = {
  size: 18,
};

Icon8 = React.memo ? React.memo(Icon8) : Icon8;

export default Icon8;