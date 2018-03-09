import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { fetchGif } from '../actions/index';


class GIFList extends Component {
    constructor (props) {
        super (props);
        this.trending_gif();
    }
    
	//default result when the app first load
    trending_gif(){
        if (this.props.terms.length==0){
             this.props.fetchGif('');  
        }
    }
    

  	//Rendering each gif in the list by map over the gifs list  
    renderGif(gif){
            const gifImageURL= gif.images.fixed_width.url;  
            const title=gif.title;
            const gifURL=gif.url;
            return (<li onClick={()=> window.open(gifURL,'_blank')} className="list-group-item" key={gif.id}>
                        <div className="gif-list-media">
                            <div className="media">
                                <img className="media-object" src={gifImageURL} />
                            </div>
                            <div className="title">{title}</div>
                        </div>
                    </li>
            );
    }
	
	//return all the search result by list
    render(){  
        if (this.props.gifs.length==0){
            return <div>Loading... </div>;
        }
        return (
            <div className="result-col">
                <ul className="list-unstyled">
                    {this.props.gifs.map(this.renderGif)}
                </ul>
            </div>
        );
    }
}

//connect to app state and action creators
function mapStateToProps ( {gifs, terms} ) {
    return { gifs, terms };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchGif}, dispatch );
}

export default connect (mapStateToProps, mapDispatchToProps)(GIFList);
