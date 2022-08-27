import React from 'react';
import {connect} from 'react-redux';
import Ui from './ui';

export default function SearchLoaction({navigation, route}) {
    const mapState2Props = ()=> ({
      navigation,
      route
    });

    const Show = connect(mapState2Props)(Ui)
  return (
     <Show />
  )
}
