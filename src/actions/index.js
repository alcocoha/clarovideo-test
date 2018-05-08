import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_DATA_DETAIL, FETCHING_DATA_DETAIL_SUCCESS, FETCHING_DATA_DETAIL_FAILURE } from '../constants';
import axios from "axios";

export const getData = () => {
    return {
        type: FETCHING_DATA
    }
}

export const getDataSuccess = data => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data: data
    }
}

export const getDataFailure = () => {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export const getDataDetail = () => {
    return {
        type: FETCHING_DATA_DETAIL
    }
}

export const getDataDetailSuccess = data => {
    return {
        type: FETCHING_DATA_DETAIL_SUCCESS,
        data: data
    }
}

export const getDataDetailFailure = () => {
    return {
        type: FETCHING_DATA_DETAIL_FAILURE
    }
}

export const fetchData = () => {
    const BASE_URL = 'https://mfwkweb-api.clarovideo.net';
    const params = `api_version=v5.8&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=1uka8rqujakqqp65me121o7017&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869`;
    const endpoint = `${BASE_URL}/services/content/list?${params}`;

    return dispatch => {
        dispatch(getData());
        return axios.get(endpoint)
            .then(res => {
                dispatch( getDataSuccess(res.data.response.groups) );
            })
            .catch(dispatch(getDataFailure()));
    }
}

export const fetchDataDetail = (id) => {
    const BASE_URL = 'https://mfwkweb-api.clarovideo.net';
    const params = `api_version=v5.82&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=akok4b0ulosok9nccubd9a58r7&group_id=${id}`;
    const endpoint = `${BASE_URL}/services/content/data?${params}`;

    return dispatch => {
        dispatch(getDataDetail());
        return axios.get(endpoint)
            .then(res => {
                dispatch(getDataDetailSuccess(res.data.response.group.common));
            })
            .catch(dispatch(getDataDetailFailure()));
    }
}