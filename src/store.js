import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk'; 
import stock from './redux/stock.js';
import { composeWithDevTools} from 'redux-devtools-extension';

const state = {
    stock: [],
};

const reducer = combineReducers({
    stock,
});

const store = createStore(
    reducer, 
    state, 
    composeWithDevTools(applyMiddleware(thunkMiddleWare)),
);

export default store; 