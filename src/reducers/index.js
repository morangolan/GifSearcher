import { combineReducers } from 'redux';
import TermsListReducer from './reducer_terms_list';
import GifsReducer from './reducer_gifs';

//Main app State is updated by child reducers
const rootReducer = combineReducers({
	terms: TermsListReducer, //list of all the terms that are searched
    gifs: GifsReducer  //list of result gif to current search term
    
});

export default rootReducer;
