import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import dataDetail from './dataDetail';

export default combineReducers({
    dataReducer: dataReducer,
    dataDetail: dataDetail
});