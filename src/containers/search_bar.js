import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGif } from '../actions/index';
import { SearchTerm } from '../actions/index';


class SearchBar extends Component {
    constructor (props) {
        super (props);
        this.state = { term: ''};
        this.onInputChange= this.onInputChange.bind(this);
        this.onFormSubmit= this.onFormSubmit.bind(this);
    }
    
    onInputChange(event){
        this.setState ( {term: event.target.value});
    }
    
	//Fetch Gif data via action function creator
    onFormSubmit (event) {
        event.preventDefault();
        this.props.fetchGif(this.state.term);
        this.props.SearchTerm(this.state.term);
        document.querySelector('.gif-list-title').innerHTML=this.state.term+" Gif results";
        this.setState({ term: ''});
    }
    
	//return form of Search Bar for gifs
    render(){
        return (
            <form onSubmit={this.onFormSubmit} >
				<div className="input-group">
                	<input 
						placeholder="Search for your favorite gifs"
                    	className="form-control"
						value={this.state.term}
                    	onChange={this.onInputChange} />
                	<span className="input-group-btn">
                    	<button type="submit" className="btn btn-secondary"> Search </button>
                	</span>
				</div>
                <div className="gif-list-title">Trending Now </div>
            </form>
        );
    }
}

//connect to app action creators

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchGif, SearchTerm}, dispatch );
}

export default connect (null, mapDispatchToProps)(SearchBar);