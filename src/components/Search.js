// Dependencias
import React, { Component } from 'react';

// Assets
import '../assets/css/search.css';

class Search extends Component{
    render() {
        return (
            <div className="Search">
                <div className="container">
                    <label htmlFor="search_input">Buscar:</label>
                    <input type="text" id="search_input" placeholder="Buscar"/>
                </div>
            </div>
        );
    }
}
export default Search;