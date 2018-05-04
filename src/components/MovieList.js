// Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

// Componentes
import Search from './Search';

// Assets
import '../assets/css/movieList.css';

class MovieList extends Component {

    constructor(){
        super();
        store.subscribe(() => {
            this.setState({
                movies: store.getState().movies
            });
        });
    }
    
    render() {
        console.log(store.getState().movies);
        return (
            <div className="MovieList">
                <Search />
                <div className="container">
                    <div className="row">
                        {
                            store.getState().movies.map(movie =>
                                <div className="col-md-3 img-container" key={movie.id}>

                                    <Link to={`/detail/${movie.id}`} title={movie.title} className="movie-link-detail">
                                        <div className="conteiner-icon">
                                            <i className="fa fa-play-circle-o play-icon"></i>
                                        </div>
                                        <img alt={movie.title} src={movie.image_small} className="img-movie" />
                                        <img alt={movie.title} src={movie.image_medium} className="d-md-none d-sm-block " />
                                    </Link>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default MovieList;