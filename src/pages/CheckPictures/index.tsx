import React from 'react';
import { connect } from 'react-redux';
import Ui, {IDispatch, IState} from './ui';
import {add_pictuure, changeVideo, delete_picture} from '../../store/community/ActionFunc/postDynamic';

export default function Picker({ route, navigation }) {
  const mapState2Props = (state): IState => ({
    route,
    navigation,
    imgList: state.community.postDynamic.pictures,
  });
  const mapDispatch2Props = (dispatch): IDispatch => ({
    addImgs(imgList: any[], newImgs: any[]) {
      dispatch(add_pictuure(imgList.concat(newImgs)))
    }
  })
  const Show = connect(mapState2Props, mapDispatch2Props)(Ui);
  return (
    <Show />
  )
}
