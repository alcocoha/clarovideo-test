import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_DATA_DETAIL_SUCCESS } from '../constants';

const INITIAL_STATE = {
    payload: [],
    payloadDetail: [],
    isFetching: false,
    error: false
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                payload: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                isFetching: false
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                error: true
            }
        case FETCHING_DATA_DETAIL_SUCCESS:
            return {
                ...state,
                payloadDetail: action.payloadDetail
            }
        default:
            return state;
    }
};
export default dataReducer;