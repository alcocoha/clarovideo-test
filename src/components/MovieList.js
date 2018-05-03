// Dependencias
import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

// Componentes
import Search from './Search';

// Assets
import '../assets/css/movieList.css';

class MovieList extends Component{

    constructor(){
        super();
        this.state = {
            movies: []
        }
        this.BASE_URL = 'https://mfwkweb-api.clarovideo.net';
        this.params = `api_version=v5.8&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=1uka8rqujakqqp65me121o7017&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869`;
    
    }
    
    componentDidMount() {
        axios.get(`${this.BASE_URL}/services/content/list?${this.params}`)
            .then(response => {
                let res = JSON.parse(response.request.response);
                let movies = res.response.groups;
                console.log(res.response.groups);
                this.setState({ movies });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){
        return (
            <div className="MovieList">
                <Search />
                <div className="container">
                    <div className="row">
                    {
                            this.state.movies.map( movie => 
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