// Dependencias
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataDetail } from "../actions";

// Assets
import '../assets/css/detail.css';

class DetailMovie extends Component {

    componentWillMount() {
        this.props.fetchDataDetail(this.props.match.params.id);
    }
    
    render() {
        const {movie} = this.props;
        console.log('extendedcommon' in movie)
        return (
            <div className="DetailMovie">
                <div className="container detail-movie-container">
                    {
                        <div className="row">
                            <div className="col-md-5">
                                <h1> {movie.title} </h1>
                                <img src={movie.image_small} alt="" className="img-detail" />
                            </div>
                            <div className="col-md-7 description">
                                <p>
                                    Descripción: {movie.large_description}
                                </p>
                                <p>
                                    Año: {'extendedcommon' in movie && movie.extendedcommon.media.publishyear} 
                                </p>
                                <p>
                                    <br />
                                    Duración: {movie.duration}
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        movie: state.dataReducer.payloadDetail
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchDataDetail: (id) => dispatch(fetchDataDetail(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);