// Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

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
    initState = (data) => {
        if (data.length !== -1) {
            return this.setState({
                movies: data,
                _movies: data
            })
        }
        return null;
    }
    componentWillMount = () => {
        const { movies } = this.props;
        this.initState(movies);
    }

    componentWillReceiveProps = ({ movies }) => {
        this.initState(movies);
    }

    onSearchChange = (query) => {
        let searchMovies = this.state._movies.filter(data => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        this.setState({
            ...this.state,
            movies: searchMovies
        })
    }

    drawStars = (num) => {
        let star = [];
        const totalStars = 5 - num;
        for(let i=0; i < num; i++){
            star.push(
                <span className="fa fa-star"></span>
            );
        }
        if (totalStars!==0){
            for (let i = 0; i < totalStars; i++) {
                star.push(
                    <span className="fa fa-star-o"></span>
                );
            }
        }
        return star;
    }

    getMovie = () => {
        const { movies } = this.state;

        return (movies.map(movie =>
            <div className="col-6 col-md-3 img-container" key={movie.id}>
                <p className="detail-container" data-tip={movie.title} data-for={movie.id}>
                    <Link to={`/detail/${movie.id}`} title={movie.title} className="movie-link-detail">
                        <div className="conteiner-icon">
                            <i className="fa fa-play-circle-o play-icon"></i>
                        </div>
                        <img alt={movie.title} src={movie.image_small} className="img-movie d-none d-md-block" />
                        <img alt={movie.title} src={movie.image_medium} className="img-movie-mobile d-md-none d-sm-block " />
                    </Link>
                </p>
                <ReactTooltip id={movie.id} aria-haspopup='true' role='example' className="tool">
                    <h1 className="tool-title">{movie.title}</h1>
                    <p className="tool-duration">{movie.year}, duración: {movie.duration} hrs.</p>
                    <p className="tool-decription">{movie.description}</p>
                    <p className="tool-stars">
                    {
                        this.drawStars(movie.votes_average)
                    }
                    </p>
                </ReactTooltip>

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
        movies: state.dataReducer.movies
    }
}

export default connect(mapStateToProps)(MovieList);