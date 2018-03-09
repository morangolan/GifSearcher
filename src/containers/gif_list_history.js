import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { fetchGif } from '../actions/index';

class ListHistory extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.onListClick= this.onListClick.bind(this);
        this.renderTerms= this.renderTerms.bind(this);
    }
	
	//show the result of previews term when clicked
    onListClick(event){
        const term=event.target.innerHTML;
		this.props.fetchGif(term);
		document.querySelector('.gif-list-title').innerHTML=term+" Gif results";
    }
	
	//render each list item-'term', by map over the list 'terms' on app State
    renderTerms(term){  
            return ( <li 
                        onClick={this.onListClick}
                        value={term}
                        className="term-item " 
                        key={term}> {term} 
                    </li>
            );
        
    }
	
	//return the left bar- list of all the previews search terms
    render(){
        return(
            <div className="search-history">
                <div className="history-title"> Recent Searches </div>
                <ul className="history-list">
                    {this.props.terms.map(this.renderTerms)}
                </ul>
            </div>    
        );
    }
}

//connect to app state and action creators
function mapStateToProps ( {terms} ) {
    return { terms };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchGif}, dispatch );
}

export default connect (mapStateToProps, mapDispatchToProps)(ListHistory);