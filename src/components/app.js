import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import GifList from '../containers/gif_list';
import ListHistory from '../containers/gif_list_history';


export default class App extends Component {
  render() {
    return (
        <div>
            <SearchBar />
            <GifList />
            <ListHistory />
        </div>
    );
  }
}
