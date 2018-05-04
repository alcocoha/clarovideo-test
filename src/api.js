// Dependencias
import axios from "axios";
import store from './store';

const BASE_URL = 'https://mfwkweb-api.clarovideo.net';
const params = `api_version=v5.8&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=1uka8rqujakqqp65me121o7017&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869`;

const ClaroVideAPI = {
    getMovies: () => {
        const endpoint = `${BASE_URL}/services/content/list?${params}`;
        axios.get(endpoint).then(res => {
            store.dispatch({ type: 'RETRIEVE_MOVIES', movies: res.data.response.groups, _movies: res.data.response.groups });
        });
    }

}

export default ClaroVideAPI;