// Dependencias
import { createStore, applyMiddleware } from 'redux';

const INITIAL_STATE = {
    error: false,
    movies: [],
    _movies: [],
}
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RETRIEVE_MOVIES':
            return {
                ...state,
                movies: action.movies,
                _movies: action.movies
            }
        case 'FILTER_MOVIES':
            return{
                ...state,
                movies: action.movies,
            }
        case 'RETRIEVE_MOVIES_FAIL':
            return {
                ...state,
                error: false
            }
        default:
            return state;
    }
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default createStore(reducer, { movies : [] }, applyMiddleware(logger));