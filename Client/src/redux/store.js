import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';



const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

