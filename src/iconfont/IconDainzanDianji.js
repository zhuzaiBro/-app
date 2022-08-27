/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><g clip-path="url(#a)"><path fill-opacity=".7" fill="#000" d="M11.616 6.736V3.347c0-1.403-1.09-2.541-2.436-2.541L5.934 8.43v9.319h9.432c.81.01 1.502-.605 1.623-1.44l1.12-7.625a1.746 1.746 0 0 0-.38-1.366 1.595 1.595 0 0 0-1.243-.583h-4.87Z"/><path fill="#A6E284" d="M5.934 8.423H3.766c-.95-.017-1.764.797-1.891 1.772v5.876c.127.975.94 1.696 1.891 1.679h2.168V8.423ZM7.773 4.054 9.207.546a.158.158 0 0 1 .285-.022c.257.444.726 1.324.726 1.815 0 .573-.693 1.928-.907 2.332a.135.135 0 0 1-.18.057l-1.358-.674Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>
`

let IconDainzanDianji = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconDainzanDianji.defaultProps = {
  size: 18,
};

IconDainzanDianji = React.memo ? React.memo(IconDainzanDianji) : IconDainzanDianji;

export default IconDainzanDianji;
