// Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from "../actions";

// Componentes
import Search from './Search';

// Assets
import '../assets/css/movieList.css';

class MovieList extends Component {
    /*
    # IMPORTANTE: Para evitar modificar el state del store al momento de hacer el filtro de peliculas
    # se crea un state independiente que se alimentara inicialmente del store pero que NO lo afectara
    # unicamente en esta vista
    */
    state = {
        movies: [],
        _movies: [],
    }

    componentWillMount() {
        this.props.fetchData();
    }

    componentWillReceiveProps = ({ movies }) => {
        if (movies.payload.length != -1 ){
            this.setState({
                movies: movies.payload,
                _movies: movies.payload
            })
        }
    }

    onSearchChange = (query) => {
        let searchMovies = this.state._movies.filter(data => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        this.setState({
            ...this.state,
            movies: searchMovies
        })
    }

    getMovie = () => {
        const { movies } = this.state;
        
        return (movies.map(movie =>
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
        );
    }
    
    render() {
        let movies = this.getMovie();
        return (
            <div className="MovieList">
                <Search onChange={this.onSearchChange} />
                <div className="container">
                    <div className="row">
                        {this.props.movies.isFetching && <text>Cargando...</text>}
                        {
                            movies
                        }
                    </div>
                </div>
            </div>
        );
    }
}
// Regresa los estados de redux por props
const mapStateToProps = state => {
    return {
        movies: state.dataReducer
    }
}
// Dispara las acciones
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);