import {SEARCH_TERM} from '../actions/index';

//concatenate new search term to the 'terms' list
export default function (state=[], action){
    switch (action.type){
        case SEARCH_TERM:
            return [action.payload, ...state];
            console.log(state);

    }
    return state;
}