// Dependencias
import React, { Component } from 'react';
import store from '../store';

// Assets
import '../assets/css/search.css';

class Search extends Component {

    state = {
        value: ""
    }
    change = (event) => {
        const {  value } = event.target;
        this.setState({ value }, () => this.props.onChange(this.state.value))
    }

    render() {
        return (
            <div className="Search">
                <div className="container">
                    <label htmlFor="search_input">Buscar:</label>
                    <input type="text" id="search_input" placeholder="Buscar" value={this.state.value} onChange={this.change} />
                </div>
            </div>
        );
    }
}
export default Search;