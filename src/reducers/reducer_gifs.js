import {FETCH_GIF} from '../actions/index';

//return the gif list inside the payload object
export default function (state=[], action){
    switch (action.type){
        case FETCH_GIF: 
            return action.payload.data.data;
    }
    return state;
}