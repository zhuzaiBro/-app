/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 123 104"><path fill-opacity=".9" fill="#000" d="M30.066 36.085c8.113.859 7.404-6.366 4.223-9.344-3.363-4.409-7.683-11.924 7.103-11.924 24.484 0 32.254 5.141 43.661 18.799 11.407 13.657 18.348 21.153 21.609 33.649 3.706 14.201 14.752 21.663 7.697 30.443-9.054 11.266-25.86 1.792-39.175 1.792-15.71 0-31.771-7.453-56.583-22.998-24.812-15.545-10.184-23.657-4.867-25.14 5.318-1.482-9.564-5.09-9.564-15.277s17.06-.935 25.896 0Z"/><path stroke-width=".4" stroke-opacity=".5" stroke="#fff" d="M23.94 34.848c6.57-2.347 2.136-20.1-.585-22.65C20.48 8.423 13.758 3.75 34.69 4.29c20.932.54 29.47 22.549 43.206 32.237 13.735 9.688 20.106 19.441 23.43 29.91 3.345 10.535 10.001 23.628 2.991 30.242-7.01 6.613-19.315-8.379-32.07-4.155C59.49 96.747 39.128 84.731 17.91 71.42-3.31 58.11 7.61 57.167 19.315 53.9c11.704-3.267-10.106-6.21-11.803-16.014-1.697-9.805 8.214-.104 16.427-3.038Z"/><path stroke-width=".4" stroke-opacity=".5" stroke="#fff" d="M40.467 31.525c4.552-1.612-1.302-3.374-2.368-9.007-.937-4.95 1.836-7.252 11.005-6.173C63.509 18.04 60.235 28.538 69.75 35.196c9.515 6.658 25.913 11.912 21.532 18.142-4.38 6.23 5.273 8.716 4.444 15.708-.782 6.605 10.139 10.3.002 17.446-7.602 5.358-61.955-12.57-76.655-21.718-14.7-9.148 14.508-6.384 17.467-10.787 3.846-5.72-22.901-9.138-24.077-15.876-.65-3.727 6.244 1.055 13.502.563 5.86-.398 11.96-6.248 14.502-7.149Z"/><path stroke-width=".4" stroke-opacity=".3" stroke="#fff" d="M47.556 38.388c3.002-1.07-2.496-5.973-2.487-7.751.009-1.778-2.631-10.193 2.486-10.193 9.563 0 12.566 13.527 18.84 17.944 6.273 4.416 14.155 9.064 11.267 13.197-2.889 4.132-15.271-1.652-18.473 1.363-3.202 3.015-.064 8.857-2.002 14.588-1.167 3.455-1.32 6.151-14.43 2.002-24.047-7.61 3.317-6.999-1.187-17.521-1.682-3.928-15.292-8.387-16.067-12.856-.775-4.47 18.302.564 22.053-.773Z"/><path stroke-width=".364" stroke-opacity=".25" stroke="#fff" fill-opacity=".9" fill="#000" d="M48.437 39.758c1.337-.483.015-3.053.018-3.855.004-.803-2.764-4.28 1.496-4.17 4.26.111 5.597 6.605 8.392 8.598 2.795 1.993 6.307 4.09 5.02 5.956-1.287 1.865-6.804-.745-8.23.616-1.427 1.36-.03 3.997-.893 6.584-.52 1.56-.588 2.776-6.429.904-10.714-3.434 1.478-3.16-.529-7.908-.748-1.773-6.812-3.785-7.157-5.802-.346-2.017 6.64-.32 8.312-.923Z"/><path fill="#fff" d="M70.298 96.885V87.7L39.77 70.793v10.14l29.9 15.952h.63Z"/><path fill="url(#a)" d="m39.594 70.952.326-43.794a.399.399 0 0 1 .604-.339L55 35.501l.547 30.266-15.953 5.185Z"/><path fill="#000" d="m40.32 27.16-.323 43.24 15.146-4.922-.537-29.75L40.32 27.16Zm-.798-.006a.798.798 0 0 1 1.208-.678l14.665 8.796.556 30.782-16.76 5.447.331-44.347Z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="#fff" d="M70.7 44.501v43.6L39.59 70.552l12.763-6.56-13.56-7.797 14.358-7.159-13.56-7.997 12.762-7.705L70.7 44.501Z"/><path fill="#000" d="M52.355 33.041 70.951 44.36v44.168L39.065 70.541l12.767-6.562-13.566-7.8 14.363-7.162-13.525-7.976 13.251-8Zm.787 16.279-13.819 6.89 31.128 17.898v-14.58L53.142 49.32Zm17.309 9.627V44.64L52.354 33.626l-12.274 7.41 30.37 17.91Zm0 15.738-18.103-10.41-12.229 6.287 30.332 17.11V74.685Z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="#fff" d="M71 44.5 39.594 26.681l27.742-13.079a.4.4 0 0 1 .349.005l30.138 15.068L71 44.5Z"/><path fill="#000" d="M67.23 13.376a.649.649 0 0 1 .566.007l30.549 15.274L71.002 44.79 39.051 26.661 67.23 13.376Zm.343.454a.149.149 0 0 0-.13-.001L40.136 26.702l30.861 17.51L97.3 28.693 67.573 13.83Z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="url(#b)" d="m97.458 28.894-26.505 15.59-.644 52.06a.399.399 0 0 0 .61.344l25.915-16.15a.399.399 0 0 0 .188-.33l1.037-51.163a.399.399 0 0 0-.601-.351Z"/><path fill="#000" d="M97.809 29.24a.149.149 0 0 0-.224-.13L71.2 44.63l-.642 51.918a.149.149 0 0 0 .227.128l25.916-16.15a.149.149 0 0 0 .07-.123l1.037-51.162Zm-.478-.561a.649.649 0 0 1 .978.572l-1.037 51.162a.649.649 0 0 1-.306.538L71.051 97.1a.649.649 0 0 1-.992-.56l.646-52.2L97.33 28.678Z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="#000" d="M39.344 26.831c0-.502.546-.814.978-.558l30.631 18.064-.395 52.281a.649.649 0 0 1-.953.568L39.344 81.073V26.832Zm.724-.128a.149.149 0 0 0-.224.128v53.942L69.84 96.745a.149.149 0 0 0 .218-.13l.393-51.994-30.383-17.918Z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="#fff" d="m19.508 14.025 20.299 12.358c.12.073.192.204.191.344l-.409 53.995-20.491-12.675.41-54.022Z"/><path fill="#000" d="m19.263 13.584 20.675 12.587c.195.119.313.331.311.56l-.412 54.439-20.99-12.983.416-54.603Zm.493.886-.406 53.44 19.994 12.367.405-53.55a.149.149 0 0 0-.071-.129L19.756 14.47Z" clip-rule="evenodd" fill-rule="evenodd"/><path stroke-linecap="round" stroke="#A6E284" d="M8.409 22.252C8.914 22.028 14.157 9.432 7 9.945c-7.156.513-.67 11.172 5.141 7.624 5.81-3.547 5.658-12.075 4.94-14.783"/><defs><linearGradient gradientUnits="userSpaceOnUse" y2="70.953" x2="47.57" y1="26.814" x1="47.57" id="a"><stop stop-color="#4F4F4F"/><stop stop-color="silver" offset="1"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="35.291" x2="110.656" y1="101.882" x1="67.253" id="b"><stop stop-color="#717071" offset=".237"/><stop stop-color="#fff" offset="1"/></linearGradient></defs></svg>
`

let IconQueshengye = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconQueshengye.defaultProps = {
  size: 18,
};

IconQueshengye = React.memo ? React.memo(IconQueshengye) : IconQueshengye;

export default IconQueshengye;