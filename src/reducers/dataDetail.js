import { FETCHING_DATA_DETAIL, FETCHING_DATA_DETAIL_SUCCESS, FETCHING_DATA_DETAIL_FAILURE } from '../constants';

const INITIAL_STATE = {
    detail: [],
    isFetching: false,
    error: false
};

const dataDetail = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_DATA_DETAIL:
            return {
                ...state,
                detail: [],
                isFetching: true
            }
        case FETCHING_DATA_DETAIL_SUCCESS:
            return {
                ...state,
                detail: action.data,
                isFetching: false
            }
        case FETCHING_DATA_DETAIL_FAILURE:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};
export default dataDetail;