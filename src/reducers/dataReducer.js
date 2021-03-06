import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                movies: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                movies: action.data,
                isFetching: false
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};
export default dataReducer;