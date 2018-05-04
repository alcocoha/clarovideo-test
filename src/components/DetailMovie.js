// Dependencias
import React, { Component } from "react";
import store from '../store';

// Assets
import '../assets/css/detail.css';

class DetailMovie extends Component {
    constructor() {
        super();
        store.subscribe(() => {
            this.setState({
                movies: store.getState().movies
            });
        });
    }
    render() {
        let dataDetail = store.getState().movies.filter(data => data.id === this.props.match.params.id);
        console.log(dataDetail[0]);
        return (
            <div className="DetailMovie">
                <div className="container detail-movie-container">
                    {
                        dataDetail.map(index =>
                            <div className="row" key={index.id}>
                                <div className="col-md-5">
                                    < h1 > {index.title} </h1>
                                    <img src={index.image_small} alt="" className="img-detail"/>
                                </div>
                                <div className="col-md-7 description">
                                    <p>
                                        {index.description_large}
                                    </p>
                                    <p>
                                        Año: {index.year}
                                        <br/>
                                        Duración: {index.duration}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default DetailMovie;