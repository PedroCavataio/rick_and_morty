import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'; 

const store = createStore(reducer); // Configura el store con reducer

export default store;


/* import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
 */
