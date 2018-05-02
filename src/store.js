import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk'; 
import stocks from './redux/stock.js';
import { composeWithDevTools} from 'redux-devtools-extension';


const reducer = combineReducers({
    stocks,
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleWare)),
);

export default store; 