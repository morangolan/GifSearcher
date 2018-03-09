import axios from 'axios';
const API_KEY='8cCQghMXtTD2gTJIRzm6e44USkHD2gwW';
const ROOT_URL_SEARCH=`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=24`;
const ROOT_URL_TRENDING=`http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=24`;

export const FETCH_GIF = 'FETCH_GIF';
export const SEARCH_TERM = 'SEARCH_TERM';

//Action Creator- Fetch gif by search term/trending
export function fetchGif(term) {
    var gif_url='';
    if(term!=''){
         gif_url = `${ROOT_URL_SEARCH}&q=${term}`;
    }
    else{
         gif_url = ROOT_URL_TRENDING;
    }
    
    const request=axios.get(gif_url);
    
    return {
        type: FETCH_GIF,
        payload: request
    };
}


//Action Creator- Add 'search term' to the state term list
export function SearchTerm(term) {    
    return {
        type: SEARCH_TERM,
        payload: term
    };
}

