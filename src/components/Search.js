// Dependencias
import React, { Component } from 'react';
import store from '../store';

// Assets
import '../assets/css/search.css';

class Search extends Component {

    change = (event) => {
        const { value } = event.target;

        let searchMovies = store.getState()._movies.filter(data => data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        
        store.dispatch({ type: 'FILTER_MOVIES', movies: searchMovies });
    }

    render() {
        return (
            <div className="Search">
                <div className="container">
                    <label htmlFor="search_input">Buscar:</label>
                    <input type="text" id="search_input" placeholder="Buscar" onChange={this.change} />
                </div>
            </div>
        );
    }
}
export default Search;