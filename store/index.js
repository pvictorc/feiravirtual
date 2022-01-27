import {createStore} from 'redux'
import cartItems from '../reducers/cartItems'
import reducer from '../reducers/index'


export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
};