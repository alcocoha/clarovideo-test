// Dependencias
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

// thunk: permite devolver una función en el action
const configureStore = () => {
    let store = createStore(reducers, applyMiddleware(logger, thunk));
    return store;
}
export default configureStore;