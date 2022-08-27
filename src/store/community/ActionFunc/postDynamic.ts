import * as ActionTypes from '../ActionTypes/postDynamic';
import {action} from '../../../types';
import { IPostDynamic } from '../postDynamic';

export function add_pictuure(newPictures: any[]): action<IPostDynamic> {
    return {
        payload: {
            pictures: newPictures,
            video: void 0,
        },
        type: ActionTypes.ADD_PICTURE
    }
}

export function delete_picture(newPictures: any[]): action<IPostDynamic> {
    return {
        payload: {
            pictures: newPictures,
            video: void 0
        },
        type: ActionTypes.DELETE_PICTURE
    }
}

export function changeVideo(video: any): action<IPostDynamic> {
    return {
        payload: {
            pictures: [],
            video
        },
        type: ActionTypes.CHANGE_Video
    }
}