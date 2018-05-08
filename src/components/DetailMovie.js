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
        const { detail } = this.props;
        return (
            <div className="DetailMovie">
                <div className="container detail-movie-container">
                    {
                        this.props.isFetching && <text>Cargando...</text>
                    }
                    {!this.props.isFetching &&
                        <div className="row">
                            <div className="col-md-5">
                                <h1 className="main-title"> {detail.title} </h1>
                                <img src={detail.image_small} alt="" className="img-detail" />
                            </div>
                            <div className="col-md-7 description">
                                <p>
                                    <strong>
                                        <span className="title-description">
                                            {detail.title} ({'extendedcommon' in detail && detail.extendedcommon.media.publishyear}) {detail.duration}
                                        </span>
                                    </strong>
                                </p>
                                <p>{detail.large_description}</p>
                                <p>
                                    <strong>Género:</strong> {
                                        'extendedcommon' in detail && detail.extendedcommon.genres.genre.map(index => <text>{index.desc} </text>)
                                    }
                                </p>
                                <p>
                                    {
                                        'extendedcommon' in detail && detail.extendedcommon.roles.role.map((index, key) =>
                                            <p>
                                                <strong>{index.name}: </strong>
                                                {
                                                    index.talents.talent.map(item => <span className="border-name">{item.fullname}</span>)
                                                }
                                            </p>


                                        )
                                    }
                                </p>
                                <p>
                                    <br />
                                    Titulo original: {'extendedcommon' in detail && detail.extendedcommon.media.originaltitle}
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
        detail: state.dataDetail.detail,
        isFetching: state.dataDetail.isFetching
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchDataDetail: (id) => dispatch(fetchDataDetail(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);